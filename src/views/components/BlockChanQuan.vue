<template>
    <div class="BlockChanQuan full">
        <div class="can">
            <div class="h-2-5 item dt text-center full-width">
                <div class="h-1-2 dr">
                    <span class="dc t-value  number-font">{{data[0].value}}</span>
                </div>
                <div class="h-1-2 dr">
                    <span class="dc  t-name">{{data[0].name}}</span>
                </div>
            </div>
            <div class="h-3-5 item  text-center">
                <div class="top h-1-2">
                    <div class="w-1-2  t-name">
                        {{data[1].name}}
                    </div>
                    <div class="w-1-2">
                        第<span class="number-font tv2">{{data[1].to}}</span>名
                    </div>
                </div>
                <div class="bottom h-1-2">
                    <div class="w-1-2">
                        第<span class="number-font  tv2">{{data[1].from}}</span>名
                    </div>
                    <div class="w-1-2">
                        {{data[1].text}}
                    </div>
                </div>
            </div>
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
    padding: 20px 0;

    .can {
        height: 100%;
        width: 100%;
        padding: 10px 0 0 0;
        border-width: 1px;
        border-style: solid;
        border-image: radial-gradient(#5DC5F1 50%, #303957 70%, #303957 100%) 50 50;

        .item {
            background-image: radial-gradient(40% 70%, rgba(40, 86, 139, 0.40) 30%, rgba(51, 75, 115, 0.35) 45%, rgba(5, 25, 49, 0.00) 60%);
            background-position: center top;
            background-size: 100% 200%;
            background-repeat: no-repeat;

            .t-value {
                font-size: 24px;
                color: #3FD3D6;
            }

            .t-name {
                font-size: 14px;
            }

            .tv2 {
                font-size: 18px;
                color: #3FD3D6;
            }
        }
    }
}
</style>
