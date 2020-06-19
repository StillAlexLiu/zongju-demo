<template>
    <div class='Top2 full'>
        <img-block class="full" :data="img"/>
        <div class="title">区域舆情分布TOP2</div>
        <div class="text">
            <div v-for="(item,index) in data.values" :key="index" class="item">
                <div class="name">
                    {{item.name}}
                </div>
                <div class="value">
                    {{item.value}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'

export default {
  name: 'Top2',
  components: { ImgBlock },
  props: {
    img: {
      type: Object,
      default: () => {
        return {}
      }
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.Top2 {
    position: absolute;

    .title {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 27%;
        font-size: 14px;
    }

    .text {
        position: absolute;
        width: 100%;
        top: 40%;
        height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        padding: 0 20px;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        > div {
            text-align: center;
        }

        .name {

        }

        .value {
            font-size: 36px;
            color: #3FD3D6;
            font-family: LCD;

        }
    }
}
</style>
