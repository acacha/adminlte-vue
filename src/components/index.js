import AdminlteVueAlert from './alert.vue'
import AdminlteVueBox from './box.vue'
import AdminlteVueModal from './modal.vue'

export default function (Vue) {
  Vue.component('adminlte-vue-alert', AdminlteVueAlert)
  Vue.component('adminlte-vue-box', AdminlteVueBox)
  Vue.component('adminlte-vue-modal', AdminlteVueModal)

  // Vue.component('formly-field', (resolve) => {
  //   /**
  //    * FormlyField must be loaded asyncronously so that any fields added in
  //    * via Formly.addType are available
  //    */
  //   resolve(AdminlteVueAlert)
  // })
}
