import './style.css'
let appleMusic = false;
let spotifySongIds = [
  '4FVEwchgZknBl3qjE2h4Y6?si=7b33a982c7de40d2',
  '0jV5qFgT7QEJJPbPCuZtWP?si=c39a77e082124ce3',
  '7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ',
];

let innerHTML = '<div>';

spotifySongIds.forEach( songId => {
  innerHTML += 
  `<div class="embed-spotify-song">
  <iframe src="https://open.spotify.com/embed/track/${songId}"  
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
  </iframe>
  </div>
  <div id="padding"></div>
  `
});

if (appleMusic) {
  innerHTML += `
    <div style="left: 0; width: 100%; height: 450px; position: relative;">
      <iframe src="https://embed.music.apple.com/au/album/badboygoodgirl-single/1765465150" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe>
    </div>`;
}
innerHTML += `</div>`;

document.querySelector('#app').innerHTML = innerHTML;
