import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup (array) {
 const markup = array.map(({ preview, original, description }) => {
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
}).join("");
gallery.innerHTML = markup;
}
createMarkup(galleryItems);

gallery.addEventListener('click', onClickZoom);

function onClickZoom (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
        return
    }
    const imgUrl = event.target.dataset.source;
    const imgDescr = event.target.alt;

    const instance = basicLightbox.create(`
    <img src="${imgUrl}" alt="${imgDescr}">
    `, {
        onShow: (instance) => {document.addEventListener("keydown", onEscape)},
        
        onClose: (instance) => {document.removeEventListener("keydown", onEscape)}
    })
    instance.show();
    function onEscape (event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}

 console.log(galleryItems);






