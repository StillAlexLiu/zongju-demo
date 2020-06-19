<template>
    <div class="ChartGroupHuanJing full">
        <!--        <ChartPieCircle :title="title" :data="data[dataIndex]" :color="color" :is-pie="true"/>-->
        <ChartBarLine :type="['bar','line']" :dimensions="['name','value','value1']" :legend="['诉求量','同比增幅']"
                      :data="chart1.data"
                      v-if="dataIndex===0"
                      :colors="['#4A90E2','#FFD589']"
                      :legendTop="18"
                      :title="title"/>
        <ChartBarLine :type="['bar','line']" :dimensions="['name','value','value1']" :legend="['诉求量','同比增幅']"
                      :data="chart2.data"
                      v-if="dataIndex===2"
                      :colors="['#4A90E2','#FFD589']"
                      :legendTop="18"
                      :title="title"/>
        <div class="full" v-if="dataIndex===1">
            <div style="height: 20px;text-indent:5px;line-height: 22px">{{title}}</div>
            <table class="full-width" style="height: calc(100% - 20px)">
                <thead>
                <tr>
                    <th v-for="(item,index) in table.title" :key="index">{{item}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in table.data" :key="index">
                    <td v-for="(item2,index2) in item" :key="index2" :class="['v'+index2,index2>0?'number-font':'']">
                        {{item2}}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="radioBox">
            <CheckAndRadioBox :data="radio" v-model="dataIndex"/>
        </div>
    </div>
</template>

<script>
import Mock from 'mockjs'
import ChartBarLine from './ChartBarLine'

export default {
  name: 'ChartGroupHuanJingTab2',
  components: {
    ChartBarLine
  },
  data () {
    return {
      dataIndex: 0,
      radio: [{
        name: '行业',
        value: 0
      }, {
        name: '企业',
        value: 1
      }, {
        name: '区域',
        value: 2
      }],
      title: '诉求综合分析',
      //
      chart1: {
        data: [{
          name: '餐饮酒水',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '房地产',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '零售批发',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '酒店服务',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '旅游业',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }]
      },
      chart2: {
        data: [{
          name: '北京',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '上海',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '浙江',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '广州',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }, {
          name: '河北',
          value: Mock.Random.natural(600, 1000),
          value1: Mock.Random.natural(60, 100)
        }]
      },
      table: {
        title: ['企业名称', '投诉举报量', ' 同比增幅'],
        data: [['国有企业', '234', '3.8%'], ['集体所有制', '532', '16.4%'], ['私营企业', '178', '26.8%']]
      }
    }
  },
  props: {
    color: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.ChartGroupHuanJing {
    position: relative;

    .radioBox {
        position: absolute;
        top: 0;
        right: 0;
    }

    th {
        background: rgba(34, 84, 197, 0.25);
    }

    tbody {
        tr {
            &:nth-child(odd) {
                background-color: rgba(0, 0, 0, .2);
            }
        }

        .v0 {
            text-indent: 2px;
        }

        .v1 {
            font-size: 18px;
            color: #fff;
        }

        .v2 {
            font-size: 18px;
        }
    }
}
</style>
