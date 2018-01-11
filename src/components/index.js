import AdminlteAlertComponent from './AdminlteAlertComponent.vue'
import AdminlteFlashMessage from './AdminlteFlashMessageComponent.vue'
import AdminlteBoxComponent from './AdminlteBoxComponent.vue'
import AdminlteModalComponent from './AdminlteModalComponent.vue'
import AdminlteProgressComponent from './AdminlteProgressComponent.vue'
import AdminlteCrudListComponent from './AdminlteCrudListComponent.vue'

export default function (Vue) {
  Vue.component('adminlte-alert', AdminlteAlertComponent)
  Vue.component('adminlte-flash-message', AdminlteFlashMessage)
  Vue.component('adminlte-box', AdminlteBoxComponent)
  Vue.component('adminlte-modal', AdminlteModalComponent)
  Vue.component('adminlte-progress', AdminlteProgressComponent)
  Vue.component('adminlte-crud-list', AdminlteCrudListComponent)
}
