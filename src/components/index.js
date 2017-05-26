import AdminlteVueAlert from './alert.vue'
// import FormlyField from './box.vue'

export default function (Vue) {
  Vue.component('adminlte-vue-alert', AdminlteVueAlert)

  // Vue.component('formly-field', (resolve) => {
  //   /**
  //    * FormlyField must be loaded asyncronously so that any fields added in
  //    * via Formly.addType are available
  //    */
  //   resolve(AdminlteVueAlert)
  // })
}
