export default {
  data: function () {
    return {
      alertVisible: false,
      alertMessage: '',
      alertTitle: '',
      alertColor: 'success',
      alertIcon: 'check',
      alertDismissible: true
    }
  },
  computed: {
    alertDismissibleClass () {
      return this.alertDismissible ? 'alert-dismissible' : ''
    }
  },
  methods: {
    show () {
      this.alertVisible = true
      setTimeout(() => {
        this.hide()
      }, 3000)
    },
    hide () {
      this.alertVisible = false
    },
    showAlert (message, title, color, icon) {
      this.alertTitle = title || ''
      this.alertColor = color || 'success'
      this.alertIcon = icon || 'check'
      this.alertMessage = message
      this.show()
    }
  }
}
