<template>
    <div class="deptEntyKB full">
        <div class="full-height  deptEntyKBLine">
            <div class="h-1-2 lastPadding" v-for="(item, index) in data" :key="index">
                <div class="value text-center h-3-5 number-font" style="font-size:24px" v-if="index ===0">
                    {{item.value}}<span>{{item.unit}}</span></div>
                <div class="name text-center h-2-5" v-if="index ===0" style="padding-top:5%">{{item.name}}</div>
                <div class="full" v-if="index===1">
                    <div class="w-2-5 info dt">
                        <div class="dc value2 number-font">{{item.value}}</div>
                        <div class="dc unit2">{{item.unit}}</div>
                    </div>
                    <div class="w-1-5 info dt">
                        <div class="dc Arrow">
                            <img src="../../index/components/img/arrow-right.png" alt="">
                        </div>
                    </div>
                    <div class="w-2-5 info dt">
                        <div class="dc value2 number-font">{{item.value1}}</div>
                        <div class="dc  unit2">{{item.unit}}</div>
                    </div>
                    <div class="name text-center h-2-5" v-if="index ===1">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'deptEntyKB',
  props: {
    data: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  methods: {},
  components: {}
}
</script>

<style scoped lang="less">
.deptEntyKB {

    .info {
        height: 70%;

        > div {
            &:nth-child(1) {
                text-align: right;
            }

            &:nth-child(2) {
                text-align: left;
            }
        }
    }

    .deptEntyKBLine {
        background: url('../img/entityBg@2x.png');
        background-size: 100% 100%;
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

        .value2 {
            font-size: 18px;
        }
    }

    .lastPadding {
        padding: 6% 0;

        .name {
            padding-top: 3%;
        }

        .value {
            padding-top: 20%;
            font-size: 18px;

            &:last-child {
                padding-top: 25%;
                font-size: 16px;
            }
        }
    }

    .value {
        // font-family: 'LESLIE';
        // color: #3FD3D6;
        // font-size: 16px;
        // text-align: center;
        span {
            // font-size: 12px;
            color: #fff;
            padding-left: 5px;
        }

    }

    .Arrow {
        height: 10px !important;

        > img {
            height: 10px !important;
        }
    }
}
</style>
