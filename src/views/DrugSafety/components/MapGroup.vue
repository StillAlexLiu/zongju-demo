<template>
    <div class='MapGroup'>
        <div v-if="dataIndex===0" class="full tab2">
            <radar-map/>
        </div>
        <div v-else class="full tab1">
            <img-block class="full" :data="data.map"/>
            <img-block class="" :data="data.top" style="left: 5px;top:30px"/>
            <img-block class="" :data="data.bottom" style="left: 5px;bottom:10px;"/>
            <img-block class="" v-for="(item,index) in points" :key="index" :data="point"
                       :style="{left: item.left+'px',top:item.top+'px',cursor: 'pointer'}" @click.native="pointClick"/>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'
import RadarMap from './RadarMap'

export default {
  name: 'MapGroup',
  components: {
    RadarMap,
    ImgBlock
  },
  data () {
    return {
      point: {
        img: require('./img/黄色.png'),
        width: 36,
        height: 49
      },
      points: [
        {
          left: '530',
          top: '220'
        },
        {
          left: '230',
          top: '320'
        },
        {
          left: '430',
          top: '420'
        }
      ]
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    dataIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    pointClick () {
      // console.log('click')
      this.$emit('pointClick', '')
    }
  }
}
</script>

<style scoped lang="less">
.MapGroup {
    .tab1 {
        position: relative;

        > div {
            position: absolute;
        }
    }
}
</style>
