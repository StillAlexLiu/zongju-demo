<template>
    <div class="deptJgxk full" v-if="data.length>0">
        <container-with-left-border class="full-height" v-for="(item,index) in data" :border="index!==0"
                                    :key="index">
            <div class="dt full-height info">
                <span class="dc title">{{item.title}}</span>
                <span class="dc" v-if="item.name">{{item.name}}</span>
                <span class="dc value number-font" v-if="item.value">{{item.value}}</span>
                <span class="dc" v-if="item.unit">{{item.unit}}</span>
                <span class="dc" v-if="item.per">{{item.per}}</span>
                <span class="dc" v-if="item.trend"></span>
                <div class=" dc">
                    <Arrow dir="up" v-if="item.ra"/>
                </div>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
import Arrow from '../../index/components/Arrow'

export default {
  name: 'deptJgxk',
  components: {
    Arrow
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
.deptJgxk {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;

    > div {
        flex-grow: 1
    }

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
        font-size: 12px;

        > span {
            padding: 0 4px;
        }

        .title {
            // font-size: 14px;
            text-align: center;
        }

    }
}
</style>
