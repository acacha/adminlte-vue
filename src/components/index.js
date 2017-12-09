import AdminlteVueAlert from './alert.vue'
import AdminlteVueMessage from './FlashMessageComponent.vue'
import AdminlteFlashMessage from './AdminlteFlashMessageComponent.vue'
import AdminlteVueBox from './box.vue'
import AdminlteVueModal from './modal.vue'
import AdminlteVueProgress from './progress.vue'

export default function (Vue) {
  Vue.component('adminlte-vue-alert', AdminlteVueAlert)
  Vue.component('adminlte-vue-flash', AdminlteVueMessage)
  Vue.component('adminlte-vue-flash-message', AdminlteFlashMessage)
  Vue.component('adminlte-vue-box', AdminlteVueBox)
  Vue.component('adminlte-vue-modal', AdminlteVueModal)
  Vue.component('adminlte-vue-progress', AdminlteVueProgress)

  // Vue.component('formly-field', (resolve) => {
  //   /**
  //    * FormlyField must be loaded asyncronously so that any fields added in
  //    * via Formly.addType are available
  //    */
  //   resolve(AdminlteVueAlert)
  // })
}
