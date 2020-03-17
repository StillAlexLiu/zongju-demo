<template>
    <div class="BlockChanQuan full">
        <div class="can">
            <div class="h-2-5 item">

            </div>
            <div class="h-3-5 item">

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlockChanQuan'
}
</script>

<style scoped lang="less">
.BlockChanQuan {
    padding: 20px 0;

    .can {
        height: 100%;
        width: 100%;
        border-width: 1px;
        border-style: solid;
        border-image: radial-gradient(#5DC5F1 50%, #303957 70%, #303957 100%) 50 50;

        .item {
            background-image: radial-gradient(40% 70%, rgba(40, 86, 139, 0.40) 30%, rgba(51, 75, 115, 0.35) 45%, rgba(5, 25, 49, 0.00) 60%);
            background-position: center top;
            filter: blur(3px);
            background-size: 100% 200%;
            background-repeat: no-repeat;
        }
    }
}
</style>
