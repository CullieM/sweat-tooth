(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(s){let r=0;const o=i=>{r=i,s.innerHTML=`count is ${r}`};s.addEventListener("click",()=>o(r+1)),o(0)}let d="7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ";document.querySelector("#app").innerHTML=`
  <div>
    <div class="embed-spotify-song">
        <iframe src="https://open.spotify.com/embed/track/${d}"  
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
        </iframe>
    </div>
    <div id="padding"></div>
    <div style="left: 0; width: 100%; height: 450px; position: relative;">
    <iframe src="https://embed.music.apple.com/au/album/badboygoodgirl-single/1765465150" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen>
    </iframe>
    </div>
  </div>
`;c(document.querySelector("#counter"));
