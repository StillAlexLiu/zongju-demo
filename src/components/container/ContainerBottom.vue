<template>
    <div class='ContainerBottom'>
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'ContainerBottom'
}
</script>

<style scoped lang="less">
.ContainerBottom {
    background-image: url("./img/center-bottom.png");
    background-size: 90%;
    background-position: center bottom;
    background-repeat: no-repeat;
}
</style>
