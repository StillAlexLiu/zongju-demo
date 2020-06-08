<template>
    <div class='BottomMenu'>
        <div v-for="(item,index) in data" :key="index" class="item" @click.prevent="openSub(index)">
            <list-menu :data="item.children" v-if="menuSelect===index" class="list" @click="itemClick"/>
        </div>
    </div>
</template>

<script>
import ListMenu from './ListMenu'
import Mock from 'mockjs'

export default {
  name: 'BottomMenu',
  components: { ListMenu },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    points: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      menuSelect: null,
      actives: []
    }
  },
  methods: {
    openSub (index) {
      this.menuSelect = this.menuSelect === index ? null : index
    },
    itemClick (item) {
      if (item.active) {
        item.coords = this.makePoint()
        this.points.push(item)
      } else {
        const findIndex = this.points.findIndex(value => {
          return value.name === item.name
        })
        this.points.splice(findIndex, 1)
      }
    },
    makePoint () {
      const rtn = []
      const border = 50
      for (let i = 0; i < 10; i++) {
        rtn.push([Mock.Random.natural(border, 1786 - border), Mock.Random.natural(border, 922 - border)])
      }
      return rtn
    }
  }
}
</script>

<style scoped lang="less">
.BottomMenu {
    width: 560px;
    height: 98px;
    background-image: url("./img/底部栏_调度指挥@2x.png");
    background-size: 100% 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;

    .item {
        flex: 1;
        position: relative;
        cursor: pointer;
    }

    .list {
        position: absolute;
        bottom: calc(100% + 15px);
    }
}
</style>
