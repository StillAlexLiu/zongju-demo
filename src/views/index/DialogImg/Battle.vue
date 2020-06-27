<template>
    <div class='Battle'>
        <div v-if="page.home.active" class="page" :style="{backgroundImage:'url('+page.home.img+')'}">
            <div style="width: 550px;height: 330px;left: 40px;top: 150px" @click="openPage('home','leftTop')">

            </div>
            <div style="width: 550px;height: 330px;right: 40px;top: 510px" @click="openPage('home','rightBottom')">

            </div>
            <div style="width: 550px;height: 330px;right: 40px;top: 150px" @click="openPage('home','rightTop')">

            </div>
            <div style="width: 550px;height: 330px;left: 40px;top: 510px" >

            </div>
<!--            <div style="width: 550px;height: 330px;left: 40px;top: 510px" @click="openPage('home','leftBottom')">-->

<!--            </div>-->
        </div>
        <div v-if="page.leftTop.active" class="page" :style="{backgroundImage:'url('+page.leftTop.img+')'}">
            <div class="back" @click="openPage('leftTop','home')"></div>
        </div>
        <!--        <div v-if="page.leftBottom.active" class="page" :style="{backgroundImage:'url('+page.leftBottom.img+')'}">-->
        <!--            <div style="width: 570px;height: 300px;left: 30px;top: 100px"-->
        <!--                 @click="openPage('leftBottom','leftBottom2')"></div>-->
        <!--            <div class="back" @click="openPage('leftBottom','home')"></div>-->
        <!--        </div>-->
        <!--        <div v-if="page.leftBottom2.active" class="page" :style="{backgroundImage:'url('+page.leftBottom2.img+')'}">-->
        <!--            <div class="back" @click="openPage('leftBottom2','home')"></div>-->
        <!--        </div>-->
        <div v-if="page.rightTop.active" class="page" :style="{backgroundImage:'url('+page.rightTop.img+')'}">
            <div style="width: 130px;height: 190px;left: 410px;top: 610px"
                 @click="openPage('rightTop','rightTop2')"></div>
            <div class="back" @click="openPage('rightTop','home')"></div>
        </div>
        <div v-if="page.rightTop2.active" class="page" :style="{backgroundImage:'url('+page.rightTop2.img+')'}">
            <div class="back" @click="openPage('rightTop2','home')"></div>
        </div>
        <div v-if="page.rightBottom.active" class="page" :style="{backgroundImage:'url('+page.rightBottom.img+')'}">
            <div style="width: 80px;height: 560px;left: 470px;top: 350px;"
                 @click="openPage('rightBottom','rightBottom2')"></div>
            <div class="back" @click="openPage('rightBottom','home')"></div>
        </div>
        <div v-if="page.rightBottom2.active" class="page" :style="{backgroundImage:'url('+page.rightBottom2.img+')'}">
            <div style="width: 570px;height: 300px;left: 30px;top: 100px"
                 @click="openPage('rightBottom2','rightBottom3')"></div>
            <div class="back" @click="openPage('rightBottom2','home')"></div>
        </div>
        <div v-if="page.rightBottom3.active" class="page" :style="{backgroundImage:'url('+page.rightBottom3.img+')'}">
            <div class="back" @click="openPage('rightBottom3','home')"></div>
        </div>
        <div @click="close" style="height: 63px;width: 360px;position: absolute;top: 61px;left: 780px"></div>
    </div>
</template>

<script>
export default {
  name: 'Battle',
  data () {
    return {
      page: {
        home: {
          active: true,
          img: require('./../BlockImg/BattleGroup/国局-挂图作战-工作成效@2x.png')
        },
        leftTop: {
          active: false,
          img: require('./../BlockImg/BattleGroup/国局-挂图作战-考核目标双优秀@2x.png')
        },
        leftBottom: {
          active: false,
          img: require('./../BlockImg/BattleGroup/编组.png')
        },
        leftBottom2: {
          active: false,
          img: require('./../BlockImg/BattleGroup/国局-挂图作战-表单@2x.png')
        },
        rightTop: {
          active: false,
          img: require('./../BlockImg/BattleGroup/国局-挂图作战-总局领导@2x.png')
        },
        rightTop2: {
          active: false,
          img: require('./../BlockImg/BattleGroup/国局-挂图作战-总局领导下钻@2x.png')
        },
        rightBottom: {
          active: false,
          img: require('./../BlockImg/BattleGroup/挂图作战.png')
        },
        rightBottom2: {
          active: false,
          img: require('./../BlockImg/BattleGroup/挂图作战十大创新.png')
        },
        rightBottom3: {
          active: false,
          img: require('./../BlockImg/BattleGroup/国局-挂图作战-表单@2x.png')
        }
      }
    }
  },
  methods: {
    openPage (old, page) {
      this.page[old].active = false
      this.page[page].active = true
      console.log(old, page)
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.Battle {
    position: relative;

    .page {
        position: relative;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: center;

        .back {
            background-image: url("./components/img/返回@2x.png");
            background-size: 100% 100%;
            height: 40px;
            width: 40px;
            right: 20px;
            top: 20px;
        }

        > div {
            position: absolute;
            cursor: pointer;
        }
    }
}
</style>
