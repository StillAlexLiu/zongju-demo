import map from './map'
import charts from './echarts'
import video from './video'
import Container from './container'
import http from './http'
import tab from './tab'
import Tree from './Tree'
import './css/index.less'

export default {
  install: (Vue, options) => {
    Vue.use(charts)
    Vue.use(video)
    Vue.use(Container)
    Vue.use(tab)
    Vue.use(Tree)
    Vue.use(map, options)
    Vue.prototype.$http = http
  }
}
