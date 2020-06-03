<template>
  <div class="full-height">
    <div class="metTitle full">
      <div class="full-width h-1-4 metTitleCont" v-for="(item,index) in data" :key="index">
        <div class="h-1-3"></div>
        <div class="name text-center w-1-2" :class="{name1 : item.name.length>4}">{{item.name}}</div>
        <div class="value text-center w-1-2">
          {{item.value}}
          <span>{{item.unit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'metTitle4',
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
    background: url("../images/bg1.png") no-repeat;
    background-size: 100% 100%;
  }

  .value {
    font-size: 22px;
    font-family: Impact;
    color: rgba(255, 187, 111, 1);
    line-height: 41px;
    letter-spacing: 2px;
    span {
      font-size: 12px;
      color: #fff;
      padding-left: 5px;
    }
  }
  .name {
      height: 70%;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    line-height: 30px;
    padding-top: 1.5%;
    padding-left: 12.5%;
    box-sizing: border-box;
    border-right: 1px solid;
    -o-border-image: radial-gradient(circle, #ffffff, rgba(93, 197, 241, 0)) 1 1;
    border-image: radial-gradient(circle, #ffffff, rgba(93, 197, 241, 0)) 1 1;
  }
  .name1 {
    padding-top: 0 !important;
    padding-left: 0 !important;
    width: 30%;
    margin-left: 20%;
    padding-right: 5%;
    line-height: 20px;
  }
}
</style>
