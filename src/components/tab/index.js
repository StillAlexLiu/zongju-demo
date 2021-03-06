import CheckAndRadioBox from './CheckAndRadioBox'
import TabBottomLine from './TabBottomLine'
import TabSimpleMap from './TabSimpleMap'
import TabSimplePoint from './TabSimplePoint'
import TabCustomColor from './TabCustomColor'
import TabBlock from './TabBlock'
import TabSide from './TabSide'
import TabFreedom from './TabFreedom'

export default {
  install: (Vue) => {
    Vue.component('CheckAndRadioBox', CheckAndRadioBox)
    Vue.component('TabSimpleMap', TabSimpleMap)
    Vue.component('TabSimplePoint', TabSimplePoint)
    Vue.component('TabBottomLine', TabBottomLine)
    Vue.component('TabCustomColor', TabCustomColor)
    Vue.component('TabBlock', TabBlock)
    Vue.component('TabSide', TabSide)
    Vue.component('TabFreedom', TabFreedom)
  }
}
