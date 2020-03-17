<template>
    <div class="BlockChanQuan full">
        <div class="can">
            center
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
        /*border-color: #42b983;*/
        border-image: radial-gradient(#5DC5F1 50%, #303957 70%, #303957 100%) 50 50;
        /*border-image: linear-gradient(red,yellow) 30 30;*/
    }
}
</style>
