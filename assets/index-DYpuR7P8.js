(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let u=["4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2","0jV5qFgT7QEJJPbPCuZtWP?si=c39a77e082124ce3","7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ"],f="",r=[],o=0,a=1;for(let d=1;d<=u.length;d++)f+=`<iframe class="spotify-iframe" 
					style="border-radius:12px"
					id="embed${d}"
					frameborder="0"
					allowtransparency="true" 
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy">
		</iframe>
		<div id="padding"></div>`;document.querySelector("#app").innerHTML=`
<div>
	
	<div class="header">
		<h1 class="title">SWEAT TOOTH</h1>
	</div>
	<div id="padding"></div>
	${f}
</div>`;window.onSpotifyIframeApiReady=d=>{u.forEach(s=>{let n=document.getElementById("embed"+a),l={uri:"spotify:track:"+s,width:"300",height:"80"},e=t=>{let i=a;addEventListener("load",function(){s==="4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2"&&t.play()}),t.addListener("playback_update",c=>{!c.data.isPaused&&!r.includes(i)&&o!=i&&(o=i,r.push(i)),o!=0&&r.includes(i)&&o!=i&&(t.pause(),r.splice(r.indexOf(i),1)),c.data.isPaused&&r.includes(i)&&(r.splice(r.indexOf(i),1),o==i&&(o=0))})};d.createController(n,l,e),a++})};
