<template>
    <div class="box full" v-if="data.length>0">
        <div class="boxBg"></div>
        <div class="full-height w-1-2" v-for="(item,index) in data" :border="index !==0"
             :key="index">
            <div class="dt full-height info full-width">
                <!--                <span class="dc title">{{item.title}}</span>-->
                <span class="dc " v-if="item.name">{{item.name}}</span>
                <span class="dc value number-font" v-if="item.value">{{item.value}}</span>
                <span class="dc unit-font" v-if="item.unit">{{item.unit}}</span>
                <span class="dc" v-if="item.per">{{item.per}}</span>
                <span class="dc" v-if="item.trend"></span>
                <!-- <div class=" dc">
                    <Arrow dir="up" v-if="item.ra"/>
                </div> -->
                <!-- <span class="left-border line" v-show="index === 0"></span> -->
                <span v-show="index === 1"></span>
                <span v-show="index === 0"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'foodJgxk',
  components: {},
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
.box {
    position: relative;
    background: transparent !important;
    // background: url('../img/Rectangle@2x (3).png');
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
    padding: 10px 0;

    .boxBg {
        position: absolute;
        top: 27px;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 70%;
        background: url('../img/Rectangle@2x (3).png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

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
        position: relative;
        z-index: 2;

        > span {
            padding: 0 4px;
        }

        .title {
        }

        .value {
            position: relative;
            z-index: 2;
            padding-left: 0;
        }

        span:last-child {
            /*background: -webkit-gradient(linear, left bottom, left top, from(rgba(206, 235, 255, 0.2)), color-stop(50%, #b7deff), to(rgba(160, 210, 255, 0.18))) no-repeat center;*/
            background: linear-gradient(0deg, rgba(206, 235, 255, 0.2) 0%, #b7deff 50%, rgba(160, 210, 255, 0.18) 100%) no-repeat center;
            background-size: 100% 70%;
            width: 1px;
            display: inline-block;
            height: 80%;
            padding: 0 1px;
            margin-left: 10px;
        }
    }
}
</style>
