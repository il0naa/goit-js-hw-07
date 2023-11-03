import { galleryItems } from './gallery-items.js';

const list = document.querySelector('.gallery');

function renderList(images) {
    const markup = images.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
        </li>`
    }).join('');

    list.innerHTML = markup;
};

renderList(galleryItems);

list.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
      const source = event.target.parentElement.getAttribute('href');
  
      const instance = basicLightbox.create(`<img src="${source}" alt="Image">`, {
        onShow: (instance) => {
          instance.element().querySelector('img').setAttribute('src', source);
        }
      });
  
      instance.show();
    }
  });
  
console.log(galleryItems);
