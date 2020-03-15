<template>
  <div class="full-height full-width" ref="video">
    <video :id="'my-video'+index" class="video-js vjs-default-skin" controls preload="auto">
      <!--      <source-->
      <!--        :src="src"-->
      <!--        type="application/x-mpegURL">-->
    </video>
  </div>
</template>

<script>

import videojs from 'video.js'
import 'videojs-contrib-hls'

export default {
  data () {
    return {
      player: {},
      width: 0,
      height: 0
    }
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  watch: {
    src: {
      deep: true,
      immediate: true,
      handler: function () {
        if (this.src !== '') {
          this.play(this.src)
        }
      }
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.player.dispose()
  },
  methods: {
    init () {
      this.width = this.$refs.video.offsetWidth
      this.height = this.$refs.video.offsetHeight
      this.player = videojs('my-video' + this.index, {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
        height: this.height,
        width: this.width
      })
      console.log(this.height)
      console.log(this.width)
      console.log(this.player)
    },
    play (src) {
      console.log(src)
      console.log(this.player)
      this.$nextTick(() => {
        this.player.src({ src: src, type: 'application/x-mpegURL' })
        this.player.play()
      })
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>
