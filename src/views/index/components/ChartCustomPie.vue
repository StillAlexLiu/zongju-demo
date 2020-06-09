<template>
    <div class="ChartCustomPie full">
        <div class="title">{{title}}</div>
        <div class="info">
            <div v-for="(item,index) in data" :key="index">
                <div class="img text-center">
                    <span class="number-font">{{item.value}}</span>%
                </div>
                <div class="name text-center">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ChartCustomPie',
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
  }
}
</script>

<style scoped lang="less">
.ChartCustomPie {
    padding: 0 10px;

    .title {
        height: 20px;
        font-size: 14px;
        line-height: 20px;
    }

    .info {
        height: calc(100% - 20px);
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        > div {
            flex-grow: 1;
            flex-basis: 130px;

            .img {
                height: 67px;
                line-height: 110px;
                background-image: url("./img/custom-pie.png");
                background-size: auto 100%;
                background-position: center;
                background-repeat: no-repeat;
                font-size: 9px;

                .number-font {
                    font-size: 24px;
                    color: #fff;
                    font-family: 'LESLIE';
                }
            }

            .name {
                line-height: 20px;
                height: calc(100% - 67px);
            }
        }
    }

}
</style>
