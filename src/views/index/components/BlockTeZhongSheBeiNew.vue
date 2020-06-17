<template>
    <div class="BlockTeZhongSheBei full">
        <div class="center">
            {{data[pageIndex].sub}}
            <div class="add">
                <span class="left" @click="change2(false)">◂</span>
                <span class="">{{pageIndex+1}}/3</span>
                <span class="right" @click="change2(true)">▸</span>
            </div>
        </div>
        <div class="img full-width">
            <div class="scroll" style="transition: margin-left 1.2s;" :style="{'margin-left':-pageIndex*100+'%'}">
                <img :src="data[0].img" alt="" class="w-1-3"/>
                <img :src="data[1].img" alt="" class="w-1-3"/>
                <img :src="data[2].img" alt="" class="w-1-3"/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'BlockTeZhongSheBeiNew',
  data () {
    return {
      pageIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    dataIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    dataIndex: {
      immediate: true,
      deep: true,
      handler: function () {
        this.pageIndex = this.dataIndex
      }
    }
  },
  methods: {
    change (index) {
      this.pageIndex = index
    },
    change2 (isAdd) {
      if (isAdd) {
        if (this.pageIndex === 2) {
          this.pageIndex = 2
        } else {
          this.pageIndex++
        }
      } else {
        if (this.pageIndex === 0) {
          this.pageIndex = 0
        } else {
          this.pageIndex--
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.BlockTeZhongSheBei {

    .center {
        height: 24px;
        font-size: 14px;
        line-height: 24px;
        padding-left: 10px;

        .add {
            float: right;

            span {
                padding: 0 4px;
            }

            .left, .right {
                cursor: pointer;
                font-size: 16px;
            }
        }
    }

    .img {
        height: calc(100% - 24px);
        overflow: hidden;

        .scroll {
            width: 300%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            white-space: nowrap;
            overflow-y: hidden;
            overflow-x: scroll;

            &::-webkit-scrollbar {
                display: none;
            }

        }

        img {
            /*width: 292px;*/
            float: left;
            position: relative;

            > * {
                position: absolute;
            }
        }

    }

    .line {
        background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, rgba(183, 222, 255, 1) 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat left;
        background-size: 1px 70%;
    }

    .com {
        width: 352px;
    }
}

</style>
