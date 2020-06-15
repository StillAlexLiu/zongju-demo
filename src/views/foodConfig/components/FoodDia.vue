<template>
    <div class='FoodDia' @click="$emit('close')">
        <div class="full">
        </div>
    </div>
</template>

<script>
export default {
  name: 'FoodDia'
}
</script>

<style scoped lang="less">
.FoodDia {
    position: relative;

    .full {
        background-image: url("./../img/食品弹出框.png");
        background-size: 100% 100%;
    }
}
</style>
