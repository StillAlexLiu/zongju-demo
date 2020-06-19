<template>
    <div class='FoodMapText'>
        <div>备案食品标准</div>
        <div>
            <span class="value">37066</span>
            项
        </div>

    </div>
</template>

<script>
export default {
  name: 'FoodMapText'
}
</script>

<style scoped lang="less">
.FoodMapText {
    position: absolute;
    width: 400px;
    height: 42px;
    background-image: url("./../BlockImg/框.png");
    background-size: 100% 100%;
    background-position: center;
    margin: 0 auto;
    left: 200px;
    top: 90px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .value {
        font-size: 34px;
        font-family: LCD;
        color: #3FD3D6;
    }
}
</style>
