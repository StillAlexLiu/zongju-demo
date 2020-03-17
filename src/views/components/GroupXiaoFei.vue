<template>
    <div class="GroupXiaoFei">
        <container-with-left-border v-for="(item,index) in data" :key="index" :border="index!==0">
            <div class="h-1-2 dt title full-width">
                <span class="dc">{{item.title}}</span>
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
  name: 'GroupXiaoFei',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.GroupXiaoFei {
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

    .title {
        font-size: 12px;
    }

    .value {
        font-size: 16px;
        color: #3FD3D6;
        font-family: 'LESLIE';
    }
}
</style>
