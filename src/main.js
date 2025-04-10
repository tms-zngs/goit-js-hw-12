import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { showLoader, hideLoader, createGallery, galleryContainer, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load');

let page = 1;
let currentQuery = '';
let isFirstLoad = true;

async function fetchAndRenderImages() {
    showLoader();
    const { hits, totalHits } = await getImagesByQuery(currentQuery, page);

  if (hits.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight'
    });
      hideLoadMoreButton();
    hideLoader();
    return;
  }

    galleryContainer.insertAdjacentHTML('beforeend', createGallery(hits));

    if (!isFirstLoad) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const galleryItemHeight = galleryItems[0].getBoundingClientRect().height;
        const scrollDistance = galleryItemHeight * 1.5;

        window.scrollBy({
            top: scrollDistance,
            behavior: 'smooth'
        });
    }
    
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });

    lightbox.refresh();

    if (page * 15 >= totalHits || hits.length < 15) {
        hideLoadMoreButton();
        
    if (page * 15 >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 5000
      });
    }
  } else {
    showLoadMoreButton();
  }
    
    hideLoader();
    isFirstLoad = false;
}

loadMoreBtn.addEventListener('click', async () => {
    page++;
    await fetchAndRenderImages();
});

async function handleSubmit(event) {
  event.preventDefault();
  galleryContainer.innerHTML = '';
  page = 1;
  isFirstLoad = true;

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight'
    });
      hideLoadMoreButton();
    return;
  }

  currentQuery = query;
    await fetchAndRenderImages();
}

form.addEventListener('submit', handleSubmit);