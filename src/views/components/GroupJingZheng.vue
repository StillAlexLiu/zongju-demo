<template>
    <div class="GroupZhunRu full" v-if="data.length>0">
        <container-with-left-border class="full-height w-1-4 " v-for="(item,index) in data" :border="index!==0"
                                    :key="index">
            <div class="h-1-2 dt title full-width">
                <span class="dc" >{{item.title}}</span>
            </div>
            <div class="h-1-2 dt info full-width">
                <span class="dc" v-if="item.name">{{item.name}}</span>
                <span class="dc value" v-if="item.value">{{item.value}}</span>
                <span class="dc" v-if="item.unit">{{item.unit}}</span>
                <span class="dc" v-if="item.per">{{item.per}}</span>
                <span class="dc" v-if="item.trend">{{item.trend}}</span>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
export default {
  name: 'GroupJingZheng',
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

    .title {
        font-size: 12px;
        text-align: center;
    }

    .value {
        font-size: 16px;
        color: #3FD3D6;
        font-family: 'LESLIE';
    }

    .info {
        > span {
        }
    }
}
</style>
