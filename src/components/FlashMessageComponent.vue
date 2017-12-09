<template>
    <div class="alert flash-message" :class="[{'alert-dismissible' : internalDismissable}, 'alert-' + internalColor]" v-if="internalVisible && dataMessage !=''">
        <button v-if="internalDismissable" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <template v-if="!noTitle">
            <slot name="title"><h4><i class="icon fa" :class="icon"></i> {{ dataTitle}}</h4></slot>
        </template>
        <slot>{{ dataMessage }}</slot>
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
      data() {
        return {
          internalVisible: true,
          dataMessage: this.message,
          dataTitle: this.title,
          internalColor: this.color,
          internalDismissable: this.dismissable,
        }
      },
      computed: {
        icon: function () {
          switch(this.internalColor) {
            case 'info':
              return 'fa-info'
            case 'success':
              return 'fa-check'
            case 'danger':
              return 'fa-ban'
            case 'warning':
              return 'fa-warning'
            default :
              return 'fa-info'
          }
        },
      },
      methods: {
        show() {
          this.internalVisible = true
          var component = this
          setTimeout( () => {
            component.hide()
          },this.timeout)

        },
        hide(){
          this.internalVisible = false
        },
        updateDataTitleIfNull(title){
          if (this.dataTitle === '' || this.dataTitle === null || typeof this.dataTitle === 'undefined' ) this.dataTitle = title
        },
        applyType(type) {
          switch(type) {
            case 'info':
              this.updateDataTitleIfNull('Info')
              this.internalColor = 'info'
              break
            case 'success':
              this.updateDataTitleIfNull('Success')
              this.internalColor = 'success'
              break
            case 'error':
              this.updateDataTitleIfNull('Error')
              this.internalColor = 'danger'
              break
            case 'warning':
              this.updateDataTitleIfNull('Warning')
              this.internalColor = 'warning'
              break
            default :
              this.updateDataTitleIfNull('Info')
              this.internalColor = 'info'
              break
          }
        }
      },
      props: {
        'title': {
          required: false
        },
        'message': {
          required: true
        },
        'color' : {
          required: false,
          default: 'danger'
        },
        visible: {
          type: Boolean,
          default: false
        },
        noTitle: {
          type: Boolean,
          default: false
        },
        timeout: {
          type: Number,
          default: 5000
        }
      },
      mounted() {
        window.flash = (message) => {
          this.dataMessage = message
          this.show()
        }

        this.$events.$on('flashMessage', (type, message, title) => {
          this.dataMessage = message
          this.dataTitle = title
          this.applyType(type)
          this.show()
        });

        this.show()
      }
    }
</script>
