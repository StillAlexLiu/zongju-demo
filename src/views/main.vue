<template>
    <div class="main ">
        <div class="full-height" style="position: relative">
            <router-view/>
            <PageSelect class="selector"/>
        </div>
    </div>
</template>

<script>
import PageSelect from './components/pageSelect'

export default {
  name: 'mainIndex',
  components: { PageSelect }
}
</script>

<style scoped lang="less">
.main {
    background-color: #1A1A2C;
    width: 1920px;
    height: 1080px;
    overflow: hidden;

    .selector {
        position: absolute;
        top: 22px;
        left: 1150px;
    }
}
</style>
