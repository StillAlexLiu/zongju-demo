import player from './player'
import 'video.js/dist/video-js.css'

export default {
  install: (Vue) => {
    Vue.component('player', player)
  }
}
