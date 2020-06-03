<template>
    <div class='RootTitle'>
        <div class="main-title text-center">
            <img class="logo" src="./img/logo.png" alt=""/>
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'RootTitle',
  props: {
    title: {
      type: String,
      default: '智慧监管中心'
    }
  }
}
</script>

<style scoped lang="less">
.RootTitle {
    height: 61px;
    width: 100%;

    .main-title {
        height: 100%;
        width: 792px;
        background-image: url("./img/bg.png");
        line-height: 60px;
        background-size: 100% 100%;
        background-position: center;
        margin: 0 auto;
        color: #ffffff;
        font-size: 36px;
        letter-spacing: 4px;

    }

    .logo {
        width: 47px;
        height: 48px;
        vertical-align: middle;
    }
}
</style>
