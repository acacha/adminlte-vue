<template>
    <div class="progress">
        <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar"
             :aria-valuenow="currentValue" :aria-valuemin="valueMin" :aria-valuemax="valueMax"
             :style="{ width: percentValue }">
            <span class="sr-only">{{percentValue}} Complete (success)</span>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        currentValue : this.value
      }
    },
    computed: {
      percentValue: function () {
        return (this.currentValue/this.valueMax)*100 + '%'
      }
    },
    watch: {
      'value': function (newValue) {
        this.currentValue = newValue
      }
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      valueMin: {
        type: Number,
        default: 0
      },
      valueMax: {
        type: Number,
        default: 100
      }
    },
    methods: {
      todo() {
        return 'todo'
      }
    },
    mounted() {
      var component = this
    }
  }
</script>
