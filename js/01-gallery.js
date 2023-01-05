import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");


const galleryMarkup = galleryItems.map(({preview, original, description}) =>`<div class="gallery__item"><a class = "gallery__link" href =${original}><img class = "gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></div>`).join("");

galleryBox.innerHTML=galleryMarkup;


galleryBox.addEventListener("click", showBigPicture);
function showBigPicture(event){
    if (event.target.nodeName !== "IMG"){
    return;
    }
    event.preventDefault();
    
    const instance = basicLightbox.create(`
    <img src= "${event.target.dataset.source}" width="800" height="600">
`)
instance.show()
}
