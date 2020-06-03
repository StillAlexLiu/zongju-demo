<template>
  <div class="middleText full" v-if="data.length>0">
    <div class="middleTextCont " v-for="(item,index) in data" :key="index">
      <div class="h-7-10 w-1-10 cont1 text-center">{{item.num}}</div>
      <div class="full-height w-9-10 cont2 text-left">
        <div class="w-5-11 h-1-2">
          {{item.text1}}
          <span>{{item.value}}</span>
          {{item.unit}}
        </div>
        <div class="w-6-11 h-1-2">
          {{item.text2}}
          <span>{{item.value2}}</span>
          {{item.unit2}}
        </div>
        <div class="w-5-11 h-1-2" v-if="item.value3">
          {{item.text3}}
          <span>{{item.value3}}</span>
          {{item.unit3}}
        </div>
        <div class="w-6-11 h-1-2" v-if="item.value4">
          {{item.text4}}
          <span>{{item.value4}}</span>
          {{item.unit4}}
        </div>
        <div class="full" v-if="item.value5">
          {{item.text5}}
          <span>{{item.value5}}</span>
          {{item.unit5}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'middleText',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {},
  mounted () {
    // console.log(this.data);
  }
}
</script>

<style scoped lang="less">
.middleText {
  .middleTextCont {
    height: 46%;
    margin-bottom: 3%;
    :last-child {
      margin-bottom: 0;
    }
    .cont1 {
      background: url("../images/cont1.png") no-repeat;
      background-size: 100% 100%;
      padding-top: 2rem;
      margin-top: 2%;
    }
    .cont2 {
      background: url("../images/cont2.png");
      background-size: 100% 100%;
      div {
        padding-top: 1.1rem;
        font-size: 13px;
        padding-left: 1rem;
        span {
          font-size: 24px;
          font-family: Impact;
          color: rgba(255, 187, 111, 1);
          line-height: 29px;
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>
