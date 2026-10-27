// Chemins des photos dans public/img/phones (servies telles quelles, sans passer par le bundler).
// Pas de nom de fichier dérivé automatiquement de l'id : les fichiers fournis ont des noms
// libres (se.jpg, s20fe.jpg...), donc la correspondance est explicite ici.
const images: Record<string, string> = {
  "iphone-se-2020-64go": "/img/phones/se.jpg",
  "redmi-note-10-128go": "/img/phones/note10.jpg",
  "galaxy-s10-128go": "/img/phones/s10.jpeg",
  "pixel-5-128go": "/img/phones/pixel5.jpg",
  "galaxy-s20-fe-128go": "/img/phones/s20fe.jpg",
  "iphone-11-128go": "/img/phones/iphone11.jpg",
  // Pas encore de photo fournie pour celui-ci : PhotoTelephone retombe sur le pictogramme.
  // Pour l'ajouter : déposer public/img/phones/iphone12mini.jpg et laisser cette ligne telle quelle.
  "iphone-12-mini-64go": "/img/phones/iphone12mini.jpg",
  "pixel-6a-128go": "/img/phones/pixel6a.webp",
  "oneplus-nord-2-256go": "/img/phones/oneplusnord2.jpg",
  "iphone-12-128go": "/img/phones/iphone12.webp",
  "galaxy-s21-256go": "/img/phones/s21.jpg",
  "iphone-13-pro-256go": "/img/phones/iphone13pro.jpg",
}

export default images
