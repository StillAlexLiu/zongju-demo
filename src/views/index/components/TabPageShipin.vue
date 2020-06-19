<template>
    <div class='TabPageShipin'>
        <ChartCustomPie class="full" :data="data.data"
                        :show-percent="false"
                        v-if="!showPage"
                        :title="data.title"/>
        <div v-if="showPage" class="full tab2">
            <div class="number-font">96</div>
            <div class="number-font">93</div>
        </div>
    </div>
</template>

<script>
import ChartCustomPie from './ChartCustomPie'

export default {
  name: 'TabPageShipin',
  components: {
    ChartCustomPie
  },
  data () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showPage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.TabPageShipin {
    .tab2 {
        background-image: url("./img/编组 (1).png");
        background-size: 320px 63px;
        background-repeat: no-repeat;
        background-position: center;
        padding: 20px 80px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        > div {
            font-size: 24px;
        }
    }
}
</style>
