<template>
    <div v-if="!removed" class="box" :class="[{'box-solid' : isSolid}, {'collapsed-box' : isCollapsed  }, 'box-' + color]">
        <div class="box-header" :class="{'with-border' : borderOnHeader}">
            <div class="box-title" v-if="!noTitle">
                <slot name="title">Put your title here using slot with name title</slot>
            </div>
            <div class="box-tools pull-right" v-if="!noTitle">
                <slot name="box-tools">
                    <button v-if="isCollapsable" type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa" :class="collapseIcon"></i></button>
                    <button @click="remove()" v-if="isRemovable" type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                </slot>
            </div>
        </div>
        <div class="box-body">
            <slot>Put your content here using default slot</slot>
        </div>
        <div class="box-footer" v-if="hasFooterSlot()">
            <slot name="footer">This is the footer!</slot>
        </div>
        <div class="overlay" v-if="isLoading">
            <i class="fa fa-refresh fa-spin"></i>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'AdminLTEBox',
    data () {
      return {
        isCollapsed: this.collapsed,
        isCollapsable: this.collapsable,
        isRemovable: this.removable,
        isLoading: this.loading,
        isSolid: this.solid,
        headerHaveBorder: this.borderHeader,
        removed: false
      }
    },
    computed: {
      collapseIcon () {
        return this.isCollapsed ? 'fa-plus' : 'fa-minus'
      },
      borderOnHeader () {
        if (this.noTitle) return false
        return this.headerHaveBorder
      }
    },
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      collapsable: {
        type: Boolean,
        default: true
      },
      removable: {
        type: Boolean,
        default: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      solid: {
        type: Boolean,
        default: false
      },
      borderHeader: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: 'default',
        validator: value => {
          let valid = ['', 'primary', 'info', 'danger', 'warning', 'success', 'default']
          return valid.includes(value)
        }
      },
      noTitle: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      collapsed () {
        this.isCollapsed = this.collapsed
      },
      loading () {
        this.isLoading = this.loading
      },
      removed () {
        this.removed ? this.$emmit('removed') : this.$emmit('unremoved')
      },
      isCollapsed () {
        this.isCollapsed ? this.$emmit('collapsed') : this.$emmit('expanded')
      },
      isLoading () {
        this.isLoading ? this.$emmit('loading') : this.$emmit('unloaded')
      }
    },
    methods: {
      hasFooterSlot () {
        return !!this.$slots['footer']
      },
      load () {
        this.isLoading = true
      },
      unload () {
        this.isLoading = false
      },
      collapse () {
        this.isCollapsed = true
      },
      uncollapse () {
        this.isCollapsed = false
      },
      expand () {
        this.isCollapsed = false
      },
      unexpand () {
        this.isCollapsed = false
      },
      toogle () {
        this.isCollapsed = !this.isCollapsed
      },
      remove () {
        this.removed = true
      }
    }
  }
</script>