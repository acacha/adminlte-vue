import Components from './components/index'
// import Filters from './filters/index';
import {todo, todo2} from './util'
import AdminlteBoxComponent from './components/AdminlteBoxComponent.vue'
import AdminlteAlertComponent from './components/AdminlteAlertComponent.vue'
import AdminlteModalComponent from './components/AdminlteModalComponent.vue'
import AdminlteFlashMessageComponent from './components/AdminlteFlashMessageComponent.vue'
import AdminlteProgressComponent from './components/AdminlteProgressComponent.vue'

let AdminlteVue = {
  todo,
  // addType,
  install (Vue) {
    // install our components
    Components(Vue)
    // Filters(Vue)

    Vue.$adminlte = {todo, todo2}
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AdminlteVue)
  // expose AdminlteVue functions if auto installed
  window.Vue.$adminlte = {todo, todo2}
}

export default AdminlteVue

export {
  AdminlteBoxComponent,
  AdminlteAlertComponent,
  AdminlteModalComponent,
  AdminlteFlashMessageComponent,
  AdminlteProgressComponent
}
