<template>
    <div class='ButtonGroup'>
        <div class="group">
            <div v-for="(item,index) in data" :key="index" @click="click(index)" class="item"
                 :class="[index===dataIndex?'active':'',index===0?'start':'',index===data.length-1?'end':'']">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
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
  data () {
    return {
      dataIndex: 0
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler: function () {
        console.log('w1')
        this.dataIndex = this.value
      }
    },
    dataIndex: {
      immediate: true,
      deep: true,
      handler: function () {
        console.log('w2')
        this.$emit('input', this.dataIndex)
      }
    }
  },
  methods: {
    click (index) {
      this.dataIndex = index
    }
  }
}
</script>

<style scoped lang="less">
.ButtonGroup {
    .group {
        height: 40px;
        display: flex;
        flex-direction: row;

        .item {
            height: 100%;
            width: 130px;
            line-height: 40px;
            text-align: center;
            background-color: #26476D;
            cursor: pointer;

            &.active {
                background-color: #5994BB;
            }

            &.start {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
            }

            &.end {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }
        }
    }
}
</style>
