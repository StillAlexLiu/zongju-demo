<template>
    <div class='TabItem full'>
        <div class="order" :style="{backgroundColor:index>1?colors[2]:colors[index]}">{{index+1}}</div>
        <div class="value">{{data.value}}<arrow dir="up"/>
        </div>
        <div class="name">{{data.name}}</div>
    </div>
</template>

<script>
import Arrow from '../../index/components/Arrow'

export default {
  name: 'TabItem',
  components: { Arrow },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      colors: ['#E3475A', '#FE6941', '#FE9E55']
    }
  }
}
</script>

<style scoped lang="less">
.TabItem {
    text-align: center;
    background-image: url("./img/top背景框.png");
    background-size: 90px 100px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    cursor: pointer;

    .order {
        width: 20px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        margin-left: 20px;
    }

    .value {
        font-family: 'LCD';
        font-size: 30px;
        color: #3FD3D6;
    }

    .name {
        font-size: 12px;
    }
}
</style>
