<template>
    <div class='LeftTab'>
        <div class="full img" :style="{backgroundImage:'url('+imgs[selectIndex].img+')'}">
            <div v-for="(item,index) in 4" :key="index" @click="click(index)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LeftTab',
  data () {
    return {
      imgs: [{
        name: '事件',
        img: require('./../../BlockImg/tabGroup/事件@2x.png')
      }, {
        name: '预案',
        img: require('./../../BlockImg/tabGroup/预案@2x.png')
      }, {
        name: '任务',
        img: require('./../../BlockImg/tabGroup/任务@2x.png')
      }, {
        name: '调度',
        img: require('./../../BlockImg/tabGroup/调度@2x.png')
      }],
      selectIndex: 0
    }
  },
  methods: {
    click (index) {
      this.selectIndex = index
    }
  }
}
</script>

<style scoped lang="less">
.LeftTab {
    width: 340px;
    height: 730px;
    padding: 10px;
    position: absolute;
    top: 0;

    .img {
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        padding-right: 6px;

        > div {
            height: 32px;
            margin-top: 12px;
            flex-basis: 72px;
            cursor: pointer;
        }
    }
}
</style>
