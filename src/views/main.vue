<template>
    <div class="main ">
        <div class="full-height" style="position: relative">
            <router-view/>
            <RootTitle class="root—title"/>
            <PageSelect class="selector" v-if="false"/>
            <div class="pageName">{{pageName}}</div>
            <div class="open" @click="open">导航</div>
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
      menuShow: false,
      pageName: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function () {
        this.pageName = this.$route.name
      }
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
    background-image: url("./common/img/背景_整体背景.png");
    background-size: 100% 100%;

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
        z-index: 99;
    }

    .pageName {
        position: absolute;
        top: 22px;
        left: 1140px;
        z-index: 110;
        width: 184px;
        text-align: center;
        color: #fff;
        height: 30px;
        line-height: 30px;
        background-size: 158px 30px;
        background-repeat: no-repeat;
        background-position: center;
        /*background-image: url("./common/img/小标题背景框@2x.png");*/
        background-image: url("./common/img/小标题背景框-窄@2x.png");
    }

    .open {
        position: absolute;
        width: 52px;
        height: 52px;
        background-size: 100% 100%;
        line-height: 52px;
        text-align: center;
        color: #fff;
        background-image: url("./common/img/Shape@2x.png");
        top: 5px;
        left: 5px;
        cursor: pointer;
    }
}
</style>
