<template>
    <div class='product full'>
        <div class="full-height c-w-1">
            <container class="h-3-5" title="监督管理">
                <TabBottomLine :data="tab1" style="height: 32px" v-model="selectedIndex"/>
                <div style="height: calc(100% - 32px)">
                    <img-block class="full" :data="img.block1[1]" v-if="selectedIndex===3"/>
                    <img-block class="full" :data="img.block1[0]" v-else/>
                </div>
            </container>
            <container class="h-1-5" title="重点产品监管">
                <img-block class="full" :data="img.block2"/>
            </container>
            <container class="h-1-5" title="电子商务产品监管">
                <img-block class="full" :data="img.block3"/>
            </container>
        </div>
        <div class="full-height  c-w-2">
            <container class="h-3-5" style="padding-top: 70px" title="热点舆情">
                <img-block class="full" :data="img.block4"/>
            </container>
            <container class="h-2-5">
                <img-block class="full" :data="img.block5" title="风险监控"/>
            </container>
        </div>
        <div class="full-height  c-w-1">
            <container class="h-2-5" title="监督抽查">
                <TabBottomLine :data="tab2" style="height: 32px"/>
                <div style="height: calc(100% - 32px)">
                    <img-block class="full" :data="img.block6"/>
                </div>
            </container>
            <container class="h-1-5" title="不合格产品排名top5">
                <img-block class="full" :data="img.block7"/>
            </container>
            <container class="h-1-5" title="不合格产品地区排名">
                <img-block class="full" :data="img.block8"/>
            </container>
            <container class="h-1-5" title="不合格后处置情况">
                <img-block class="full" :data="img.block9"/>
            </container>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../common/ImgBlock'

export default {
  name: 'Product',
  components: { ImgBlock },
  data () {
    return {
      selectedIndex: 0,
      tab1: [{
        name: '工业品',
        value: 0
      }, {
        name: '消费品',
        value: 1
      }, {
        name: '食品相关',
        value: 2
      }, {
        name: '棉花类',
        value: 3
      }],
      tab2: [{
        name: '企业',
        value: 0
      }, {
        name: '产品',
        value: 1
      }, {
        name: '产品批次',
        value: 2
      }],
      img: {
        block1: [{
          img: require('./BlockImg/监督管理-工业品@2x.png'),
          width: 994 / 2,
          height: 974 / 2
        }, {
          img: require('./BlockImg/监督管理-棉花类@2x.png'),
          width: 996 / 2,
          height: 984 / 2
        }],
        block2: {
          img: require('./BlockImg/重点产品监管@2x.png'),
          width: 990 / 2,
          height: 314 / 2
        },
        block3: {
          img: require('./BlockImg/电子商务产品监管@2x.png'),
          width: 990 / 2,
          height: 304 / 2
        },
        block4: {
          img: require('./BlockImg/热点舆情@2x.png'),
          width: 1482 / 2,
          height: 920 / 2
        },
        block5: {
          img: require('./BlockImg/风险监控@2x.png'),
          width: 1512 / 2,
          height: 720 / 2
        },
        block6: {
          img: require('./BlockImg/监督抽查-企业@2x.png'),
          width: 992 / 2,
          height: 528 / 2
        },
        block7: {
          img: require('./BlockImg/不合格产品top5@2x.png'),
          width: 988 / 2,
          height: 292 / 2
        },
        block8: {
          img: require('./BlockImg/不合格产品地区@2x.png'),
          width: 988 / 2,
          height: 306 / 2
        },
        block9: {
          img: require('./BlockImg/不合格后处置@2x.png'),
          width: 770 / 2,
          height: 272 / 2
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.product {
    padding: 15px 20px;
    color: #ffffff;

    .c-w-1 {
        float: left;
        width: 29%;
    }

    .c-w-2 {
        float: left;
        width: 42%;
    }
}
</style>
