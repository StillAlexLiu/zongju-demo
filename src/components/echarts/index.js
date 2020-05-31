import ECharts from 'vue-echarts'
import 'echarts'
import charts from './charts'
import screen from './screen'
import china from './china'
import hebei from './hebei'
import 'echarts-wordcloud'
// import 'echarts-gl' // 需要再引入
// import 'echarts-liquidfill'

ECharts.registerTheme('screen', screen)
ECharts.registerMap('china', china)
ECharts.registerMap('hebei', hebei)
export default {
  install: (Vue) => {
    Vue.component('chart', charts)
    Vue.component('v-chart', ECharts)
  }
}
