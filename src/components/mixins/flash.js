export default {
  methods: {
    flash (message, title, color, icon) {
      if (typeof window.flash === 'function') {
        window.flash(message, title, color, icon)
      } else {
        this.showAlert(message, title, color, icon)
      }
    },
    success (message) {
      this.flash(message,'Done!','success','check')
    },
    error () {
      this.flash(message,'Error!','danger','ban')
    }
  }
}
