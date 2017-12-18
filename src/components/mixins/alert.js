export default {
  data: function () {
    const alert = {
      visible: false,
      message: '',
      title: '',
      color: 'success',
      icon: 'fa-check',
      dismissable: true
    }
    return {
      alert
    }
  },
  computed: {
    alertDismissibleClass () {
      return this.alert.dismissible ? 'alert-dismissible' : ''
    }
  },
  methods: {
    show () {
      this.alert.visible = true
      setTimeout(() => {
        this.hide()
      }, 3000)
    },
    hide () {
      this.alert.visible = false
    },
    showAlert (message, title, color, icon) {
      this.alert.title = title || ''
      this.alert.color = color || 'success'
      this.alert.icon = icon || 'fa-check'
      this.alert.message = message
      this.show()
    }
  }
}
