<template>
    <div class='boxChart'>
        <div style="height: 30px;text-align: left;font-size: 14px;line-height: 30px">舆情分析
        </div>
        <div class='wordCloub' style="height: calc(100% - 30px)"></div>
    </div>
</template>
<script>
import Mock from 'mockjs'

export default {
  name: 'ChartWordCloud',
  props: {},
  data () {
    return {
      colors: ['#F28394', '#B5DCFF', '#FFC5CC', '#FFFFFF',
        '#B1996C',
        '#CCCCCC', '#F5D8A2', '#F5D8A2']
    }
  },
  computed: {
    options () {
      const self = this
      return {
        color: ['red', 'green'],
        series: [
          {
            name: '舆情分析',
            type: 'wordCloud',
            sizeRange: [10, 18],
            rotationRange: [0, 0],
            shape: 'circle',
            left: 'center',
            top: '20%',
            right: '70%',
            width: '50%',
            height: '75%',
            // autoSize: {
            //   enable: true,
            //   minSize: 18
            // },
            textStyle: {
              normal: {
                fontFamily: 'PingFang',
                color: function (params) {
                  return self.colors[params.dataIndex % self.colors.length]
                }
              }
            },
            data: [
              {
                name: '老年保健品',
                value: Mock.Random.natural(10, 20)
              },
              {
                name: '食品运送',
                value: Mock.Random.natural(20, 30)
              },
              {
                name: '辣条',
                value: Mock.Random.natural(20, 30)
              },
              {
                name: '疫苗质量',
                value: Mock.Random.natural(20, 30)
              },
              {
                name: '减盐减油减糖',
                value: Mock.Random.natural(10, 30)
              },
              {
                name: '口罩价格',
                value: Mock.Random.natural(60, 80)
              },
              {
                name: '益生菌',
                value: Mock.Random.natural(10, 30)
              },
              {
                name: '奶粉问题',
                value: Mock.Random.natural(30, 60)
              },
              {
                name: '校园食品安全',
                value: Mock.Random.natural(30, 60)
              },
              {
                name: '奔驰漏油',
                value: Mock.Random.natural(10, 30)
              },
              {
                name: '网红食品',
                value: Mock.Random.natural(10, 30)
              },
              {
                name: '网络订餐',
                value: Mock.Random.natural(10, 30)
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.boxChart {
    width: 100%;
    height: 100%;

    .wordCloub {
        width: 100%;
        background-image: url("./img/bg-cloud.png");
        background-position: center;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }

}
</style>
