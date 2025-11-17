// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: { csp: true },
  security: {
    // Puedes configurar allowedDomains o checkOrigin aquí si lo necesitas
  }
});
