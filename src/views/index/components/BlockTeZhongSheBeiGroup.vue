<template>
    <div class="BlockTeZhongSheBei full">
        <container-with-left-border v-for="(item,index) in data" :key="index" :border="index!==0" class="">
            <div class="full can" @click.stop="change(index)">
                <span class="name text-center">{{item.name}}</span>
                <span class="number-font">{{item.value}}</span>
                <span class="value text-unit">{{item.unit}}</span>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>

export default {
  name: 'BlockTeZhongSheBeiGroup',
  data () {
    return {
      dataIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    dataIndex: {
      immediate: true,
      deep: true,
      handler: function () {
        this.$emit('change', this.dataIndex)
      }
    }
  },
  methods: {
    change (index) {
      console.log(index)
      this.dataIndex = index
    },
    change2 (isAdd) {
      if (isAdd) {
        if (this.dataIndex === 2) {
          this.dataIndex = 2
        } else {
          this.dataIndex++
        }
      } else {
        if (this.dataIndex === 0) {
          this.dataIndex = 0
        } else {
          this.dataIndex--
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.BlockTeZhongSheBei {

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;

    > div {
        flex: auto;
    }

    .text-center {
        font-size: 16px;
    }

    .text-unit {
        font-size: 12px;
    }

    .can {
        display: flex;
        cursor: pointer;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        span {
            padding: 0 2px;
        }
    }
}

</style>
