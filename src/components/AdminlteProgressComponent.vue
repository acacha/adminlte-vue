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
    name: 'AdminLTEProgress',
    data () {
      return {
        currentValue: this.value
      }
    },
    computed: {
      percentValue () {
        return (this.currentValue / this.valueMax) * 100 + '%'
      }
    },
    watch: {
      'value': (newValue) => {
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
      todo () {
        return 'todo'
      }
    }
  }
</script>
