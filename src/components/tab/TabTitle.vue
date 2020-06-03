<template>
    <div class="TabTitle full-height">
        <div v-for="(item,index) in data" :key="index" @click="click(index)"
             :class="[select===index?'active':'',index!==0?'border-left':'']">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabTitle',
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
        // this.$emit('input', this.active)
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
    select: {
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
.TabTitle {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;

    > div {
        text-align: center;
        font-size: 22px;
        font-family: 'siyuan';
        line-height: 33px;
        background-size: 100% 100%;
        color: #ccc;
        cursor: pointer;
        margin: 0 6px;
    }

    .active {
        color: #fff;
    }

    .border-left {
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%) no-repeat left;
        background-size: 1px 60%;
    }

}
</style>
