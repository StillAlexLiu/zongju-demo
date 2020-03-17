<template>
    <div class="CheckAndRadioBox">
        <div v-for="(item,index) in data" :key="index" @click="click(index)">
            <img :src="active===index?imgActive:imgDefault" alt=""> {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'CheckAndRadioBox',
  data () {
    return {
      imgDefault: require('./img/checkBoxDefault.png'),
      imgActive: require('./img/checkBoxActive.png'),
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
.CheckAndRadioBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    > div {
        height: 24px;
        text-align: center;
        line-height: 24px;
        margin: 0 10px;
        background-size: 100% 100%;
        cursor: pointer;

        img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }
    }

}
</style>
