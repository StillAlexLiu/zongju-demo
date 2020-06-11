<template>
    <div class="TabBottomLine">
        <div v-for="(item,index) in data" :key="index" @click="click(index)"
             class="item"
             :class="active===index?'active':''">
            {{item.name}}
            <div class="right-arrow" v-if="active===index"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabSide',
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
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: flex-start;
    padding-right: 6px;
    background-image: linear-gradient(0deg, rgba(51, 75, 115, 0.17) 0%, rgba(51, 75, 115, 0.42) 100%);

    > div {
        height: 46px;
        text-align: center;
        background-size: 100% 100%;
        cursor: pointer;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 16px;
        color: #A0D2FF;
        position: relative;

        .right-arrow {
            position: absolute;
            right: -6px;
            height: 12px;
            width: 6px;
            top: 17px;
            background-image: linear-gradient(-180deg, rgba(44, 132, 191, 0.79) 0%, #4193DE 100%);
            border-top: 6px solid transparent;
            border-left: 6px solid #3581C0;
            border-bottom: 6px solid transparent;
        }
    }

    .active {
        /*font-weight: bold;*/
        color: #ffffff;
        background-image: linear-gradient(-180deg, rgba(44, 132, 191, 0.79) 0%, #4193DE 100%);
    }

    > .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}
</style>
