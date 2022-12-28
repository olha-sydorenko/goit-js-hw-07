import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

function createMarkup (array) {
 const markup = array.map(({ preview, original, description }) => {
     return `<a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>`;  
}).join("");
gallery.innerHTML = markup;
}
createMarkup(galleryItems);




let galleryList = new SimpleLightbox('.gallery a');
galleryList.on('show.simplelightbox', function (event) {
    event.preventDefault();
	galleryList.options.captionsData = 'alt';
    galleryList.options.captionsDelay = 250;
    galleryList.enableKeyboard = true;
    console.log(alt)
});

console.log(galleryItems);
