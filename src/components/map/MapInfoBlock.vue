<template>
    <div class="info">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'MapInfoBlock'
}
</script>

<style scoped lang="less">
.info {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 800px;
    max-height: 95%;
    overflow-y: auto;
}

</style>
