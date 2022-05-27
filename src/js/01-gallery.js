import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMurkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMurkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: `250`,
  overlayOpacity: 0.6,
});

// galleryContainerRef.addEventListener('click', onGalleryContainerClick);

// function onGalleryContainerClick(e) {
//   e.preventDefault();

//   const galleryItem = e.target.classList.contains('gallery__image');
//   if (!galleryItem) {
//   }
// }
