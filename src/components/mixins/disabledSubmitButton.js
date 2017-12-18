export default {
  methods: {
    isDisabled () {
      return this.form.submitting || this.form.errors.any()
    }
  }
}
