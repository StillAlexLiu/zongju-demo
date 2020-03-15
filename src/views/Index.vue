<template>
    <div class="Index full">
        <div class="side full-height">
            <container title="标题" class=" full-width h-2-5">
                <TabSimplePoint slot="title" v-model="tabSelect0" :max="6"/>
                <ChartLineSimple :xdata="page.chart1.xdata" :ydata="page.chart1.ydata"/>
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect2" :max="3"/>
                <ChartBarSimple :data="page.chart2.data" :dimensions="page.chart2.dimensions"/>
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect3" :max="3"/>
                内容
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect4" :max="3"/>
                内容
            </container>
        </div>
        <div class="center full-height">
            <div class="title">{{page.title}}</div>
            <div class="map">
                <div class="map-can">
                    <EchartsMap/>
                </div>
                <TabSimpleMap class="map-tab" :data="mapTab" v-model="mapTabActive" @change="MapChange"/>
            </div>
            <container title="标题" class="center-bottom full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect" :max="3"/>
                内容
            </container>
        </div>
        <div class="side full-height">
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect" :max="3"/>
                内容
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect" :max="3"/>
                内容
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect" :max="3"/>
                内容
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect" :max="3"/>
                内容
            </container>
            <container title="标题" class=" full-width h-1-5">
                <TabSimplePoint slot="title" v-model="tabSelect" :max="3"/>
                内容
            </container>
        </div>
    </div>
</template>

<script>
import TabSimplePoint from '../components/tab/TabSimplePoint'
import EchartsMap from './components/EchartsMap'
import TabSimpleMap from '../components/tab/TabSimpleMap'
import ChartLineSimple from './components/ChartLineSimple'
import ChartBarSimple from './components/ChartBarSimple'

export default {
  name: 'Index',
  components: {
    ChartBarSimple,
    ChartLineSimple,
    TabSimpleMap,
    EchartsMap,
    TabSimplePoint
  },
  data () {
    return {
      tabSelect: 0,
      tabSelect0: 0,
      tabSelect1: 0,
      tabSelect2: 0,
      tabSelect3: 0,
      tabSelect4: 0,
      tabSelect5: 0,
      max: 3,
      mapTabActive: 0,
      mapTab: [{
        name: '首页',
        value: 0
      }, {
        name: '重点关注',
        value: 1
      }, {
        name: '会商机制',
        value: 2
      }, {
        name: '指挥调度',
        value: 3
      }],
      options: [],
      page: {
        title: '',
        chart1: {
          xdata: [],
          ydata: []
        },
        chart2: {
          data: [{
            name: '测试1',
            value: 33
          }, {
            name: '测试2',
            value: 33
          }, {
            name: '测试3',
            value: 33
          }],
          dimensions: ['name', 'value']
        }
      }
    }
  },
  mounted () {
    this.getConfig()
  },
  methods: {
    MapChange (i) { // 这个会立刻执行
      // console.log(i)
    },
    getConfig () {
      this.$http.post('/screenNode/getTree', {}).then(value => {
        this.options = value
        this.showInPage(value)
      })
    },
    showInPage (value) {
      this.page.title = value[0].value
      this.page.chart1.xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      this.page.chart1.ydata = [820, 932, 901, 934, 1290, 1330, 1320]
    }
  }
}
</script>

<style scoped lang="less">
@SideWidth: 27%;
@MapHeight: 68%;
@TitleHeight: 5%;
@CenterBottomHeight: 27%;
.Index {
    padding: 15px 20px;
    color: #ffffff;

    > div {
        float: left;
    }

    .side {
        width: @SideWidth;
    }

    .center {
        width: calc(-2 * @SideWidth + ~"100%");

        .title {
            height: @TitleHeight;
        }

        .map {
            height: @MapHeight;
            @MapTabHeight: 40px;

            .map-can {
                height: calc(-@MapTabHeight + ~"100%");
            }

            .map-tab {
                height: @MapTabHeight;
            }
        }

        .center-bottom {
            height: @CenterBottomHeight;
        }
    }
}
</style>
