(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let a=["4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2","0jV5qFgT7QEJJPbPCuZtWP?si=c39a77e082124ce3","7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ"],f="",d=[],n=0,l=1;for(let i=1;i<=a.length;i++)f+=`<div class="embed-spotify-song">
			<iframe class="spotify-iframe" id="embed${i}"
						frameborder="0" 
						allowtransparency="true" 
						allow="encrypted-media">
			</iframe>
		</div>
		<div id="padding"></div>`;document.querySelector("#app").innerHTML=`<div>${f}</div>`;window.onSpotifyIframeApiReady=i=>{a.forEach(o=>{let c=document.getElementById("embed"+l),s={uri:"spotify:track:"+o,width:"300",height:"80"},e=t=>{let r=l;t.addListener("playback_update",u=>{!u.data.isPaused&&!d.includes(r)&&n!=r&&(n=r,d.push(r)),n!=0&&d.includes(r)&&n!=r&&(t.pause(),d.splice(d.indexOf(r),1))})};i.createController(c,s,e),l++})};
