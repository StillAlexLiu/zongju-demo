<template>
    <div class="deptMinitEnt full">
        <div class="full-height w-2-5 left">
            <div class=" item" v-for="(item, index) in data.data1" :key="index">
                <div class="name">
                    {{item.name}}
                </div>
                <div class="value-text">
                    <div class="w-1-2">
                        <span class="number-font">{{item.value}}</span>{{item.unit}}
                    </div>
                    <div class="w-1-2">
                        {{item.text}} <span class="number-font">{{item.per}}</span>
                        <Arrow :dir="item.status"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="full-height w-3-5 right">
            <div v-for="(item,index) in data.data2" :key="index" class="item">
                <div v-for="(item2,index2) in item" :key="index2" class="item2">
                    <div class="name">
                        {{item2.name}}
                    </div>
                    <div class="value number-font">
                        {{item2.value}}
                        <Arrow v-if="item2.status" :dir="item2.status"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from '../../index/components/Arrow'

export default {
  name: 'deptMinitEnt',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {},
  components: {
    Arrow
  }
}
</script>

<style scoped lang="less">
.deptMinitEnt {
    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        text-align: center;

        .item {
            flex: 1;
            background-image: linear-gradient(90deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
            background-size: 100% 85%;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: stretch;

            .name {
                font-size: 14px;
            }

            .value-text {
                font-size: 12px;
            }
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        padding: 20px 0;

        > .item {

            background-image: url("./../img/bg.png");
            background-size: 296px 29px;
            background-repeat: no-repeat;
            background-position: center 70%;
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: stretch;
            text-align: center;

            > .item2 {
                /*&:nth-child(1) {*/
                /*    flex: 2;*/
                /*}*/

                /*&:nth-child(2) {*/
                /*    flex: 1;*/
                /*}*/

                /*&:nth-child(3) {*/
                /*    flex: 1;*/
                /*}*/

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: stretch;
                padding-bottom: 30px;

                .name {
                    font-size: 12px;
                }

                .value {
                    height: 30px;
                    line-height: 30px;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
