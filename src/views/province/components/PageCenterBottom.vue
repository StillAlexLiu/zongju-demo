<template>
    <div class='PageCenterBottom'>
        <div class="h-1-3">
            <img-block class="full" :data="img"/>
        </div>
        <div class="h-1-3">
            <ChartBarLine :legend="['考核分数','同比']" :dimensions="['name','value','value1']" :type="['line','line']"
                          :is-area="true"
                          :data="lineData"
                          title="精准监管考核指数变化趋势"
                          :colors="colors"
                          @click="click"
                          :units="['','%']"/>
        </div>
        <div class="h-1-3">
            <div class="w-1-2 full-height">
                <ChartsPie :data="pieData" :show-legend="false" :show-all="true" title="精准监管对象类别分布"/>
            </div>
            <div class="w-1-2 full-height">
                <ChartsPie :data="pieData1" :show-legend="false" :is-pie="true" title="精准监管对象区域分布"/>
            </div>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'
import ChartBarLine from '../../index/components/ChartBarLine'
import Mock from 'mockjs'
import echarts from 'echarts'
import ChartsPie from '../../Topic/Law/components/ChartsPie'
export default {
  name: 'PageCenterBottom',
  components: {
    ChartsPie,
    ChartBarLine,
    ImgBlock
  },
  data () {
    return {
      img: {
        img: require('./../BlockImg/精准监管指数改.png'),
        width: 483,
        height: 114
      },
      pieData: [],
      pieData1: [],
      colors: [new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          {
            offset: 1,
            color: 'rgba(50 ,197 ,255,0)'
          },
          {
            offset: 0,
            color: '#61E4FF'
          }
        ]
      ), new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          {
            offset: 1,
            color: 'rgba(255 ,143 ,172,0.3)'
          },
          {
            offset: 0,
            color: '#E26F6F'
          }
        ]
      )],
      lineData: [{
        name: '3月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '4月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '5月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '6月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '7月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '8月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '9月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '10月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '11月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '12月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '1月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }, {
        name: '2月',
        value: Mock.Random.natural(80, 100),
        value1: Mock.Random.natural(50, 60)
      }],
      list1: ['非法集资', '生产假药', '知识产权侵权', '食品安全', '其他'],
      list2: ['石家庄', '张家口', '承德', '衡水', '沧州']
    }
  },
  mounted () {
    this.mockPieData()
  },
  methods: {
    mockPieData () {
      this.pieData = []
      this.pieData1 = []
      for (let i = 0; i < this.list1.length; i++) {
        this.pieData.push({
          name: this.list1[i],
          value: Mock.Random.natural(80, 200)
        })
      }
      for (let i = 0; i < this.list2.length; i++) {
        this.pieData1.push({
          name: this.list2[i],
          value: Mock.Random.natural(80, 200)
        })
      }
    },
    click (event) {
      this.mockPieData()
    }
  }
}
</script>

<style scoped lang="less">
.PageCenterBottom {
}
</style>
