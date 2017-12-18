<template>
    <div class="alert" :class="[{'alert-dismissible' : isDismissable}, 'alert-' + internalColor]" v-if="internalVisible">
        <button v-if="isDismissable" type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

        <template v-if="!internalnoTitle">
            <slot name="title"><h4><i class="icon fa" :class="internalIcon"></i> {{ internalTitle }}</h4></slot>
        </template>
        <slot>{{ internalMessage }}</slot>
    </div>
</template>

<script>
  export default {
    name: 'AdminLTEAlert',
    data () {
      return {
        isDismissable: this.dismissable,
        internalVisible: true,
        internalColor: this.color,
        internalnoTitle: this.noTitle,
        internalTitle: this.title,
        internalIcon: null,
        internalMessage: this.message
      }
    },
    watch: {
      alert: {
        handler: function (newAlert) {
          if (newAlert) {
            this.internalVisible = newAlert.visible
            this.isDismissable = newAlert.dismissable
            this.internalColor = newAlert.color
            this.internalnoTitle = newAlert.noTitle
            this.internalTitle = newAlert.title
            this.internalMessage = newAlert.message
            this.internalIcon = newAlert.icon
          }
        },
        deep: true
      }
    },
    props: {
      alert: {
        type: Object,
        default: null
      },
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
      message: {
        type: String,
        default: 'Put your content here using default slot'
      },
      dismissable: {
        type: Boolean,
        default: true
      },
      noTitle: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        required: false
      }
    },
    methods: {
      getIcon () {
        if (this.icon) return this.icon
        return this.getIconByColor(this.color)
      },
      getIconByColor (color) {
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
      },
      isVisible () {
        if (this.alert) {
          return this.alert.visible
        }
        return this.visible
      }
    },
    mounted () {
      this.internalVisible = this.isVisible()
      this.internalIcon = this.getIcon()
    }
  }
</script>