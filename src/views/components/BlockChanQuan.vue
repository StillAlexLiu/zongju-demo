<template>
    <div class="BlockChanQuan full">
        <div class="can" v-if="false">
            <div class="h-3-8 item dt text-center full-width">
                <div class="h-1-2 dr">
                    <span class="dc t-name">{{data[0].name}}</span>
                </div>
                <div class="h-1-2 dr">
                    <span class="dc t-value  number-font">{{data[0].value}}</span>
                </div>
            </div>
            <div class="h-5-8 item  text-center">
                <div class="top h-1-2">
                    <div class="w-1-2  t-name" style="font-size: 14px;line-height: 40px">
                        {{data[1].name}}
                    </div>
                    <div class="w-1-2" style="text-indent: 20px">
                        第<span class="number-font tv2 number-font">{{data[1].to}}</span>名
                    </div>
                </div>
                <div class="bottom h-1-2">
                    <div class="w-1-2" style="text-indent: 10px">
                        第<span class="number-font  tv3">{{data[1].from}}</span>名
                    </div>
                    <div class="w-1-2">
                        <!--                        {{data[1].text}}-->
                    </div>
                </div>
            </div>
        </div>
        <div class="img full">
            <img src="./img/zhishichanquan.png" style="width: 100%">
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlockChanQuan',
  props: {
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
.BlockChanQuan {
    padding: 10px;

    .can {
        height: 100%;
        width: 100%;
        padding: 10px 0 0 0;
        background-image: url("./img/bg-chanquan.png");
        background-size: 100% 100%;
        background-position: center;

        .item {
            background-position: center top;
            background-size: 100% 200%;
            background-repeat: no-repeat;

            .t-value {
                font-size: 40px;
                color: #3FD3D6;
                font-family: 'LESLIE';
            }

            .t-name {
                font-size: 18px;
            }

            .tv2 {
                font-size: 36px;
            }

            .tv3 {
                font-size: 18px;
            }
        }
    }
}
</style>
