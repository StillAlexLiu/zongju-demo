import Container from './Container'
import GroupContainer from './GroupContainer'
import ContainerWithLeftBorder from './ContainerWithLeftBorder'
import ContainerCenterTitle from './ContainerCenterTitle'

export default {
  install: (Vue, options) => {
    Vue.component('ContainerWithLeftBorder', ContainerWithLeftBorder)
    Vue.component('GroupContainer', GroupContainer)
    Vue.component('container', ContainerCenterTitle)
    Vue.component('containerDefault', Container)
  }
}
