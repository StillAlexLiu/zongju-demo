<template>
    <div class='CenterTitle'>
<!--        <div class="main-title text-center">-->
<!--            <img class="logo" src="./img/logo.png" alt=""/>-->
<!--            <span class="title-text">{{title}}</span>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
  name: 'CenterTitle',
  props: {
    title: {
      type: String,
      default: '智慧监管中心'
    }
  }
}
</script>

<style scoped lang="less">
.CenterTitle {
    height: 40px;

    .logo {
        width: 35px !important;
        height: 36px;
        vertical-align: bottom !important;;
    }

    .title-text {
        font-size: 34px;
        line-height: 40px;
        letter-spacing: 4px;
        margin-left: 13px;
    }
}
</style>
