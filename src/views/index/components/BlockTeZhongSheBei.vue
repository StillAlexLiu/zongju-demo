<template>
    <div class="BlockTeZhongSheBei full">
        <div class="title">
            <div v-for="(item,index) in data" :key="index" class="w-1-3" :class="index!==0?'line':''"
                 @click="change(index)">
                <div class="name text-center">
                    {{item.name}}
                </div>
                <div class="value text-center">
                    <span class="number-font">{{item.value}}</span> {{item.unit}}
                </div>
            </div>
        </div>
        <div class="center">
            {{data[dataIndex].sub}}
            <div class="add">
                <span class="left" @click="change2(false)">◂</span>
                <span class="">{{dataIndex+1}}/3</span>
                <span class="right" @click="change2(true)">▸</span>
            </div>
        </div>
        <div class="img full-width">
            <div class="scroll" style="transition: margin-left 1.2s;" :style="{'margin-left':-dataIndex*100+'%'}">
                <img :src="data[0].img" class="w-1-3"/>
                <img :src="data[1].img" class="w-1-3"/>
                <img :src="data[2].img" class="w-1-3"/>
<!--                <img :src="data[1].img"/>-->
<!--                <img :src="data[2].img"/>-->
            </div>
        </div>
    </div>
</template>

<script>
// import ImgComponent from './TabGroup/ImgComponent'
// import ImgComponent1 from './TabGroup/ImgComponent1'
// import ImgComponent2 from './TabGroup/ImgComponent2'

export default {
  name: 'BlockTeZhongSheBei',
  // components: {
  //   ImgComponent2,
  //   ImgComponent1,
  //   ImgComponent
  // },
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
  methods: {
    change (index) {
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
    padding-top: 5px;

    .title {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 52px;
        justify-content: space-around;
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

        .name {
            line-height: 26px;
        }

        .value {
            font-size: 12px;

            .number-font {
                font-size: 20px;
            }
        }
    }

    .center {
        height: 28px;
        font-size: 14px;
        line-height: 30px;
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
        height: calc(100% - 52px - 28px);
        overflow: hidden;

        .scroll {
            width: 300%;
            height: 100%;
            display: flex;
            justify-content: space-between;
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
