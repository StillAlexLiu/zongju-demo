<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
  name: 'App',
  mounted () {
    // this.requestFullScreen()
  },
  methods: {
    requestFullScreen () {
      const de = document.documentElement
      if (de.requestFullscreen) {
        de.requestFullscreen()
      } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen()
      } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen()
      }
    }
  }
}
</script>
<style lang="less" scoped>
#app {
    width: 1920px;
    height: 1080px;
    background-color: #1A1A2C;
}
</style>
