<template>
    <div class="proMapTopNumber full-width">
        <div v-for="(item,index) in data" :key="index" >
            <div class="proPadding">
              <p>{{item.name}}</p>
              <div class="number">{{item.value}} <span class="unit-font">{{item.unit}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'proMapTopNumber',
  data () {
    return {
      active: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.proMapTopNumber {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    >div{
      padding: 3px 0;
      width: calc(100% / 7);
      text-align: center;
    }
    p{
      font-weight:400;
      color:rgba(255,255,255,1);
      // padding-bottom: 5px;

    }
    .proPadding{
      background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
    }
    .number{
      font-size:18px;
      font-family:LESLIE-Regular,LESLIE;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:18px;
      letter-spacing:1px;
    }
}
</style>
