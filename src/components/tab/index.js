import CheckAndRadioBox from './CheckAndRadioBox'
import TabBottomLine from './TabBottomLine'
import TabSimpleMap from './TabSimpleMap'
import TabSimplePoint from './TabSimplePoint'
import TabCustomColor from './TabCustomColor'
export default {
  install: (Vue) => {
    Vue.component('CheckAndRadioBox', CheckAndRadioBox)
    Vue.component('TabSimpleMap', TabSimpleMap)
    Vue.component('TabSimplePoint', TabSimplePoint)
    Vue.component('TabBottomLine', TabBottomLine)
    Vue.component('TabCustomColor', TabCustomColor)
  }
}
