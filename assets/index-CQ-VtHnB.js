(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let f=["4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2","0jV5qFgT7QEJJPbPCuZtWP?si=c39a77e082124ce3","7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ"],u="",d=[],o=0,c=1;for(let r=1;r<=f.length;r++)u+=`<div class="embed-spotify-song">
			<iframe class="spotify-iframe" id="embed${r}"
						frameborder="0" 
						allowtransparency="true" 
						allow="encrypted-media">
			</iframe>
		</div>
		<div id="padding"></div>`;document.querySelector("#app").innerHTML=`
<div>
	<div class="header">
		<img class="header-image" src="header.jpeg" />
	</div>
	<div id="padding"></div>
	${u}
</div>`;window.onSpotifyIframeApiReady=r=>{f.forEach(s=>{let a=document.getElementById("embed"+c),n={uri:"spotify:track:"+s,width:"300",height:"80"},e=t=>{let i=c;addEventListener("load",function(){s==="4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2"&&t.play()}),t.addListener("playback_update",l=>{!l.data.isPaused&&!d.includes(i)&&o!=i&&(o=i,d.push(i)),o!=0&&d.includes(i)&&o!=i&&(t.pause(),d.splice(d.indexOf(i),1)),l.data.isPaused&&d.includes(i)&&(d.splice(d.indexOf(i),1),o==i&&(o=0))})};r.createController(a,n,e),c++})};
