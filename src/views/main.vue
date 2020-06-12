<template>
    <div class="main ">
        <div class="full-height" style="position: relative">
            <router-view/>
            <RootTitle class="root—title"/>
            <PageSelect class="selector"/>
            <div class="open" @click="open">菜单</div>
            <dia-menu v-if="menuShow" @close="close"/>
        </div>
    </div>
</template>

<script>
import PageSelect from './index/components/pageSelect'
import RootTitle from './common/RootTitle'
import DiaMenu from './common/DiaMenu'

export default {
  name: 'mainIndex',
  components: {
    DiaMenu,
    RootTitle,
    PageSelect
  },
  data () {
    return {
      menuShow: false
    }
  },
  methods: {
    open () {
      this.menuShow = true
    },
    close () {
      this.menuShow = false
    }
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
        width: 800px;
        left: 560px;
        top: 0;
    }

    .open {
        position: absolute;
        width: 122px;
        height: 122px;
        background-size: 100% 100%;
        line-height: 122px;
        text-align: center;
        color: #fff;
        background-image: url("./common/img/圆环-07@2x.png");
        top: -30px;
        left: -30px;
        cursor: pointer;
    }
}
</style>
