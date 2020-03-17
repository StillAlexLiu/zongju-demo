<template>
    <div class="GroupZhunRu" v-if="data.length>0">
        <container-with-left-border class="full-height w-1-2 " :border="false">
            <div class="w-1-3 full-height left dt"><span class="dc">{{makeRow(data[0].name)}}</span></div>
            <div class="w-2-3 full-height right dt">
                <div class="dr" v-for="(item,index) in data[0].value" :key="index">
                    <span class="dc name">{{item.name}}</span>
                    <span class="dc value">{{item.value}}</span>
                    <span class="dc unit">{{item.unit}}</span>
                </div>
            </div>
        </container-with-left-border>
        <container-with-left-border class="full-height w-1-2 item">
            <div class="w-1-3 full-height left dt"><span class="dc">{{makeRow(data[1].name)}}</span></div>
            <div class="w-2-3 full-height right">
                <div class="w-2-5 info dt">
                    <div class="dc value2">{{data[1].value[0].value}}</div>
                    <div class="dc unit2">{{data[1].value[0].unit}}</div>
                </div>
                <div class="w-1-5 arrow dt">
                    <div class="dc">
                        >>>
                    </div>
                </div>
                <div class="w-2-5 info dt">
                    <div class="dc value2">{{data[1].value[1].value}}</div>
                    <div class="dc  unit2">{{data[1].value[1].unit}}</div>
                </div>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
export default {
  name: 'GroupZhunRu',
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

    .left {
        text-align: center;
    }

    .right {
        text-align: center;
    }

    .value {
        font-family: 'LESLIE';
        color: #3FD3D6;
        font-size: 16px;
        text-align: right;
    }

    .value2 {
        font-family: 'LESLIE';
        color: #3FD3D6;
        font-size: 18px;
        text-align: right;
    }

    .info {
        height: 100%;

        > div {
            &:nth-child(1) {
                text-align: right;
            }

            &:nth-child(2) {
                text-align: left;
            }
        }
    }

    .arrow {
        height: 100%;
    }

    .unit2 {
        text-indent: 10px;
    }
}
</style>
