import ECharts from 'vue-echarts'
import 'echarts'
import charts from './charts'
import screen from './screen'
import china from './china'
ECharts.registerTheme('screen', screen)
ECharts.registerMap('china', china)
export default {
  install: (Vue) => {
    Vue.component('chart', charts)
    Vue.component('v-chart', ECharts)
  }
}
