<template>
    <div class="  h-2-11">
        <div class="metTitle full ">
            <div class="full metTitleCont ">
                <div class="name text-center">
                    <img src="../images/nengxiao.png" alt="" v-if="name === '能效标识'">
                    <img src="../images/shuixiao.png" alt="" v-else>
                    {{name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'metTitle2',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.metTitle {
    color: white;

    .metTitleCont {
        padding-top: 3.5%;
        background: url("../images/bg1.png") no-repeat;
        background-size: 100% 100%;
    }

    .value {
        font-family: 'LESLIE';
        color: #3FD3D6;
        font-size: 16px;
        text-align: center;

        span {
            font-size: 12px;
            color: #fff;
            padding-left: 5px;
        }

    }

    .name {
        padding-top: 2%;

        img {
            vertical-align: top;
            width: 16px;
            margin-top: 1px;
        }
    }
}
</style>
