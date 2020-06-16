<template>
    <div class='product full'>
        <div class="full-height c-w-1">
            <container class="h-3-5" title="监督管理">
                <TabBottomLine :data="tab1" style="height: 32px" v-model="selectedIndex"/>
                <div style="height: calc(100% - 32px)">
                    <img-block class="full" :data="img.block1[1]" v-if="selectedIndex===3"/>
                    <img-block class="full" :data="img.block1[0]" v-else/>
                </div>
            </container>
            <container class="h-1-5" title="重点产品监管">
                <ChartBarLine :type="['bar','line']" :dimensions="['name','value','value1']"
                              :data="chart1[selectedIndex]"
                              :legend="['数量','合格率']"
                              :colors="['#FF4040','#FFD589']"
                              :units="['万个','%']"/>
                <!--                <img-block class="full" :data="img.block2"/>-->
            </container>
            <container class="h-1-5" title="电子商务产品监管">
                <ChartBarLine :type="['bar','line']" :dimensions="['name','value','value1']"
                              :data="chart2[selectedIndex]"
                              :legend="['监管企业数','合格率']"
                              :colors="['#1EDFFF','#91D243']"
                              :units="['万家','%']"/>
                <!--                <img-block class="full" :data="img.block3"/>-->
            </container>
        </div>
        <div class="full-height  c-w-2">
            <container class="h-3-5" style="padding-top: 70px" title="热点舆情">
                <CenterBlock class="full"/>
                <!--                <img-block class="full" :data="img.block4"/>-->
            </container>
            <container class="h-2-5" title="风险监控">
                <img-block class="full" :data="img.block5"/>
            </container>
        </div>
        <div class="full-height  c-w-1">
            <container class="h-2-5" title="监督抽查">
                <TabBottomLine :data="tab2" style="height: 32px" v-model="tab2Selected"/>
                <div style="height: calc(100% - 32px)">
                    <div class="h-1-4">
                        <RightList :data="listData[tab2Selected]"/>
                    </div>
                    <div class="h-3-4">
                        <ChartBarLine :type="['bar','line']" :dimensions="['name','value','value1']"
                                      :data="chart3[tab2Selected]"
                                      :legend="['抽检数','合格率']"
                                      :colors="['#1EDFFF','#91D243']"
                                      :units="['万户','%']"/>
                    </div>
                    <!--                    <img-block class="full" :data="img.block6"/>-->
                </div>
            </container>
            <container class="h-1-5" title="不合格产品排名top5">
                <img-block class="full" :data="img.block7"/>
            </container>
            <container class="h-1-5" title="不合格产品地区排名">
                <img-block class="full" :data="img.block8"/>
            </container>
            <container class="h-1-5" title="不合格后处置情况">
                <img-block class="full" :data="img.block9"/>
            </container>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'
import ChartBarLine from '../index/components/ChartBarLine'
import Mock from 'mockjs'
import RightList from './components/RightList'
import CenterBlock from './components/CenterBlock'

export default {
  name: 'Product',
  components: {
    CenterBlock,
    RightList,
    ChartBarLine,
    ImgBlock
  },
  data () {
    return {
      selectedIndex: 0,
      tab1: [{
        name: '工业品',
        value: 0
      }, {
        name: '消费品',
        value: 1
      }, {
        name: '食品相关',
        value: 2
      }, {
        name: '棉花类',
        value: 3
      }],
      tab2Selected: 0,
      tab2: [{
        name: '企业',
        value: 0
      }, {
        name: '产品',
        value: 1
      }, {
        name: '产品批次',
        value: 2
      }],
      img: {
        block1: [{
          img: require('./BlockImg/监督管理-工业品@2x.png'),
          width: 994 / 2,
          height: 974 / 2
        }, {
          img: require('./BlockImg/监督管理-棉花类@2x.png'),
          width: 996 / 2,
          height: 984 / 2
        }],
        block2: {
          img: require('./BlockImg/重点产品监管@2x.png'),
          width: 990 / 2,
          height: 314 / 2
        },
        block3: {
          img: require('./BlockImg/电子商务产品监管@2x.png'),
          width: 990 / 2,
          height: 304 / 2
        },
        block4: {
          img: require('./BlockImg/热点舆情@2x.png'),
          width: 1482 / 2,
          height: 920 / 2
        },
        block5: {
          img: require('./BlockImg/风险监控@2x.png'),
          width: 1512 / 2,
          height: 720 / 2
        },
        block6: {
          img: require('./BlockImg/监督抽查-企业@2x.png'),
          width: 992 / 2,
          height: 528 / 2
        },
        block7: {
          img: require('./BlockImg/不合格产品top5@2x.png'),
          width: 988 / 2,
          height: 292 / 2
        },
        block8: {
          img: require('./BlockImg/不合格产品地区@2x.png'),
          width: 988 / 2,
          height: 306 / 2
        },
        block9: {
          img: require('./BlockImg/不合格后处置@2x.png'),
          width: 770 / 2,
          height: 272 / 2
        }
      },
      list1: ['水泥', '钢筋', '电线', '危化品', '食品', '食品包装', '砂轮', '防爆电气', '容器'],
      list2: ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月'],
      list3: ['抽查数   ', '其中地抽', '其中国抽', '不合格数', '其中地抽', '其中国抽'],
      chart1: [],
      chart2: [],
      chart3: [],
      listData: []
    }
  },
  created () {
    this.makeChart1()
    this.makeChart2()
  },
  methods: {
    makeChart1 () {
      this.chart1 = []
      this.chart2 = []
      for (let i = 0; i < 4; i++) {
        const temp = []
        for (let j = 0; j < this.list1.length; j++) {
          temp.push({
            name: this.list1[j],
            value: Mock.Random.natural(30, 100),
            value1: Mock.Random.natural(30, 100)
          })
        }
        this.chart1.push(temp)
        const temp2 = []
        for (let j = 0; j < this.list2.length; j++) {
          temp2.push({
            name: this.list2[j],
            value: Mock.Random.natural(30, 100),
            value1: Mock.Random.natural(30, 100)
          })
        }
        this.chart2.push(temp2)
      }
    },
    makeChart2 () {
      this.chart3 = []
      this.listData = []
      for (let i = 0; i < 3; i++) {
        const temp2 = []
        for (let j = 0; j < this.list2.length; j++) {
          temp2.push({
            name: this.list2[j],
            value: Mock.Random.natural(30, 100),
            value1: Mock.Random.natural(30, 100)
          })
        }
        this.chart3.push(temp2)
        const temp3 = []
        const v1 = Mock.Random.natural(4000, 5000)
        const v2 = Mock.Random.natural(1000, 2000)
        const v3 = v1 - v2
        const v4 = Mock.Random.natural(4000, 5000)
        const v5 = Mock.Random.natural(1000, 2000)
        const v6 = v4 - v5
        temp3.push({
          name: this.list3[0],
          value: v1
        })
        temp3.push({
          name: this.list3[1],
          value: v2
        })
        temp3.push({
          name: this.list3[2],
          value: v3
        })
        temp3.push({
          name: this.list3[3],
          value: v4
        })
        temp3.push({
          name: this.list3[4],
          value: v5
        })
        temp3.push({
          name: this.list3[5],
          value: v6
        })
        this.listData.push(temp3)
      }
    }
  }
}
</script>

<style scoped lang="less">
.product {
    padding: 15px 20px;
    color: #ffffff;

    .c-w-1 {
        float: left;
        width: 29%;
    }

    .c-w-2 {
        float: left;
        width: 42%;
    }
}
</style>
