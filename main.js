import './style.css'
let spotifySongIds = [
	'4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2',
	'0jV5qFgT7QEJJPbPCuZtWP?si=c39a77e082124ce3',
	'7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ',
];	
let songEmbedsHTML = '';
let playingEmbedIds = [];
let latestPlayedEmbed = 0;
let counter = 1;

for (let i = 1; i <= spotifySongIds.length; i++) {
	songEmbedsHTML +=
		`<div class="embed-spotify-song">
			<iframe class="spotify-iframe" id="embed${i}"
						frameborder="0" 
						allowtransparency="true" 
						allow="encrypted-media">
			</iframe>
		</div>
		<div id="padding"></div>`;
}
document.querySelector('#app').innerHTML = `<div>${songEmbedsHTML}</div>`;

window.onSpotifyIframeApiReady = (IFrameAPI) => {
	spotifySongIds.forEach(songId => {
		let embedDomElement = document.getElementById('embed' + counter);
		let embedOptions = {
			uri: 'spotify:track:' + songId,
			width: '300',
			height: '80',
		};
		let callbackFunc = (EmbedController) => {
			let embedId = counter;
			EmbedController.addListener('playback_update', e => {
				// Is playing but hasn't been recorded yet, mark as latest playing and record as playing
				if (!e.data.isPaused && !playingEmbedIds.includes(embedId) && latestPlayedEmbed != embedId) {
					latestPlayedEmbed = embedId;
					playingEmbedIds.push(embedId);
				}
				// Is playing but isn't the most recent playing, pause it and remove from playing list
				if (latestPlayedEmbed != 0 && playingEmbedIds.includes(embedId) && latestPlayedEmbed != embedId) { 
					EmbedController.pause();
					playingEmbedIds.splice(playingEmbedIds.indexOf(embedId), 1);
				}
			});
		};
		IFrameAPI.createController(embedDomElement, embedOptions, callbackFunc);
		counter++;
	});
};