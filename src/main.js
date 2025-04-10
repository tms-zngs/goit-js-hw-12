import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { showLoader, hideLoader, createGallery, galleryContainer } from './js/render-functions';

const form = document.querySelector('.form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const query = event.currentTarget.elements['search-text'].value.trim();

    if (!query) {
        iziToast.error({
            message: 'Please enter a search query.',
            position: 'topRight'
        });
        return;
    }

    galleryContainer.innerHTML = '';

    showLoader();

    getImagesByQuery(query)
    .then(images => {
        console.log(images);
        if (images.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
            return;
        }
    createGallery(images);
        })  
    .catch(error => {
        console.log(error);
        })
    .finally(() => {
    hideLoader();
        });
};

