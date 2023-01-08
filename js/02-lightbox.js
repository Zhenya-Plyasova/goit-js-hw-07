import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({preview, original, description}) =>`<a class = "gallery__link" href =${original}><img class = "gallery__image" src="${preview}" alt="${description}"></a>`).join("");

galleryBox.innerHTML=galleryMarkup;

galleryBox.addEventListener("click", showBigPicture);
function showBigPicture(event){
    if (event.target.nodeName !== "IMG"){
    return;
    }
    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery a', {

    captionsData: "alt",
    captionDelay: 250,

});

}



