<template>
    <div class="main ">
        <div class="full-height" style="position: relative">
            <router-view/>
            <RootTitle class="root—title"/>
            <PageSelect class="selector"/>
        </div>
    </div>
</template>

<script>
import PageSelect from './index/components/pageSelect'
import RootTitle from './common/RootTitle'

export default {
  name: 'mainIndex',
  components: {
    RootTitle,
    PageSelect
  }
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

    .root—title {
        position: absolute;
        top: 0;
    }
}
</style>
