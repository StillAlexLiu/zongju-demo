<template>
    <div class="mapList full">
        <div class="w-1-8 full-height foodChangetabMap" v-for="(item, index) in data" :key="index"
             :class="{'active':index==ChangeIndex}" @click="foodChangetabMap(item,index)">
            <div class="full mapListBg text-center">
                <!-- <img :src="item.img" class="w-1-3" alt=""> -->
                <!-- <div class="h-2-3 mapListTitle number-font">{{item.value}}<span class="unit-font">{{item.unit}}</span></div> -->
                <div class="h-1-3">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mapList',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    },
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      ChangeIndex: 0
    }
  },
  watch: {
    ChangeIndex: {
      deep: true,
      immediate: true,
      handler: function () {
        this.$emit('input', this.data[this.ChangeIndex])
      }
    }
  },
  methods: {
    foodChangetabMap (item, index) {
      this.ChangeIndex = index
      this.$emit('foodChangetabMap', item)
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.mapList {
    .foodChangetabMap {
        margin-left: 11px;
        background: url('../img/矩形@2x (2).png');
        background-repeat: no-repeat;
        background-size: 100% 100%;

        &.active {
            background: url('../img/矩形@2x (1).png');
            background-repeat: no-repeat;
            background-size: 100% 100%;

        }
    }

    .mapListBg {
        // background-color: red;
        cursor: pointer;
        padding: 6px;
    }
}
</style>
