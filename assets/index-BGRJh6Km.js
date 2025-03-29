(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();let d=["4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2","0jV5qFgT7QEJJPbPCuZtWP?si=c39a77e082124ce3","7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ"],i="<div>";d.forEach(s=>{i+=`<div class="embed-spotify-song">
  <iframe src="https://open.spotify.com/embed/track/${s}"  
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
  </iframe>
  </div>
  <div id="padding"></div>
  `});i+="</div>";document.querySelector("#app").innerHTML=i;
