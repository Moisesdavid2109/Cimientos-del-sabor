(function () {
    if (typeof window === 'undefined') return;

    const rootSelector = '[data-page]';
    const container = () => document.querySelector(rootSelector);

            const syncHead = (doc) => {
                const head = document.head;
                const newHead = doc.head;
                if (!head || !newHead) return Promise.resolve();

                const currentLinks = Array.from(head.querySelectorAll('link[rel="stylesheet"]'));
                const newLinks = Array.from(newHead.querySelectorAll('link[rel="stylesheet"]'));

                // Build sets of both attribute hrefs and resolved absolute hrefs
                const currentAttr = new Set(currentLinks.map(l => l.getAttribute('href')));
                const currentAbs = new Set(currentLinks.map(l => l.href));

                const newAttrArr = newLinks.map(l => l.getAttribute('href'));
                const newResolvedArr = newLinks.map(l => {
                    try { return new URL(l.getAttribute('href'), doc.baseURI).href; } catch(e) { return l.href; }
                });

                    // Do NOT remove existing stylesheet links (conservative approach)
                    // Append new links that don't exist yet (by attribute or resolved)
                const toLoad = [];
                newLinks.forEach(l => {
                    const attr = l.getAttribute('href');
                        // add by attribute if not present
                        if (!currentAttr.has(attr)) {
                            console.debug('[page-transitions] adding stylesheet', attr);
                            const clone = document.createElement('link');
                            clone.rel = 'stylesheet';
                            clone.href = attr;
                            Array.from(l.attributes).forEach(a => { if (a.name !== 'href' && a.name !== 'rel') clone.setAttribute(a.name, a.value); });
                            head.appendChild(clone);
                            toLoad.push(new Promise((resolve) => {
                                const timer = setTimeout(() => { resolve(); }, 800);
                                clone.addEventListener('load', () => { clearTimeout(timer); resolve(); });
                                clone.addEventListener('error', () => { clearTimeout(timer); resolve(); });
                            }));
                        }
                });

                // Sync inline page styles marked with data-page-style (replace all)
                const currentStyles = Array.from(head.querySelectorAll('style[data-page-style]'));
                currentStyles.forEach(s => s.remove());
                // take styles from anywhere in the fetched document (head or body)
                const newInlineStyles = Array.from(doc.querySelectorAll('style[data-page-style]'));
                if (newInlineStyles.length === 0) console.debug('[page-transitions] no inline page styles found in fetched doc');
                newInlineStyles.forEach(s => head.appendChild(s.cloneNode(true)));

                if (toLoad.length === 0) return Promise.resolve();
                return Promise.race([Promise.all(toLoad), new Promise(r => setTimeout(r, 1000))]);
            };

        const replaceContent = async (htmlText, href) => {
            const doc = new DOMParser().parseFromString(htmlText, 'text/html');
            const newContent = doc.querySelector(rootSelector) || doc.querySelector('main');
            const newTitle = doc.querySelector('title');

                if (newTitle) {
                    document.title = newTitle.textContent;
                } else {
                    // fallback: use first H1 in the new content as title if available
                    const h1 = newContent ? newContent.querySelector('h1') : null;
                    if (h1 && h1.textContent.trim()) {
                        document.title = h1.textContent.trim();
                        console.debug('[page-transitions] title fallback set from H1:', document.title);
                    }
                }
            // wait for head sync (styles to load) before swapping content to avoid FOUC
            await syncHead(doc);

            const el = container();
            if (!el) return;

                el.innerHTML = newContent ? newContent.innerHTML : htmlText;
                // if the href contains a hash, try to scroll to that element; otherwise scroll to top
                // compute header height to offset sticky header overlap
                const header = document.querySelector('.site-header');
                const headerH = header ? header.offsetHeight : 0;
                if (href && href.indexOf('#') !== -1) {
                    const hash = href.substring(href.indexOf('#'));
                    // try by id first
                    const id = hash.replace('#','');
                    const target = document.getElementById(id) || document.querySelector(hash);
                                        if (target) {
                                                // wait a couple frames to ensure layout settled; rely on CSS scroll-padding-top
                                                requestAnimationFrame(() => requestAnimationFrame(() => {
                                                    try { target.scrollIntoView({ block: 'start', behavior: 'auto' }); } catch (e) { target.scrollIntoView(); }
                                                }));
                    } else {
                                                try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch (e) { window.scrollTo(0,0); }
                    }
                } else {
                                        // scroll to top; scroll-padding-top will ensure header doesn't overlap
                                        requestAnimationFrame(() => requestAnimationFrame(() => {
                                            try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch (e) { window.scrollTo(0,0); }
                                        }));
                }
                el.classList.add('fade-in');
                setTimeout(() => el.classList.remove('fade-in'), 400);
                // move focus to main content for accessibility
                const main = document.getElementById('main');
                if (main) {
                                if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
                                try { if (typeof main.focus === 'function') main.focus({ preventScroll: true }); } catch (e) { try { main.focus(); } catch(e){} }
                            }
        };

        const navigate = (href) => {
            // Force JS fallback to ensure visible fade animation across browsers
            const el = container();
        if (!el) { window.location.href = href; return; }

        // fallback: fade-out, fetch, replace, fade-in
        el.classList.add('fade-out');
        setTimeout(() => {
            fetch(href, { credentials: 'same-origin' })
                .then(r => {
                    if (!r.ok) throw new Error('Network response not ok');
                    return r.text();
                })
                .then(html => replaceContent(html, href))
                .then(() => window.history.pushState({}, '', href))
                .catch(() => { window.location.href = href; })
                .finally(() => el.classList.remove('fade-out'));
        }, 300);
    };

    document.addEventListener('click', (event) => {
        const a = event.target.closest('a');
        if (!a) return;
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return; // external

        event.preventDefault();
        navigate(url.href);
    });

    // handle back/forward
    window.addEventListener('popstate', () => navigate(location.href));
})();
