<template>
    <div class="deptTaskSg full">
        <div class="w-1-4 full-height deptTaskSgBg" v-for="(item, index) in data" :key="index">
            <div class="full deptTaskSgPadding">
                <div class="title text-center h-2-6">{{item.title}}</div>
                <div class="text-center h-4-6">
                    <div class="text-center full-height w-1-2">
                        <div class="name text-center h-1-2">{{item.name}}</div>
                        <div class="value text-center h-1-2 number-font"> {{item.value}}<span>{{item.unit}}</span></div>
                    </div>
                    <div class="text-center full-height w-1-2">
                        <div class="name text-center h-1-2">{{item.name1}}</div>
                        <div class="value text-center h-1-2 number-font"> {{item.value1}}<span>{{item.unit1}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'deptTaskSg',
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
.deptTaskSg {
    .deptTaskSgBg {
        padding: 8px 5px;

        .deptTaskSgPadding {
            background: linear-gradient(270deg, rgba(51, 75, 115, 0) 0%, rgba(51, 75, 115, 0.5) 50%, rgba(51, 75, 115, 0) 100%);
            border-radius: 2px;
            border: 1px solid;
            border-image: radial-gradient(circle, rgba(0, 105, 180, 0), rgba(103, 125, 159, 0), rgba(103, 125, 159, 0.3)) 1 1;
        }
    }

    .title {
        font-size: 16px;
        padding-top: 3px;
    }

    .name {
        font-size: 13px;
    }

    .value {
        // font-family: 'LESLIE';
        // color: #3FD3D6;
        // font-size: 16px;
        // text-align: center;
        margin-left: -7px;
        font-size: 22px;

        span {
            // font-size: 12px;
            color: #fff;
            // padding-left: 5px;
            font-size: 12px;
        }

    }
}
</style>
