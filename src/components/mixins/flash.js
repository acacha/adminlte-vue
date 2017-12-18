import AlertMixin from './alert'

export default {
  mixins: [AlertMixin],
  methods: {
    flash (message, title, color, icon) {
      if (typeof window.flash === 'function') {
        window.flash(message, title, color, icon)
      } else {
        this.showAlert(message, title, color, icon)
      }
    },
    success (message) {
      this.flash(message, 'Done!', 'success', 'fa-check')
    },
    error (message) {
      this.flash(message, 'Error!', 'danger', 'fa-ban')
    }
  }
}
