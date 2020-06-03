<template>
    <div class="productJiankong full">
        <div class="prodTop full-width">
            <div class="productJiankongTop full">
                <div class="title"><span>事件概览</span></div>
                <div class="productJianTopText ">
                    3月16日8时至3月17日8时，共监测到<span class="number-font">口罩等防护用品</span>舆情<span class="number-font">251</span>条，其中网媒<span
                    class="number-font">212</span>条，微博<span class="number-font">39</span>条。
                </div>
            </div>
        </div>
        <div class="prodHeight">
            <div class="h-2-5 full-width">
                <div class="productJiankongTop productJiankongCont full-height">
                    <div class="title"><span>最新舆情</span></div>
                    <div class="legend">
                        <span class="icon"><img src="./../img/productIcon1.png" alt=""></span><span
                        class="text">预警</span>
                        <span class="icon">+</span><span class="text">正面</span>
                        <span class="icon iconColor">-</span><span class="text">负面</span>
                    </div>
                    <div class="jiankongTopList">
                        <div class="li" v-for="(item,index) in list" :key="index">
                            <div>
                                <img src="./../img/productIcon1.png" v-if="item.type==1" alt="">
                                <img src="./../img/productIcon2.png" v-else alt="">
                            </div>
                            <div>{{item.text}}</div>
                            <div>{{item.time}}</div>
                            <div>{{item.app}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-3-5 full-width">
                <div class="productJiankongTop productJiankongBottom full-height">
                    <div class="title"><span>全网红色预警</span></div>
                    <div class="full-width productEchartH">
                        <prouctAreaLineJianKong :data="chartList.data" :symbolSize="chartList.symbolSize"
                                                :title="chartList.title"
                                                :dimensions="chartList.dimensions"
                                                :colors="chartList.color"
                                                :type="chartList.type"
                                                :legend="chartList.legend"
                                                :markLine="1"
                        ></prouctAreaLineJianKong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import prouctAreaLineJianKong from './productAreaLineJiankong'
import graphic from 'echarts/lib/util/graphic'

export default {
  name: 'productJiankong',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    prouctAreaLineJianKong
  },
  data () {
    return {
      list: [
        {
          id: 1,
          type: 1,
          text: '借机大肆贩卖销售假冒伪劣口罩等防护用品的犯罪团伙借机大肆贩卖销售假冒伪劣口罩等防护用品的犯罪团伙',
          time: '11:02:19',
          app: '微博'
        },
        {
          id: 2,
          type: 2,
          text: '“天价口罩”“一罩难求”等现象不断出现，“假口罩”、相关“发放口罩"谣言等乱像',
          time: '10:22:56',
          app: 'APP'
        },
        {
          id: 1,
          type: 2,
          text: '仁爱医院的1.8万口罩 为何成“舆论风暴眼”',
          time: '10:02:54',
          app: '微博'
        }
      ],
      chartList: {
        title: '',
        dimensions: ['name', 'value'],
        symbolSize: 8,
        color: [new graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(79, 255, 148, 0.68)'
            },
            {
              offset: 1,
              color: 'rgba(79, 255, 245, 0.4)'
            }
          ],
          false
        )],
        legend: [''],
        units: [''],
        data: [{
          name: '1月17日',
          value: 3
        }, {
          name: '1月24日',
          value: 4
        }, {
          name: '1月31日',
          value: 5
        }, {
          name: '2月7日',
          value: 7
        }, {
          name: '2月14日',
          value: 4
        }, {
          name: '2月21日',
          value: 2
        }, {
          name: '2月28日',
          value: 1
        }]
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.productJiankong {
    padding: 0 10px;

    .prodTop {
        height: 110px;
    }

    .prodHeight {
        height: calc(100% - 110px);
    }

    .productJiankongTop {

        .productJianTopText {
            text-indent: 25px;
            font-size: 16px;
            padding: 15px;

            .number-font {
                font-size: 18px;

            }
        }

        .title {
            span {
                padding: 2px 10px;
                background: linear-gradient(270deg, rgba(36, 59, 83, 1) 0%, rgba(43, 137, 254, 0.48) 100%);
            }
        }
    }

    .productJiankongCont {
        padding-top: 0;

        .legend {
            text-align: right;
            margin-top: -14px;
        }

        .jiankongTopList {
            height: calc(100% - 30px);

            .li {
                overflow: hidden;

                div {
                    line-height: 22px;
                    float: left;
                    padding: 7px 0px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                    font-size: 16px;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    &:first-child {
                        width: 12px;
                        padding: 0;
                        margin-top: 7px;
                    }

                    &:nth-child(2) {
                        width: calc(100% - 132px);
                        padding-left: 3px;
                    }

                    &:nth-child(3) {
                        width: 70px;
                    }

                    &:nth-child(4) {
                        width: 50px;
                        padding-right: 0;
                        text-align: right;
                    }
                }
            }
        }

        .icon {
            display: inline-block;
            width: 14px;
            height: 14px;
            color: rgba(145, 210, 67, 1);
            font-size: 16px;
            line-height: 20px;
            // vertical-align: middle;
            img {
                width: 100%;
                height: 100%;
                vertical-align: middle;
            }
        }

        .iconColor {
            color: rgba(255, 188, 0, 1);
        }

        .text {
            padding-left: 2px;
            vertical-align: middle;
        }
    }

    .productJiankongBottom {
        // padding-top: 20px;s
        .productEchartH {
            height: calc(100% - 20px);
        }
    }
}
</style>
