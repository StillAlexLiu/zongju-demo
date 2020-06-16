<template>
    <div class='CenterMenu'>
        <Roll class="full" :data="bg1"/>
        <Roll class="full" :data="bg2"/>
        <div class="full line"></div>
        <div class="buttons">
            <div v-for="(item,index) in btns" :key="index" class="btn"
                 :style="{backgroundImage:'url('+(index===active?item.btnActive:item.btn)+')'}"
                 @mouseover="mouseOver(index)" @mouseleave="mouseOut(index)">
                <span><img :src="item.icon"></span>
                <span class="btn-name">{{item.name}}</span>
            </div>
        </div>
        <div class="btn-top">
            <Roll class="full" :data="bg3"/>
            <Roll class="full" :data="bg4"/>
            <Roll class="full" :data="bg5"/>
        </div>
        <div class="main-page" @click="toIndex">
            首页
        </div>
    </div>
</template>

<script>

import Roll from './Roll'

export default {
  name: 'CenterMenu',
  components: { Roll },
  data () {
    return {
      active: null,
      btns: [{
        name: '综合专题',
        icon: require('./img/menus/编组 5@2x.png'),
        btn: require('./img/btn/btn-default-tl.png'),
        btnActive: require('./img/btn/btn-active-tl.png')
      }, {
        name: '会商指挥',
        icon: require('./img/menus/编组 6@2x.png'),
        btn: require('./img/btn/btn-default-tr.png'),
        btnActive: require('./img/btn/btn-active-tr.png')
      }, {
        name: '司局专题',
        icon: require('./img/menus/编组备份@2x.png'),
        btn: require('./img/btn/btn-default-bl.png'),
        btnActive: require('./img/btn/btn-active-bl.png')
      }, {
        name: '地方专题',
        icon: require('./img/menus/icon／地方专题@2x.png'),
        btn: require('./img/btn/btn-default-br.png'),
        btnActive: require('./img/btn/btn-active-br.png')
      }],
      bg1: {
        img: require('./img/编组 7.png'),
        time: 30,
        type: 'roll'
      },
      bg2: {
        img: require('./img/编组 8.png'),
        time: 25,
        type: 'back'
      },
      bg3: {
        img: require('./img/编组 9.png'),
        time: 18,
        type: 'back'
      },
      bg4: {
        img: require('./img/Shape.png'),
        time: 14,
        type: 'roll'
      },
      bg5: {
        img: require('./img/编组 11.png'),
        time: 12,
        type: 'back'
      }
    }
  },
  methods: {
    mouseOver (index) {
      console.log(index)
      this.active = index
    },
    mouseOut (event) {
      this.active = null
    },
    toIndex () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
.CenterMenu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        position: absolute;
    }

    .line {
        background-image: url("./img/编组 12@2x.png");
        background-size: 753px 641px;
        background-repeat: no-repeat;
        background-position: center 27%;
        top: 0;
        left: 0;
    }

    .buttons {
        width: 500px;
        height: 500px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .btn {
            width: 236px;
            height: 236px;
            margin: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /*line-height: 20px;*/
            cursor: pointer;
            align-items: stretch;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;

            img {
                height: 30px;
            }
        }
        .btn-name{
            font-size: 24px;
        }
    }

    .btn-top {
        width: 169px;
        height: 169px;
    }

    .main-page {
        font-size: 36px;
        cursor: pointer;
    }
}
</style>
