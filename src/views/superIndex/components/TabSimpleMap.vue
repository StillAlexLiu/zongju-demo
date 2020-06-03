<template>
    <div class="TabSimpleMap">
        <div v-for="(item,index) in data" :key="index" :class="active===item.value?'active':''" @click="click(index)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabSimpleMap',
  data () {
    return {
      active: 0
    }
  },
  watch: {
    active: {
      immediate: true,
      deep: true,
      handler: function () {
        this.$emit('input', this.active)
      }
    },
    value: {
      immediate: true,
      deep: true,
      handler: function () {
        this.active = this.value
      }
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    click (i) {
      this.active = i
      this.$emit('change', this.active)
    }
  }
}
</script>

<style scoped lang="less">
.TabSimpleMap {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    > div {
        width: 80px;
        height: 28px;
        text-align: center;
        line-height: 28px;
        margin: 0 12px;
        background-image: url("../../../components/tab/img/map-default.png");
        background-size: 100% 100%;
        cursor: pointer;
    }

    .active {
        background-image: url("../../../components/tab/img/map-active.png");
    }

}
</style>
