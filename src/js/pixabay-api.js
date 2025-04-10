import axios from 'axios';
const apiKey = `49644003-f004b35ee3a715b0e9313818f`;

export function getImagesByQuery(query, page) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: apiKey,
            q: query,
            image_type: 'photo',            
            orientation: 'horizontal',
            safesearch: 'true',
            per_page: 15,
            page,

        }
    })
        .then(response => {
          return {
                hits: response.data.hits,
                totalHits: response.data.totalHits
            };
    })
        .catch(error => {
            console.log(error);
        return { hits: [], totalHits: 0 };
    });
}