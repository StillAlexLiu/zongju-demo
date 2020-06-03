<template>
    <div class="stairsList">
        <img src="./img/画板@2x.png" alt="">
        <div class="imgList" v-for="(item, index) in data" :key="index" @click="tabCli(item)">
            <span class="right_name">{{item.name}}</span>
            <span class="number-font">{{item.num}}</span>
            <span class="unit-font">{{item.unit}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'publicityTable',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    tabCli (name) {
      this.$emit('fromChild', name.name)
    }
  }
}
</script>

<style lang='less' scoped>
.stairsList{
  width: 100%;
  height: 100%;
  img{
      width: 20%;
      height: 90%;
      float: left;
      margin-top: 3%;
      margin-left:7%;
  }
  .imgList{
      width: 60%;
      height: 10%;
      line-height: 30px;
      margin-top: 6%;
      float: left;
      margin-left: 5%;
      cursor: pointer;
      background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
      .right_name{
          font-size: 14px;
          font-family:PingFangSC-Regular,PingFang SC;
          display: inline-block;
          width: 40%;
      }
  }
}
</style>
