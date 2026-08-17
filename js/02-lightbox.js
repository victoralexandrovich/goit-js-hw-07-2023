import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalleryItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
}

function createGalleryMarkup(items) {
  return items.map(createGalleryItemMarkup).join("");
}

galleryContainer.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems),
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
