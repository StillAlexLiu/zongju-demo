<template>
    <div class="GroupZhunRu full" v-if="data.length>0">
        <container-with-left-border class="full-height" v-for="(item,index) in data" :border="index!==0"
                                    :key="index">
            <div class="dt full-height info">
                <span class="dc ">{{item.title}}</span>
                <span class="dc" v-if="item.name">{{item.name}}</span>
                <span class="dc number-font" v-if="item.value">{{item.value}}</span>
                <span class="dc" v-if="item.unit">{{item.unit}}</span>
                <span class="dc percent-font" v-if="item.per">{{item.per}}</span>
                <span class="dc" v-if="item.trend"><Arrow :dir="item.trend"/></span>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupJingZheng',
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
        > span {
            padding: 0 4px;
        }

        .title {
            text-align: center;
        }
    }
}
</style>
