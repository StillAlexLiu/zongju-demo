<template>
    <div class='ZhunRuTab1 full'>
        <div class="title">营商环境业务指标国际对标</div>
        <table class="full-width">
            <thead>
            <tr>
                <th v-for="(item,index) in title" :key="index">{{item}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in data" :key="index">
                <td rowspan="4" v-if="index===0">开办企业</td>
                <td v-for="(item2,index2) in item" :key="index2" :class="['v'+index2,index2>0?'number-font':'']">
                    {{item2}}
                </td>
            </tr>
            </tbody>
        </table>
        <div class="close" @click="close">x</div>
    </div>
</template>

<script>
export default {
  name: 'ZhunRuTab1',
  data () {
    return {
      title: ['一级指标', '二级指标', '前沿水平', '最差水平', '我国水平'],
      data: [['办理程序(项)', '1', '18', '3'], ['办理时间(天) ', '0.5', '100', '3'], ['费用(%) ', '0', '200', '7.1'], ['开办有限责任公司(%)', '0', '400', '15.8']]
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.ZhunRuTab1 {
    position: relative;

    .title {
        height: 22px;
        line-height: 22px;
        font-size: 16px;
    }

    table {
        height: calc(100% - 22px);

        th {
            background: rgba(34, 84, 197, 0.25);
        }

        tbody {
            .v0, .v2 {
                font-size: 14px;
                color: #fff;
                font-size: 14px;
            }

            .v1, .v3 {
                color: #FFBB6F;
                font-size: 18px;
            }

            tr {
                &:nth-child(odd) {
                    td {
                        background-color: rgba(0, 0, 0, .2);
                    }
                }
            }
        }
    }

    .close {
        position: absolute;
        width: 18px;
        height: 18px;
        right: 2px;
        top: 2px;
        font-size: 18px;
        color: #999999;
        font-weight: bold;
        transform: scale(1.3, 1);
        cursor: pointer;

    }
}
</style>
