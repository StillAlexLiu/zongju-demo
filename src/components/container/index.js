import Container from './Container'
import GroupContainer from './GroupContainer'
import ContainerWithLeftBorder from './ContainerWithLeftBorder'

export default {
  install: (Vue, options) => {
    Vue.component('ContainerWithLeftBorder', ContainerWithLeftBorder)
    Vue.component('GroupContainer', GroupContainer)
    Vue.component('container', Container)
  }
}
