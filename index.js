import{a as y,i as n,S as g}from"./assets/vendor-BH9GyP-n.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="49644003-f004b35ee3a715b0e9313818f";function L(s,r){return y.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}}).then(t=>({hits:t.data.hits,totalHits:t.data.totalHits})).catch(t=>(console.log(t),{hits:[],totalHits:0}))}function b(){document.querySelector(".loader").classList.add("is-visible")}function f(){document.querySelector(".loader").classList.remove("is-visible")}function v(){document.querySelector(".load").classList.add("is-visible")}function c(){document.querySelector(".load").classList.remove("is-visible")}const d=document.querySelector(".gallery");function w(s){return s.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <ul class="info-list">
                <li class="info-item">
                    <h2 class="info-title">Likes</h2>
                    <p class="info-text">${t.likes}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Views</h2>
                    <p class="info-text">${t.views}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Comments</h2>
                    <p class="info-text">${t.comments}</p>
                </li>
                <li class="info-item">
                    <h2 class="info-title">Downloads</h2>
                    <p class="info-text">${t.downloads}</p>
                </li>
            </ul>
        </li>`).join("")}const q=document.querySelector(".form"),S=document.querySelector(".load");let i=1,m="",u=!0;async function h(){b();const{hits:s,totalHits:r}=await L(m,i);if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c(),f();return}if(d.insertAdjacentHTML("beforeend",w(s)),!u){const o=document.querySelectorAll(".gallery-item")[0].getBoundingClientRect().height*1.5;window.scrollBy({top:o,behavior:"smooth"})}new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),i*15>=r||s.length<15?(c(),i*15>=r&&n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})):v(),f(),u=!1}S.addEventListener("click",async()=>{i++,await h()});async function x(s){s.preventDefault(),d.innerHTML="",i=1,u=!0;const r=s.currentTarget.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search query.",position:"topRight"}),c();return}m=r,await h()}q.addEventListener("submit",x);
//# sourceMappingURL=index.js.map
