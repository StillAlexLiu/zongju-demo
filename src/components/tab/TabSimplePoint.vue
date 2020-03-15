<template>
    <div class="TabSimplePoint">
        <div v-for="(i,index) in max" :key="index" :class="active===index?'active':''" @click="click(index)"></div>
    </div>
</template>

<script>
export default {
  name: 'TabSimplePoint',
  data () {
    return {
      active: 0,
      timer: null
    }
  },
  watch: {
    active: {
      immediate: true,
      deep: true,
      handler: function () {
        this.$emit('input', this.active)
      }
    },
    value: {
      immediate: true,
      deep: true,
      handler: function () {
        this.active = this.value
      }
    }
  },
  mounted () {
    // this.startTimer()
  },
  beforeDestroy () {
    this.stopTimer()
  },
  props: {
    max: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    click (i) {
      this.active = i
      // this.restartTimer()
    },
    startTimer () {
      this.timer = setInterval(() => {
        this.active++
        if (this.active === this.max) {
          this.active = 0
        }
      }, 6000)
    },
    stopTimer () {
      clearInterval(this.timer)
    },
    restartTimer () {
      this.stopTimer()
      this.startTimer()
    }
  }
}
</script>

<style scoped lang="less">
.TabSimplePoint {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    > div {
        height: 8px;
        width: 8px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.4);
        margin-left: 6px;
        cursor: pointer;
    }

    .active {
        width: 14px;
        background-color: #fff;
    }
}
</style>
