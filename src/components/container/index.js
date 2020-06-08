import Container from './Container'
import GroupContainer from './GroupContainer'
import ContainerWithLeftBorder from './ContainerWithLeftBorder'
import ContainerCenterTitle from './ContainerCenterTitle'
import ContainerBottom from './ContainerBottom'
import ContainerDia from './ContainerDia'

export default {
  install: (Vue, options) => {
    Vue.component('ContainerWithLeftBorder', ContainerWithLeftBorder)
    Vue.component('GroupContainer', GroupContainer)
    Vue.component('container', ContainerCenterTitle)
    Vue.component('containerDefault', Container)
    Vue.component('ContainerBottom', ContainerBottom)
    Vue.component('ContainerDia', ContainerDia)
  }
}
