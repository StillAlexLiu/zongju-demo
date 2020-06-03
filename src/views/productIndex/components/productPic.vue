<template>
<div class="full productPic">
  <chart :options='options'/>
  <div class="postionsDept">
        <div class="full-width dc">{{center.value}}</div>
        <div class="full-width dc ">{{center.unit}}</div>
      </div>
</div>
</template>

<script>

export default {
  name: 'productPic',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    colors: {
      type: Array,
      default: () => {
        return []
      }
    },
    center: {
      type: Object,
      default: () => {
        return []
      }
    }
  },
  computed: {
    options () {
      return {
        color: this.colors,
        title: {
          text: this.title
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '62%'],
            center: ['50%', '50%'],
            top: 20,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                fontSize: 10,
                formatter: (params) => {
                  const data = params.data
                  const percent = params.percent
                  return '{name|' + data.name + '}\n{percent|' + percent + '%}'
                },
                rich: {
                  name: {},
                  percent: {},
                  trend: {},
                  status: {}
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              length: 0,
              length2: 6
            },
            data: this.data
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.productPic {
  position: relative;
  .postionsDept{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    padding-top: 22px;
    .dc{
      text-align: center;
      font-size: 10px;
      line-height: 12px;
    }

  }
}
</style>
