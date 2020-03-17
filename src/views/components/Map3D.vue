<template>
    <chart :options='options'/>
</template>

<script>
export default {
  name: 'Map3D',
  data () {
    return {
      options: {
        backgroundColor: '#252A43',
        globe: {
          globeRadius: 0,
          baseTexture: require('./img/bg2.jpg'),
          shading: 'color',
          layers: [{
            type: 'overlay',
            texture: require('./img/ciyun.png'),
            shading: 'color',
            distance: 60
          }],
          viewControl: {
            autoRotateSpeed: 10
          },
          postEffect: {
            enable: false
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
DMap {

}
</style>
