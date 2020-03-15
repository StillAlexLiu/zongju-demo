import map from './NativeAmap'
// import listener from './listener'
// import MapSelector from './MapSelector'
import Vue from 'vue'

const bus = new Vue()
// 该文件响应public下的index.html中的onAMapLoad方法，当高德地图加载完毕后，发送onAMapLoad事件，在地图引用部分进行接收
window.initMap = () => {
  bus.$emit('onAMapLoad', null)
}

const loadJs = (options) => {
  const url = 'https://webapi.amap.com/maps?v=' + options.version + '&key=' + options.key + '&callback=initMap'
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.getElementsByTagName('body')[0].appendChild(script)
}

export default {
  install: (Vue, options) => {
    if (options && options.map) {
      loadJs(options.map)
      Vue.component('a-map', map)
      Vue.prototype.$AMapBus = bus
    }
    // Vue.component('MapSelector', MapSelector)
  }
}
