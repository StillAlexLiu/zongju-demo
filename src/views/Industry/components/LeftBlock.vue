<template>
    <div class='LeftBlock full'>
        <div class="h-1-2">
            <div class="w-5-9 full-height" style="padding-top: 10px">
                <div style="height: 44px">
                    <div class="w-1-2 sub-title">工业生产许可</div>
                    <div class="w-1-2" style="padding-top: 10px">
                        <TabBottomLine :data="tab1" v-model="selected1" class="tab" />
                    </div>
                </div>
                <div style="height: calc(100% - 44px);">
                    <InfoBlock :data="list1[selected1]" class="full"/>
                </div>
            </div>
            <div class="w-4-9 full-height">
                <div class="full" style="padding-top: 20px">
                    <img-block class="full" :data="left"/>
                </div>
            </div>
        </div>
        <div class="h-1-2">
            <div class="w-2-9 full-height">
                <div class="sub-title">认证认可</div>
                <TabSide :data="tab2" v-model="selected2" class="tab"/>
            </div>
            <div class="w-7-9 full-height">
                <InfoBlock2 :data="list2[selected2]" class="full"/>
            </div>
        </div>
    </div>
</template>

<script>
import InfoBlock from './InfoBlock'
import InfoBlock2 from './InfoBlock2'
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'LeftBlock',
  components: {
    ImgBlock,
    InfoBlock2,
    InfoBlock
  },
  data () {
    return {
      left: {
        img: require('./../BlockImg/行政许可办理时长.png'),
        width: 214,
        height: 233
      },
      selected1: 0,
      selected2: 0,
      tab1: [
        {
          name: '国发证',
          value: 0
        }, {
          name: '省发证',
          value: 1
        }
      ],
      tab2: [{
        name: '强制性认证机构指定',
        value: 0
      }, {
        name: '产品质量检验机构责任认定',
        value: 1
      }, {
        name: '设立认证机构审批',
        value: 2
      }, {
        name: '检查机构、实验室资质认定',
        value: 3
      }, {
        name: '认可机构确定',
        value: 4
      }],
      list1: [[{
        name: '申请数量',
        value: '7652'
      }, {
        name: '受理数量',
        value: '2254'
      }, {
        name: '决定数量',
        value: '3258'
      }, {
        name: '制证数量',
        value: '5587'
      }, {
        name: '送达数量',
        value: '2200'
      }], [{
        name: '申请数量',
        value: '3652'
      }, {
        name: '受理数量',
        value: '1254'
      }, {
        name: '决定数量',
        value: '2258'
      }, {
        name: '制证数量',
        value: '4587'
      }, {
        name: '送达数量',
        value: '1200'
      }]],
      list2: [[{
        name: '申请数量',
        value: '7652'
      }, {
        name: '受理数量',
        value: '2254'
      }, {
        name: '审查数量',
        value: '3258'
      }, {
        name: '决定数量',
        value: '3258'
      }, {
        name: '制证数量',
        value: '5587'
      }, {
        name: '送达数量',
        value: '2200'
      }], [{
        name: '申请数量',
        value: '2652'
      }, {
        name: '受理数量',
        value: '1454'
      }, {
        name: '审查数量',
        value: '1258'
      }, {
        name: '决定数量',
        value: '2858'
      }, {
        name: '制证数量',
        value: '1287'
      }, {
        name: '送达数量',
        value: '900'
      }], [{
        name: '申请数量',
        value: '652'
      }, {
        name: '受理数量',
        value: '254'
      }, {
        name: '审查数量',
        value: '158'
      }, {
        name: '决定数量',
        value: '1958'
      }, {
        name: '制证数量',
        value: '3287'
      }, {
        name: '送达数量',
        value: '900'
      }], [{
        name: '申请数量',
        value: '852'
      }, {
        name: '受理数量',
        value: '254'
      }, {
        name: '审查数量',
        value: '580'
      }, {
        name: '决定数量',
        value: '248'
      }, {
        name: '制证数量',
        value: '387'
      }, {
        name: '送达数量',
        value: '120'
      }], [{
        name: '申请数量',
        value: '3752'
      }, {
        name: '受理数量',
        value: '2654'
      }, {
        name: '审查数量',
        value: '1958'
      }, {
        name: '决定数量',
        value: '1158'
      }, {
        name: '制证数量',
        value: '4837'
      }, {
        name: '送达数量',
        value: '1200'
      }]]
    }
  }
}
</script>

<style scoped lang="less">
.LeftBlock {
    .sub-title {
        height: 44px;
        font-size: 16px;
        line-height: 44px;
    }

    .tab {
        height: calc(100% - 44px);
    }
}
</style>
