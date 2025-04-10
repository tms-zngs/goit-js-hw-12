import axios from 'axios';
const apiKey = `49644003-f004b35ee3a715b0e9313818f`;

export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: apiKey,
            q: query,
            image_type: 'photo',            
            orientation: 'horizontal',
            safesearch: 'true',
        }
    })
        .then(response => {
         return response.data.hits;
    })
        .catch(error => {
            console.log(error);
        return [];
    });
}