<template>
    <div class="mapView full" >
        <div class="w-1-5 full-height" v-for="(item, index) in data" :key="index">
          <div class="full mapViewBg" >
            <img :src="item.img" class="w-1-3" alt="">
            <div class="w-2-3 full-height mapViewPadding">
              <div class="h-2-3 mapViewTitle">{{item.value}}<span class="unit-font">{{item.unit}}</span></div>
              <div class="h-1-3">{{item.name}}</div>
            </div>
          </div>
        </div>
     </div>
</template>

<script>
export default {
  name: 'mapView',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.mapView {
  .mapViewBg{
    padding: 5px;
  }
  .mapViewPadding{
    padding-left: 2%;
  }
  .mapViewTitle{
    font-size: 26px;
    font-family: 'LESLIE';
  }
}
</style>
