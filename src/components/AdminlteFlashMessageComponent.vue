<template>
    <div :class="'alert alert-' + dataColor + ' flash-message ' + dataDismissibleClass" v-if="visible && dataMessage !=''">
        <button v-if="dataDismissible" type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h4 v-if="dataTitle"><i :class="'icon fa fa-' + dataIcon"></i> {{ dataTitle }}</h4>
        {{ dataMessage }}
    </div>
</template>

<style>
    .flash-message {
        position: fixed;
        right: 25px;
        bottom: 25px;
    }
</style>

<script>
    export default {
      name: 'AdminLTEFlashMessage',
      data () {
        return {
          visible: false,
          dataMessage: this.message,
          dataTitle: this.title,
          dataColor: this.color,
          dataIcon: this.icon,
          dataDismissible: this.dismissible,
          dataDismissibleClass: this.dismissibleClass
        }
      },
      computed: {
        dismissibleClass () {
          return this.dataDismissible ? 'alert-dismissible' : ''
        }
      },
      methods: {
        show () {
          this.visible = true
          setTimeout(() => {
            this.hide()
          }, 3000)
        },
        hide () {
          this.visible = false
        }
      },
      watch: {
        message (newMessage) {
          if (newMessage) this.show()
        }
      },
      props: {
        'title': {
          required: false
        },
        'message': {
          required: false
        },
        'color': {
          required: false,
          default: 'danger'
        },
        'icon': {
          required: false,
          default: 'check'
        },
        'dismissible': {
          type: Boolean,
          required: false,
          default: true
        }
      },
      mounted () {
        window.flash = (message, title, color, icon) => {
          this.dataTitle = title || this.title
          this.dataColor = color || this.color
          this.dataIcon = icon || this.icon
          this.dataMessage = message
          this.show()
        }
      }
    }
</script>
