// import youtubeVideo from './components/youtube_video'

// youtubeVideo()

import {init} from './components/init.js'
import {isAuth} from './components/auth.js'

init()

const app = `
  <main class="EDgram">
  ${isAuth()}
  </main>
`

document.getElementById('root').innerHTML = app
