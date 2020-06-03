<template>
    <div class="deptXinShe full">
        <div v-for="(item,index) in data" :key="index" class="item full-height w-1-3 ">
            <div class="full">
                <div class="row full-height">
                    <div class="h-3-7 full-width title" >{{item.name}}</div>
                    <div class="h-4-7" style="text-align:center">
                      <span class="number-font">{{item.value}}<span class="unit-font">{{item.unit}}</span></span>
                      <span class="percent-font" v-if="item.value2">{{item.value2}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'deptXinShe',
  data () {
    return {
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
.deptXinShe {
  display: table;
  .title{
    text-align: center;
    // font-size: 16px;
  }
    .item {
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
    }
  .percent-font{
    width: 82px;
    display: inline-block;
    text-align: right;
  }
}
</style>
