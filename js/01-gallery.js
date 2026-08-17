import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createGalleryItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKeydownEsc);
      },
    },
  );

  function onKeydownEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
