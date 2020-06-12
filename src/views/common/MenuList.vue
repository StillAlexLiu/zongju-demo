<template>
    <div class='MenuList'>
        <div class="menu" :style="{order:position==='right'?'0':'2'}">
            <div v-for="(item,index) in data" :key="index"
                 :class="[index===active?'active':'',item.disable?'disable':'default']" @click="click(item,index)">
                {{item.name}}
            </div>
        </div>
        <div class="line" style="order: 1">
            <div v-for="(item,index) in Math.ceil(data.length/2)" :key="index">
                <div class="b" :style="style">
                </div>
                <div class="l">
                </div>
            </div>
        </div>
        <div class="line2" :style="{order:position==='right'?'2':'0'}">
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    position: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    style () {
      if (this.position === 'right') {
        return {
          left: '-10px'
        }
      } else {
        return {
          right: '-10px'
        }
      }
    }
  },
  data () {
    return {
      active: null
    }
  },
  methods: {
    click (item, index) {
      if (!item.disable) {
        this.active = index
        this.$emit('click', item)
      }
    }
  }
}
</script>

<style scoped lang="less">
.MenuList {
    width: 511px;
    color: #fff;
    display: flex;
    flex-direction: row;

    .line2 {
        flex-basis: 1px;
        padding: 28px 0;

        > div {
            height: 100%;
            border-right: 1px dotted #5CA4FF;
        }
    }

    .line {
        flex-basis: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        > div {
            flex-basis: 10px;
            position: relative;

            > div {
                position: absolute;
            }

            .b {
                width: 10px;
                height: 10px;
                border: 1px solid #5CA4FF;
            }

            .l {
                height: 1px;
                width: 100%;
                top: 5px;
                border-bottom: 1px dotted #5CA4FF;
            }
        }
    }

    .menu {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        flex-basis: 460px;

        > div {
            flex-basis: calc(50% - 10px);
            height: 48px;
            line-height: 48px;
            margin: 5px;
            text-align: center;
            font-size: 18px;
            background-size: 100% 100%;
        }

        .disable {
            background-image: url("./img/侧边栏／不可选@2x.png");
        }

        .default {
            background-image: url("./img/侧边栏／默认@2x.png");
            cursor: pointer;
        }

        .active {
            cursor: pointer;
            background-image: url("./img/侧边栏背景@2x.png");
        }
    }

}
</style>
