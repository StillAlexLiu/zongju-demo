<template>
    <div class='SankeyGroup full'>
        <div v-for="(item,index) in data" :key="index">
            <div class="top h-1-2">
                <span style="font-size: 16px;">{{item.name}}</span>
                <span class="" style="font-family: LCD;font-size: 22px;color: #3FD3D6;margin-left: 60px">{{item.value[0]}}</span>
                <span style="font-size: 12px">抽检批次</span>
            </div>
            <div class="bottom h-1-2">
                <div class="full-height w-1-2">
                    <span class="" style="font-family: LCD;font-size: 22px;color: #3FD3D6;">{{item.value[1]}}</span>
                    <span style="font-size: 12px">合格率</span>
                </div>
                <div class="full-height w-1-2">
                    <span class="" style="font-family: LCD;font-size: 22px;color: #FFBB6F;">{{item.value[2]}}</span>
                    <span style="font-size: 12px">不合格批次</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SankeyGroup',
  data () {
    return {
      data: [{
        name: '生产',
        value: [2784, 98.9, 30]
      }, {
        name: '流通',
        value: [5597, 97.4, 142]
      }, {
        name: '餐饮',
        value: [3669, 95.9, 148]
      }]
    }
  }
}
</script>

<style scoped lang="less">
.SankeyGroup {
    display: flex;
    justify-content: space-around;
    align-items: center;

    > div {
        width: 220px;
        height: 67px;
        background-size: 100% 100%;
        background-image: url("./img/编组.png");
        line-height: 33px;
        text-indent: 10px;
    }
}
</style>
