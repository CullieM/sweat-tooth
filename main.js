import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
let spotifySongId = '7nSoBBeqOvCSUeBpqYo2EU?si=AcHbMANJT7iQ5I-UEQ2LpQ'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="embed-spotify-song">
        <iframe src="https://open.spotify.com/embed/track/${spotifySongId}"  
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
`

setupCounter(document.querySelector('#counter'))
