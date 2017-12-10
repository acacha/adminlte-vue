<template>
    <div class="alert" :class="[{'alert-dismissible' : isDismissable}, 'alert-' + color]" v-if="internalVisible">
        <button v-if="isDismissable" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

        <template v-if="!noTitle">
            <slot name="title"><h4><i class="icon fa" :class="icon"></i> {{ title}}</h4></slot>
        </template>
        <slot>Put your content here using default slot</slot>
    </div>
</template>

<script>
  export default {
    name: 'AdminLTEAlert',
    data () {
      return {
        isDismissable: this.dismissable,
        internalVisible: this.visible
      }
    },
    computed: {
      icon () {
        switch (this.color) {
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
      }
    },
    props: {
      color: {
        type: String,
        default: 'info',
        validator: value => {
          let valid = ['', 'success', 'danger', 'warning', 'info']
          return valid.includes(value)
        }
      },
      visible: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: 'Alert!'
      },
      dismissable: {
        type: Boolean,
        default: true
      },
      noTitle: {
        type: Boolean,
        default: false
      }
    }
  }
</script>