// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<a class="gallery__item" href="${current.original}"><img class="gallery__image" src="${current.preview}" alt="${current.description}"></a>`,
  ''
);

const litebox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
