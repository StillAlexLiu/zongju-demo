<template>
    <div class="TabBottomLine">
        <div v-for="(item,index) in data" :key="index" @click="click(index)" :class="active===index?'active':''">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBottomLine',
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
        this.$emit('change', this.active)
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
    }
  }
}
</script>

<style scoped lang="less">
.TabBottomLine {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;

    > div {
        height: 24px;
        text-align: center;
        line-height: 24px;
        background-size: 100% 100%;
        cursor: pointer;
        margin: 0 6px;
        font-size: 14px;
    }

    .active {
        font-weight: bold;
        border-bottom: 1px solid #fff;
    }

}
</style>
