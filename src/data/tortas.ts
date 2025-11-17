// Lista detallada de 67 tortas. Rellena las rutas de imagen en /Image/tortas/ con tus archivos reales.
export type Torta = {
  id: string;
  title: string;
  price: number; // en COP (valor entero, por ejemplo 18000)
  img: string;
  description: string;
};

const tortas: Torta[] = [
  { id: 'torta-1', title: 'Torta de chantilly', price: 18000, img: 'https://i.ibb.co/5WjjpYvD/Torta-Morada.jpg', description: 'Torta cubierta de chantilly morada rellena de arequipe, de dos pisos ideal para cualquier celebración.' },
  { id: 'torta-2', title: 'Torta de arequipe', price: 22000, img: 'https://i.ibb.co/JXPYZyB/Torta-arequipe1.png', description: 'Torta cubierta y rellena de arequipe para disfrutar y celebrar en cualquier ocasión.' },
  { id: 'torta-3', title: 'Torta de chantilly (Tematica primera comunion)', price: 20000, img: 'https://i.ibb.co/ynNcBKnZ/Primera-comunion1.jpg', description: 'Torta cubierta de chantillly y rellena de arequipe, decorada con rosas blancas y rocetones en la parte inferior de la misma, ideal para cualquier celebracion importante, como matrimonios, primera comunion, bautizos, etc.' },
  { id: 'torta-4', title: 'Torta ponque rosada', price: 24000, img: 'https://i.ibb.co/Z6k1kvNp/photo-77-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly rosada con degradado a blanco, ideal para celebrar un cumpleaños.' },
  { id: 'torta-5', title: 'Torta de chocolate', price: 19000, img: 'https://i.ibb.co/q3Q5Sx1N/photo-2-2025-10-13-11-03-21.jpg', description: 'Torta cubierta de chocolate, con glaceado de chocolate y con toppins de chocolate bianchi, para aquellos amantes del chocolate es la mejor opcion.' },
  { id: 'torta-6', title: 'Torta chantilly (Tematica primera comunion)', price: 23000, img: 'https://i.ibb.co/wFn2gxf8/photo-4-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly con tematica para primera comunion.' },
  { id: 'torta-7', title: 'Torta de chantilly con fresa', price: 21000, img: 'https://i.ibb.co/bjCdXH6f/photo-5-2025-10-13-11-03-21.jpg', description: 'Torta ponque de fresa con crema de chantilly y fresa ideal para tu cumpleaños.' },
  { id: 'torta-8', title: 'Torta red velvet', price: 22000, img: 'https://i.ibb.co/KxS01x65/photo-6-2025-10-13-11-03-21.jpg', description: 'Torta red velvet con crema frosting de queso.' },
  { id: 'torta-9', title: 'Torta de chantilly (tematica de futbol)', price: 20000, img: 'https://i.ibb.co/svCMphqy/photo-7-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly, tematica e futbol.' },
  { id: 'torta-10', title: 'Torta de chantilly con fresa', price: 23000, img: 'https://i.ibb.co/MyGwhXMr/photo-10-2025-10-13-11-03-21.jpg', description: 'Torta ponque de fresa con crema de chantilly y fresa ideal para cualquier celebración.' },
  { id: 'torta-11', title: 'Torta de chantilly (Tematica de princesas)', price: 75000, img: 'https://i.ibb.co/wNrpY1dQ/photo-11-2025-10-13-11-03-21.jpg', description: 'Torta ponque de dos pisos cubierta de chantilly con tematica de la princesa de disney Rapunzel.' },
  { id: 'torta-12', title: 'Torta quesillo de chocolate', price: 53000, img: 'https://i.ibb.co/C35BryxM/photo-12-2025-10-13-11-03-21.jpg', description: 'Torta de quesillo de chocolate cubierta de arequipe y chocolate.' },
  { id: 'torta-13', title: 'Torta tres leches', price: 65000, img: 'https://i.ibb.co/hRPTN0QX/photo-13-2025-10-13-11-03-21.jpg', description: 'Torta tres leches cubierta de chantilly con un poco de melocoton.' },
  { id: 'torta-14', title: 'Torta tres leches', price: 65000, img: 'https://i.ibb.co/cSV1B5Yq/photo-14-2025-10-13-11-03-21.jpg13-11-03-21.jpg', description: 'Torta tres leches cubierta de chantilly con fresas.' },
  { id: 'torta-15', title: 'Torta de chantilly', price: 50000, img: 'https://i.ibb.co/S71G9jm4/photo-15-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly con tematica de sirena y el fondo del mar' },
  { id: 'torta-16', title: 'Torta de chocolate ', price: 60000, img: 'https://i.ibb.co/7xXGy3Dq/photo-16-2025-10-13-11-03-21.jpg', description: 'Torta cubierta y rellena de choclate ideal para cualquier ocasion.' },
  { id: 'torta-17', title: 'Tortqa fria de parchita', price: 45000, img: 'https://i.ibb.co/dsZtJCbN/photo-18-2025-10-13-11-03-21.jpg', description: 'Torta fria cubierta y rellena de parchita.' },
  { id: 'torta-18', title: 'Torta fria de fresa y melocoton', price: 55000, img: 'https://i.ibb.co/ZzFfdvvg/photo-20-2025-10-13-11-03-21.jpg', description: 'Torta fria rellena de melocoton y fresa ideal para deleatarte de la mejor manera.' },
  { id: 'torta-19', title: 'Torta tres leches (Tematica de futbol)', price: 75000, img: 'https://i.ibb.co/Z6NspYsK/photo-23-2025-10-13-11-03-21.jpg', description: 'Torta de chantilly tres leches con tematica del deportivo tachira, ideal para los amantes del deporte rey.' },
  { id: 'torta-20', title: 'Torta de chantilly', price: 68000, img: 'https://i.ibb.co/twXWLSpp/photo-24-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly decorada con mariposas para darle un toque mas bonito.' },
  { id: 'torta-21', title: 'Torta de chantilly (Tematica bob esponja)', price: 72000, img: 'https://i.ibb.co/20xb28P4/photo-35-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly con tematica de bob esponja.' },
  { id: 'torta-22', title: 'Torta de chocolate y oreo', price: 64000, img: 'https://i.ibb.co/Cs79gW0c/photo-36-2025-10-13-11-03-21.jpg', description: 'Torta cubierta de chocolate y oreo rellena de chocolate, ideal para los amantes del chocolate.' },
  { id: 'torta-23', title: 'Torta de chantilly (Tematica de Minnie Mouse)', price: 70000, img: 'https://i.ibb.co/p63f8SzR/photo-37-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly con tematica de Minnie Mouse.' },
  { id: 'torta-24', title: 'Torta de chantilly (Tematica de primera comunion)', price: 66000, img: 'https://i.ibb.co/PzmqYnPR/photo-38-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly con tematica de primera comunion.' },
  { id: 'torta-25', title: 'Torta de chantilly (Tematica de primera comunion)', price: 66000, img: 'https://i.ibb.co/V0BzcF3t/photo-39-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de chantilly con tematica de primera comunion.' },
  { id: 'torta-26', title: 'Torta de chantilly', price: 58000, img: 'https://i.ibb.co/zWsHGnMt/photo-27-2025-10-13-11-03-21.jpg', description: 'Torta ponque de dos pisos cubierta de chantilly, la mejor opcion para celebrar tu cumpleaños.' },
  { id: 'torta-27', title: 'Torta de chantilly (Tematica de Mikecrack)', price: 60000, img: 'https://i.ibb.co/NdZctm9F/photo-26-2025-10-13-11-03-21.jpg', description: 'Torta ponque cubierta de crema chantilly con tematica del youtuber MikeCrack' },
  { id: 'torta-28', title: 'Ponques con tematica de Mikecrack', price: 62000, img: 'https://i.ibb.co/PvGgyxDC/photo-25-2025-10-13-11-03-21.jpg', description: 'Ponque sobre la tematica de Mikecrack.' },
  { id: 'torta-29', title: 'Torta de chantilly', price: 70000, img: 'https://i.ibb.co/V080w1NX/photo-45-2025-10-13-11-03-21.jpg', description: 'Torta cubierta de chantilly blanca con rosas rojas.' },
  { id: 'torta-30', title: 'Torta fria de piña', price: 72000, img: 'https://i.ibb.co/1tMZgKvG/photo-50-2025-10-13-11-03-21.jpg', description: 'Torta fria cubierta de chantilla y piña.' },
  { id: 'torta-31', title: 'Torta fria de fresa', price: 68000, img: 'https://i.ibb.co/cSgmRymQ/photo-42-2025-10-13-11-03-21.jpg', description: 'Torta fria de fresa cubierta con crema chantilly.' },
  { id: 'torta-32', title: 'Torta de chantilly (Tematica de Naruto)', price: 75000, img: 'https://i.ibb.co/Dgphp89y/photo-48-2025-10-13-11-03-21.jpg', description: 'Torta de chantilly con tematica de Naruto. ideal para celebrar un cumpleaños' },
  { id: 'torta-33', title: 'Torta de chocolate ', price: 80000, img: 'https://i.ibb.co/0jmSDmc5/photo-49-2025-10-13-11-03-21.jpg', description: 'Torta de chocolate con relleno de chocolate y decoraciones de chocolate, TODO ES CHOCOLATE.' },
  { id: 'torta-34', title: 'Gelatina 3D (Tematica de Mario Bross)', price: 67000, img: 'https://i.ibb.co/0RdcrzzY/photo-43-2025-10-13-11-03-21.jpg', description: 'Gelatina 3D con tematica de Mario Bross, magnifico para los amantes de los videojuegos.' },
  { id: 'torta-35', title: 'Gelatina 3D (Tematica de Bob esponja)', price: 72000, img: 'https://i.ibb.co/HTK0Mt1Y/photo-57-2025-10-13-11-03-21.jpg', description: 'Gelatina 3D con tematica de Bob esponja, ideal para los amantes de los dibujos animados.' },
  { id: 'torta-36', title: 'Gelatina 3D  (Tematica de Minecraft)', price: 76000, img: 'https://i.ibb.co/jZJ72jZR/photo-55-2025-10-13-11-03-21.jpg', description: 'Gelatina 3D con tematica de Minecraft, ideal para los amantes de los videojuegos.' },
  { id: 'torta-37', title: 'Torta chantilly sencilla', price: 80000, img: 'https://i.ibb.co/1J4pcXZq/photo-66-2025-10-13-11-03-21.jpg', description: 'Torta chantilly sencilla, Lo que necesitas para celebrar cualquier ocasion.' },
  { id: 'torta-38', title: 'Torta chantilly (Tematica de Bautiazo)', price: 78000, img: 'https://i.ibb.co/nqv3t9mw/photo-69-2025-10-13-11-03-21.jpg', description: 'Torta chantilly con tematica de Bautiazo, ideal para los amantes de los videojuegos.' },
  { id: 'torta-39', title: 'Torta chantilly (Tematica de Bad Bunny)', price: 80000, img: 'https://i.ibb.co/99N4rD0n/photo-71-2025-10-13-11-03-21.jpg', description: 'Torta chantilly con tematica de Bad Bunny, Lo  mejor para complacer al fanatico de la musica urbana.' },
  { id: 'torta-40', title: 'Torta chantilly (Tematica de la princesita sofia)', price: 75000, img: 'https://i.ibb.co/k2tRGy7Z/photo-70-2025-10-13-11-03-21.jpg', description: 'Torta chantilly con tematica de la princesita sofia, fastastico para las fanaticas de la caricatura animada.' },
  { id: 'torta-41', title: 'Torta de chantilly (Tematica de Rapunzel)', price: 70000, img: 'https://i.ibb.co/BM50CC1/photo-72-2025-10-13-11-03-21.jpg', description: 'Torta cubierta de chantilly con tematica de Rapunzel, ideal para celebrar un cumpleaños.' },
  { id: 'torta-42', title: 'Torta de chocolate y oreo', price: 70000, img: 'https://i.ibb.co/cSDX2ym8/photo-76-2025-10-13-11-03-21.jpg', description: 'Torta cubierta de chocolate y oreo, es justo lo que necesitas para celebrar tu cumpleaños por todo lo alto.' },
  { id: 'torta-43', title: 'Torta fria de fresa', price: 72000, img: 'https://i.ibb.co/zHmKHcXt/photo-82-2025-10-13-11-03-22.jpg', description: 'Torta fria rellena de fresas frescas y cubierta de crema chantilly, perfecta para cualquier celebración.' },
  { id: 'torta-44', title: 'Torta de chocolate', price: 75000, img: 'https://i.ibb.co/hFr0Dnts/photo-81-2025-10-13-11-03-22.jpg', description: 'Torta cubierta de arequipe y nuez, ideal para los amantes de los sabores tradicionales.' },
  { id: 'torta-45', title: 'Porciones de quesillos', price: 6000, img: 'https://i.ibb.co/s942FtbB/photo-54-2025-10-13-11-03-21.jpg', description: 'Deleitate con una porcion de quesillo, la mejor que haz probado nunca.' },
  { id: 'torta-46', title: 'Torta de chocolate y oreo', price: 68000, img: 'https://i.ibb.co/9HFM1VjT/photo-53-2025-10-13-11-03-21.jpg', description: 'Torta de chocolate y oreo, ideal para los amantes de los sabores intensos.' },
  { id: 'torta-47', title: 'Torta chantilly', price: 72000, img: 'https://i.ibb.co/23RkpqDp/photo-51-2025-10-13-11-03-21.jpg', description: 'Torta cubierta de chantilly y rosas rosas, es justo lo que necesitas para celebraciones formales.' },
  { id: 'torta-48', title: 'Torta tres leches (Tematica navideña)', price: 70000, img: 'https://i.ibb.co/XkYFLZmB/photo-30-2025-10-13-11-03-21.jpg', description: 'Torta tres leches con tematica navideña, ideal para celebrar las fiestas.' },


];

export default tortas;

export function formatCOP(n: number) {
  try {
    return `${Number(n).toLocaleString('es-CO')}`;
  } catch (e) {
    return `$${n}`;
  }
}
