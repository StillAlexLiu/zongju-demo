<template>
    <div class="TabFreedom">
        <div v-for="(item,index) in data" :key="index" @click="click(index)" :class="active===index?'active':''">
            <slot v-bind:item="item" v-bind:index="index">
                {{ item }}
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabFreedom',
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
.TabFreedom {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    justify-content: space-around;

    > div {
        flex: 1;
    }
}
</style>
