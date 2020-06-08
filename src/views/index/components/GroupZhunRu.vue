<template>
    <div class="GroupZhunRu" v-if="data.length>0">
        <container-with-left-border class="full-height w-1-2 " :border="false">
            <div class="full  left ">
                <div class=" flex" v-for="(item,index) in data[0].value" :key="index">
                    <div class="  name text-right">{{item.name}}</div>
                    <div class="  text-center number-font">{{item.value}}</div>
                    <div class=" unit text-center unit-font">{{item.unit}}</div>
                </div>
            </div>
        </container-with-left-border>
        <container-with-left-border class="full-height w-1-2 item ">
            <div class="w-2-5 full-height left dt"><span class="dc">{{data[1].name}}</span></div>
            <div class="w-3-5 full-height  flex flex2">
                <div class="dc number-font">{{data[1].value[0].value}}</div>
                <div class="dc unit-font">{{data[1].value[0].unit}}</div>
                <Arrow dir="right"/>
                <div class="dc number-font">{{data[1].value[1].value}}</div>
                <div class="dc  unit-font">{{data[1].value[1].unit}}</div>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupZhunRu',
  components: { Arrow },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    makeRow (text) {
      let rtn = []
      for (let i = 0; i < text.length; i++) {
        rtn += text[i]
        if (i % 2 === 1) {
          rtn += '\n'
        }
      }
      return rtn
    }
  }
}
</script>

<style scoped lang="less">
.GroupZhunRu {
    .dt {
        display: table;

        .dr {
            display: table-row;
        }

        .dc {

            display: table-cell;
            vertical-align: middle;
            white-space: pre-line;
        }
    }

    .info {
        height: 100%;

        > div {
            &:nth-child(1) {
                text-align: right;
            }

            &:nth-child(2) {
                text-align: left;
            }
        }
    }

    .left {
        padding: 0 20px;
    }

    .arrow {
        height: 100%;
    }

    .unit2 {
        text-indent: 10px;
    }

    .number-font {
        line-height: 24px;
    }

    .flex {
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        > div {
            line-height: 30px;
            padding: 0 3px;
        }
    }

    .flex2 {
        height: 100%;
        justify-content: flex-start;

        > div, > span {
            line-height: 40px;
        }
    }
}
</style>
