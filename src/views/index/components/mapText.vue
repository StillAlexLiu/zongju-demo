<template>
    <div class="mapText">
        <div v-for="(item,index) in data" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="value number-font">{{item.value}}</div>
            <div class="unit">{{item.unit}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mapText',
  data () {
    return {
      data: [{
        name: '特种设备安全',
        value: '12',
        unit: '起'
      }, {
        name: '食品药品安全',
        value: '23',
        unit: '起'
      }, {
        name: '产品质量安全',
        value: '2',
        unit: '起'
      }]
    }
  }
}
</script>

<style scoped lang="less">
.mapText {
    width: 208px;
    height: 146px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-basis: 46px;
        background: linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.5) 50%, rgba(51, 75, 115, 0) 100%);
    }

    .name {
        font-size: 16px;
    }

    .unit {
        font-size: 12px;
    }

}
</style>
