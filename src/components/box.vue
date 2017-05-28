<template>
    <div class="box box-solid" :class="[{'collapsed-box' : isCollapsed  }, 'box-' + color]">
        <div class="box-header with-border">
            <div class="box-title">
                <slot name="title">Put your title here</slot>
            </div>
            <div class="box-tools pull-right">
                <slot name="box-tools">
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa" :class="collapseIcon"></i></button>
                </slot>
            </div>
        </div>
        <div class="box-body">
            <slot>Put your content here</slot>
        </div>
        <div class="overlay" v-if="isLoading">
            <i class="fa fa-refresh fa-spin"></i>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed : this.collapsed,
        isLoading: this.loading
      }
    },
    computed: {
      collapseIcon: function () {
        return this.isCollapsed ? 'fa-plus' : 'fa-minus'
      }
    },
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'primary',
        validator: value => {
          let valid = ['','primary','info', 'danger', 'warning', 'success','default']
          return valid.includes(value)
        }
      }
    }
  }
</script>