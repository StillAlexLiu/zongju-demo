<template>
    <div class="TabBottomLine">
        <div v-for="(item,index) in data" :key="index" @click="click(index)"
             class="item"
             :style="{background:active===index?backGround[0]:backGround[1]}"
             :class="active===index?'active':''">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabCustomColor',
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
    },
    backGround: {
      type: Array,
      default: () => {
        return ['linear-gradient(270deg,rgba(248,199,12,0.95) 0%,rgba(247,143,53,1) 100%)', 'rgba(74,144,226,0.31)']
      }
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
        height: 100%;
        text-align: center;
        background-size: 100% 100%;
        cursor: pointer;
        padding: 0 16px;
        font-size: 16px;
    }

    .active {
        /*font-weight: bold;*/
    }

    > .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}
</style>
