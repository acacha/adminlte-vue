import Components from './components/index'
// import Filters from './filters/index';
import {todo, todo2} from './util'

let AdminlteVue = {
  todo,
  // addType,
  // addValidationMessage,
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
  window.Vue.$adminlte = {todo, todo2
  }
}

export default AdminlteVue
