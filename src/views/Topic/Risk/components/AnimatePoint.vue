<template>
    <div class='AnimatePoint'>
        <div class="line" :style="{borderRight:'1px dashed '+data[color].line}"></div>
        <div class="cb" :style="{backgroundImage:'url('+data[color].cb+')'}"></div>
        <div class="ct" :style="{backgroundImage:'url('+data[color].ct+')'}"></div>
        <div class="arrow" :style="{backgroundImage:'url('+data[color].arrow+')'}"></div>
    </div>
</template>

<script>
export default {
  name: 'AnimatePoint',
  props: {
    color: {
      type: String,
      default: 'yellow'
    }
  },
  data () {
    return {
      data: {
        orange: {
          line: 'rgb(238 ,72 ,0)',
          ct: require('./img/打点/橙色打点/橙色-大@2x.png'),
          cb: require('./img/打点/橙色打点/橙色-小@2x.png'),
          arrow: require('./img/打点/橙色打点/橙色@2x.png')
        },
        red: {
          line: 'rgb(255 ,60 ,60)',
          ct: require('./img/打点/红色打点/红色-大@2x.png'),
          cb: require('./img/打点/红色打点/红色-小@2x.png'),
          arrow: require('./img/打点/红色打点/红色@2x.png')
        },
        blue: {
          line: 'rgb(33 ,160, 183)',
          ct: require('./img/打点/蓝色打点/蓝色大@2x.png'),
          cb: require('./img/打点/蓝色打点/蓝色小@2x.png'),
          arrow: require('./img/打点/蓝色打点/蓝色@2x.png')
        },
        yellow: {
          line: 'rgb(245 ,166 ,35)',
          ct: require('./img/打点/黄色打点/黄色大@2x.png'),
          cb: require('./img/打点/黄色打点/黄色小@2x.png'),
          arrow: require('./img/打点/黄色打点/黄色@2x.png')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.AnimatePoint {
    width: 69px;
    height: 150px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;

    > div {
        position: absolute;
    }

    .line {
        width: 2px;
        height: calc(100% - 35px);
        /*border-right: 1px dashed #42b983;*/
    }

    .arrow {
        width: 33px;
        height: 24px;
        background-size: 33px 24px;
        /*background-image: url("./img/打点/红色打点/红色@2x.png");*/
        animation: ak 1s ease-in-out 0s alternate forwards infinite;
    }

    .ct {
        width: 29px;
        height: 10px;
        bottom: 9px;
        background-size: 100%;
        /*background-image: url("./img/打点/红色打点/红色-小@2x.png");*/
        animation: ctk 1s ease-in-out 0s alternate forwards infinite;
    }

    .cb {

        width: 61px;
        height: 23px;
        background-size: 100%;
        bottom: 0;
        /*background-image: url("./img/打点/红色打点/红色-大@2x.png");*/
    }

    @keyframes ak {
        0% {
            bottom: 30px
        }
        100% {
            bottom: 12px
        }
    }
    @keyframes ctk {
        60% {
            transform: scale(1)
        }
        100% {
            transform: scale(1.4)
        }
    }
}
</style>
