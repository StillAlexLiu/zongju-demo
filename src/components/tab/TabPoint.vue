<template>
    <div class="TabSimplePoint">
        <div v-for="(i,index) in max" :key="index" :class="active===index?'active':''" @click="click(index)"></div>
    </div>
</template>

<script>
export default {
  name: 'TabPoint',
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
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    > div {
        width: 10px;
        height: 10px;
        background-size: 100% 100%;
        background-image: url("./img/tab-point-default.png");
        cursor: pointer;
        margin: 5px 0;
    }

    .active {
        background-image: url("./img/tab-point-active.png");
    }
}
</style>
