<template>
    <div class="full" style="position: relative">
        <div class="full" style="position: absolute;top: 0;left: 0">
            <chart :options='options' @click="itemClick"/>
        </div>
        <div class="h-1-3 w-4-9" style="position: absolute;right: 0;bottom: 20px">
            <ChartBarLine :type="['bar']" :dimensions="['name','value']" :legend="['']" :data="barData" v-if="barShow"
                          :colors="['#3B77BE']"
                          :title="barTitle"/>
        </div>
    </div>
</template>

<script>
import ChartBarLine from './ChartBarLine'
import Mock from 'mockjs'

export default {
  name: 'ChartsSanKey',
  components: { ChartBarLine },
  computed: {
    options () {
      return {
        tooltip: {
          show: false,
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
          // bottom: this.$toRem(2)
        },
        animation: false,
        series: [
          {
            type: 'sankey',
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
            focusNodeAdjacency: 'allEdges',
            data: [
              {
                name: '北京',
                itemStyle: {
                  color: '#1D6366'
                },
                depth: 0,
                label: {
                  position: 'inside'
                }
              },
              {
                name: '河北',
                itemStyle: {
                  color: '#1D6366'
                },
                depth: 0,
                label: {
                  position: 'inside'
                }
              },
              {
                name: '江苏',
                itemStyle: {
                  color: '#1D6366'
                },
                depth: 0,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '四川',
                itemStyle: {
                  color: '#1D6366'
                },
                depth: 0,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '云南',
                itemStyle: {
                  color: '#1D6366'
                },
                depth: 0,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '浙江',
                itemStyle: {
                  color: '#1D6366'
                },
                depth: 0,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '生产',
                itemStyle: {
                  color: '#D24E5F'
                },
                depth: 1,
                label: {
                  position: 'inside'
                }
              },
              {
                name: '流通',
                itemStyle: {
                  color: '#D24E5F'
                },
                depth: 1,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '餐饮',
                itemStyle: {
                  color: '#D24E5F'
                },
                depth: 1,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '水产品',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '农产品',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '饮料',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'
                }
              },
              {
                name: '糕点',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '其他种类',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '乳制品',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '水果',
                itemStyle: {
                  color: '#3B77BE'
                },
                depth: 2,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '微生物',
                itemStyle: {
                  color: '#0B86B6'
                },
                depth: 3,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '残留物',
                itemStyle: {
                  color: '#0B86B6'
                },
                depth: 3,
                label: {
                  position: 'inside'
                }
              },
              {
                name: '质量指标',
                itemStyle: {
                  color: '#0B86B6'
                },
                depth: 3,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '添加剂',
                itemStyle: {
                  color: '#0B86B6'
                },
                depth: 3,
                label: {
                  position: 'inside'

                }
              },
              {
                name: '其他',
                itemStyle: {
                  color: '#0B86B6'
                },
                depth: 3,
                label: {
                  position: 'inside'
                }
              }
            ],
            links: [
              {
                source: '北京',
                target: '生产',
                value: 139
              },
              {
                source: '河北',
                target: '生产',
                value: 90
              },
              {
                source: '江苏',
                target: '生产',
                value: 603
              },
              {
                source: '四川',
                target: '生产',
                value: 2255
              },
              {
                source: '浙江',
                target: '生产',
                value: 487
              },
              {
                source: '云南',
                target: '生产',
                value: 70
              },
              {
                source: '生产',
                target: '水产品',
                value: 250
              },
              {
                source: '北京',
                target: '流通',
                value: 1126
              },
              {
                source: '河北',
                target: '流通',
                value: 922
              },
              {
                source: '江苏',
                target: '流通',
                value: 629
              },
              {
                source: '四川',
                target: '流通',
                value: 1095
              },
              {
                source: '浙江',
                target: '流通',
                value: 1074
              },
              {
                source: '云南',
                target: '流通',
                value: 0
              },
              {
                source: '北京',
                target: '餐饮',
                value: 333
              },
              {
                source: '河北',
                target: '餐饮',
                value: 538
              },
              {
                source: '江苏',
                target: '餐饮',
                value: 589
              },
              {
                source: '四川',
                target: '餐饮',
                value: 1212
              },
              {
                source: '浙江',
                target: '餐饮',
                value: 405
              },
              {
                source: '云南',
                target: '餐饮',
                value: 420
              },

              {
                source: '流通',
                target: '水产品',
                value: 250
              },
              {
                source: '餐饮',
                target: '水产品',
                value: 250
              },
              {
                source: '生产',
                target: '农产品',
                value: 250
              },
              {
                source: '流通',
                target: '农产品',
                value: 250
              },
              {
                source: '餐饮',
                target: '农产品',
                value: 1
              },
              {
                source: '生产',
                target: '饮料',
                value: 250
              },
              {
                source: '流通',
                target: '饮料',
                value: 250
              },
              {
                source: '餐饮',
                target: '饮料',
                value: 250
              },
              {
                source: '生产',
                target: '糕点',
                value: 250
              },
              {
                source: '流通',
                target: '糕点',
                value: 250
              },
              {
                source: '餐饮',
                target: '糕点',
                value: 250
              },
              {
                source: '生产',
                target: '其他种类',
                value: 250
              },
              {
                source: '流通',
                target: '其他种类',
                value: 250
              },
              {
                source: '餐饮',
                target: '其他种类',
                value: 250
              },
              {
                source: '生产',
                target: '乳制品',
                value: 250
              },
              {
                source: '流通',
                target: '乳制品',
                value: 250
              },
              {
                source: '餐饮',
                target: '乳制品',
                value: 250
              },
              {
                source: '生产',
                target: '水果',
                value: 250
              },
              {
                source: '餐饮',
                target: '水果',
                value: 250
              },
              {
                source: '流通',
                target: '水果',
                value: 250
              },
              {
                source: '水产品',
                target: '微生物',
                value: 120
              },
              {
                source: '农产品',
                target: '微生物',
                value: 120
              },
              {
                source: '饮料',
                target: '微生物',
                value: 120
              },
              {
                source: '糕点',
                target: '微生物',
                value: 120
              },
              {
                source: '其他种类',
                target: '微生物',
                value: 120
              },
              {
                source: '乳制品',
                target: '微生物',
                value: 120
              },
              {
                source: '水果',
                target: '微生物',
                value: 120
              },
              {
                source: '水产品',
                target: '残留物',
                value: 150
              },
              {
                source: '农产品',
                target: '残留物',
                value: 150
              },
              {
                source: '饮料',
                target: '残留物',
                value: 150
              },
              {
                source: '糕点',
                target: '残留物',
                value: 150
              },
              {
                source: '其他种类',
                target: '残留物',
                value: 150
              },
              {
                source: '乳制品',
                target: '残留物',
                value: 150
              },
              {
                source: '水果',
                target: '残留物',
                value: 150
              },
              // 1111
              {
                source: '水产品',
                target: '质量指标',
                value: 120
              },
              {
                source: '农产品',
                target: '质量指标',
                value: 120
              },
              {
                source: '饮料',
                target: '质量指标',
                value: 120
              },
              {
                source: '糕点',
                target: '质量指标',
                value: 120
              },
              {
                source: '其他种类',
                target: '质量指标',
                value: 120
              },
              {
                source: '乳制品',
                target: '质量指标',
                value: 120
              },
              {
                source: '水果',
                target: '质量指标',
                value: 120
              },

              // 2222
              {
                source: '水产品',
                target: '添加剂',
                value: 120
              },
              {
                source: '农产品',
                target: '添加剂',
                value: 120
              },
              {
                source: '饮料',
                target: '添加剂',
                value: 120
              },
              {
                source: '糕点',
                target: '添加剂',
                value: 120
              },
              {
                source: '其他种类',
                target: '添加剂',
                value: 120
              },
              {
                source: '乳制品',
                target: '添加剂',
                value: 120
              },
              {
                source: '水果',
                target: '添加剂',
                value: 120
              },
              // 123
              {
                source: '水产品',
                target: '其他',
                value: 150
              },
              {
                source: '农产品',
                target: '其他',
                value: 150
              },
              {
                source: '饮料',
                target: '其他',
                value: 150
              },
              {
                source: '糕点',
                target: '其他',
                value: 150
              },
              {
                source: '其他种类',
                target: '其他',
                value: 150
              },
              {
                source: '乳制品',
                target: '其他',
                value: 150
              },
              {
                source: '水果',
                target: '其他',
                value: 150
              }
            ],
            orient: 'vertical',
            draggable: false,
            label: {
              color: '#FFF',
              fontSize: 14
            },
            nodeAlign: 'left',
            nodeGap: 20,
            // nodeWidth
            layoutIterations: 0,
            lineStyle: {
              normal: {
                color: 'source',
                curveness: 0.5
              }
            }
          }
        ]
      }
    },
    barOoptions () {
      return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
    }
  },
  data () {
    return {
      barShow: false,
      list: ['铜绿假单胞菌', '酒精', '过氧化值', '蛋白质', '甜蜜素', '毒死蜱', '大肠杆菌'],
      barData: [],
      barTitle: ''
    }
  },
  methods: {
    itemClick (item) {
      if (item[0].dataType === 'node' && item[0].data.depth === 3) {
        this.makeData(item[0].name)
      } else {
        this.barShow = false
      }
    },
    makeData (name) {
      this.barTitle = name + '不合格因子'
      this.barData = []
      this.barShow = true
      for (let i = 0; i < this.list.length; i++) {
        this.barData.push({
          name: this.list[i],
          value: Mock.Random.natural(40, 100)
        })
      }
    }
  }
}
</script>
