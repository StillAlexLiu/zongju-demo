<template>
    <div class="full ChartGauge" style="position: relative">
        <div class="chart full">
            <div class="name">营商环境指数</div>
            <div class="value">96<span>%</span></div>
        </div>
        <!--        <div class="info" @click="click" >-->
        <!--            <span>{{data.value}}</span>%-->
        <!--        </div>-->
    </div>
</template>

<script>

export default {
  name: 'ChartGauge'
}
</script>

<style scoped lang="less">
.ChartGauge {
    .chart {
        text-align: center;
        background-image: url("./img/类型1@2x.png");
        background-size: 156px 81px;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        .value {
            font-size: 36px;
            color: #3FD3D6;
            font-family: 'LCD';
        }
    }
}
</style>
