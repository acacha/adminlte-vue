<template>
    <div class="modal" :class="['modal-' + color]">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <slot class="modal-title" name="title">Put your title here using slot with name title</slot>
                </div>
                <div class="modal-body">
                    <slot>Put your modal content here using default slot</slot>
                </div>
                <div class="modal-footer" v-if="hasFooterSlot()">
                    <slot name="footer">
                        <button v-if="isCancellable" type="button" class="btn pull-left" :class="['btn-' + color]" data-dismiss="modal">{{ this.cancelText }}</button>
                        <button v-if="isOkable" type="button" class="btn" :class="['btn-' + color]" >{{ this.okText }}</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCancellable : this.cancellable,
        isOkable: this.ok
      }
    },
    props: {
      color: {
        type: String,
        default: '',
        validator: value => {
          let valid = ['','primary','info', 'danger', 'warning', 'success']
          return valid.includes(value)
        }
      },
      cancellable: {
        type: Boolean,
        default: true
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      ok: {
        type: Boolean,
        default: true
      },
      okText: {
        type: String,
        default: 'Ok'
      },
      footer: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      hasFooterSlot() {
        return (!!this.$slots['footer'] || this.footer)
      },
      fire() {
        this.$element.modal(options)
      }
    }
  }
</script>
