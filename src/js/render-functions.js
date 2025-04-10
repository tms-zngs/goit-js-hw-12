import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function showLoader() {
    document.querySelector('.loader').classList.add('is-visible');
}

export function hideLoader() {
    document.querySelector('.loader').classList.remove('is-visible');
}

let lightbox;
export const galleryContainer = document.querySelector('.gallery');

export function createGallery(images) {

    const galleryMarkup = images.slice(0, 9)
    .map((image) => {
        return `<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h2 class="info-title">Likes</h2>
                    <p class="info-text">${image.likes}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Views</h2>
                    <p class="info-text">${image.views}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Comments</h2>
                    <p class="info-text">${image.comments}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Downloads</h2>
                    <p class="info-text">${image.downloads}</p>
                </li>
            </ul>
        </li>`
        })
        .join('');
    
    galleryContainer.innerHTML = galleryMarkup;
    
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    lightbox.refresh();
}

    
    
    

    