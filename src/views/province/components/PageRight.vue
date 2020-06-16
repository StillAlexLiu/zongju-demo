<template>
    <div class='PageRight full'>
        <div class="h-2-5">
            <div class="h-2-5">
                <div class="full-height w-1-4 msg">
                    <div class="name">{{data.info.name}}</div>
                    <div class="value number-font">{{data.info.value}}<span class="unit">{{data.info.unit}}</span></div>
                </div>
                <div class="full-height w-3-4 " style="padding: 10px">
                    <div class="full list">
                        <div v-for="(item,index) in data.list" :key="index">
                            <div class="name">{{item.name}}</div>
                            <div class="value number-font">{{item.value}}<span class="unit">{{item.unit}}</span>
                                <arrow v-if="item.status" dir="up"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-3-5">
                <ChartBarLine title="协同案件变化趋势" :type="['bar','line']" :dimensions="['name','value','value1']"
                              :data="data.chart"
                              :legend="['案件数量','同比']"
                              :colors="['#24B1F7','#FFD589']"
                              :units="['件','%']"/>
            </div>
        </div>
        <div class="h-3-5">
            <TablePercent :data="data.table" :titles="data.titles" :tableTitle="tableTitle"/>
        </div>
    </div>
</template>

<script>
import Arrow from '../../index/components/Arrow'
import ChartBarLine from '../../index/components/ChartBarLine'
import TablePercent from './TablePercent'

export default {
  name: 'PageRight',
  components: {
    TablePercent,
    ChartBarLine,
    Arrow
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tableTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.PageRight {
    .msg {
        background-image: url("./img/类型1@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: stretch;
        text-align: center;
    }

    .list {
        display: flex;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.5) 100%) no-repeat center;

        .unit {
            color: #fff;
        }
    }
}
</style>
