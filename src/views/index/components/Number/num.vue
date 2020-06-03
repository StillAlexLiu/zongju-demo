<template>
    <div class="number-item">
        <div class="number-animate" :style="{'margin-top':(-data*40)+'px','transition': 'margin-top 2s'}">
            <img src="./img/numbers.png" style="width: 30px;height: 400px">
        </div>
    </div>
</template>

<script>
export default {
  name: 'num',
  props: [
    'data'
  ],
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler: function (newValue, oldValue) {
        this.newValue = this.data
        const self = this
        this.$nextTick(() => {
          this.flag = true
        })
        setTimeout(function () {
          self.oldValue = newValue
          self.flag = false
        }, 800)
      }
    }
  },
  data: function () {
    return {
      flag: false,
      num: 0,
      oldValue: 0,
      newValue: 0,
      numbers: [
        require('./img/number/0.png'),
        require('./img/number/1.png'),
        require('./img/number/2.png'),
        require('./img/number/3.png'),
        require('./img/number/4.png'),
        require('./img/number/5.png'),
        require('./img/number/6.png'),
        require('./img/number/7.png'),
        require('./img/number/8.png'),
        require('./img/number/9.png')
      ],
      numbersBlack: [
        require('./img/numberBlack/0.png'),
        require('./img/numberBlack/1.png'),
        require('./img/numberBlack/2.png'),
        require('./img/numberBlack/3.png'),
        require('./img/numberBlack/4.png'),
        require('./img/numberBlack/5.png'),
        require('./img/numberBlack/6.png'),
        require('./img/numberBlack/7.png'),
        require('./img/numberBlack/8.png'),
        require('./img/numberBlack/9.png')
      ],
      themeIndex: 0
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}

.number-item {
    height: 40px;
    overflow: hidden;
}
</style>
