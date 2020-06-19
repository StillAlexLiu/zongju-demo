<template>
    <div class='btnGroup'>
        <div v-for="(item,index) in 4" :key="index" @click="$emit('itemClick',item)"></div>
    </div>
</template>

<script>
export default {
  name: 'btnGroup'
}
</script>

<style scoped lang="less">
.btnGroup {
    position: absolute;
    width: 100%;
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: stretch;
    top: 60px;
    padding-right: 20px;
    padding-left: 5px;

    > div {
        flex-basis: 100px;
        cursor: pointer;
    }
}
</style>
