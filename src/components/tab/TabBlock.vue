<template>
    <div class="TabBottomLine">
        <div v-for="(item,index) in data" :key="index" @click="click(index)"
             class="item"
             :class="active===index?'active':''">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBlock',
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
        height: 100%;
        text-align: center;
        background-size: 100% 100%;
        cursor: pointer;
        padding: 5px 10px;
        font-size: 18px;
        color: #A0D2FF;
        background-image: url("./img/矩形@2x.png");
    }

    .active {
        /*font-weight: bold;*/
        color: #ffffff;
    }

    > .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
    }

}
</style>
