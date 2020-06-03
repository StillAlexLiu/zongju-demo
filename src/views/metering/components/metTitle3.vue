<template>
  <div class="h-9-11">
    <div class="metTitle full">
      <div class="full-width h-1-3 metTitleCont" v-for="(item,index) in data" :key="index">
        <div class="h-1-5"></div>
        <div class="h-6-10">
           <div class="name text-center w-1-2 ">
          {{item.value1}}
          <span>{{item.unit1}}</span>
        </div>
        <div class="value text-center w-1-2">
          <span  v-if='index == 2 ||  index == 1'>增幅</span>
          <span  v-else-if='item.value2==12'>同比</span>
          <span v-else>减少</span>
          {{item.value2}}{{item.unit2}}
          <img class="arrow" src="../images/arrow.png" v-if='index == 2 ||  index == 1'>
          <img class="arrow" src="../images/down.png" v-else>
        </div>
        </div>
         <div class="h-1-5 bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'metTitle3',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.metTitle {
  color: white;
  .metTitleCont {
    padding-top: 3.5%;

  }
  .bg{
     background: url("../images/bg3.png") no-repeat ;
    background-size: 95% 100%;
  }

  .value {
    font-size: 24px;
    font-family: Impact;
    color: rgba(255, 187, 111, 1);
    line-height: 35px;
    letter-spacing: 2px;
    span {
      font-size: 12px;
      color: #fff;
      padding-left: 5px;
    }
  }
  .name {
    font-size: 24px;
    font-family: Impact;
    color: rgba(255, 187, 111, 1);
    line-height: 35px;
    letter-spacing: 2px;
    span {
      font-size: 12px;
      color: #fff;
      padding-left: 5px;
    }
  }
  .arrow{
    width: 10px;
  }
}
</style>
