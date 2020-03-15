<template>
    <div class="MapSelector">
        <!--        1级分类-->
        <div class="tab-group full-width">
            <div class="tab-item" v-for="(item,index) in data" :class="index===activeIndex?'active':''" :key="index"
                 @click="tabClick(index)">{{item.name}}
            </div>
        </div>
        <!--        2级分类-->
        <div class="btn-group full-width" v-if="data[activeIndex]">
            <template v-for="(item,index) in data[activeIndex].children">
                <div class="btn"
                     :key="index" @click="itemClick(item,index,data[activeIndex].children)">
                    <img class="img" alt :src="item.icon"/>
                    <img class="icon" v-if="item.active&&!item.children" alt src="./img/item_select.png"/>
                    <div>{{item.name}}</div>
                    <font-awesome-icon v-if="item.children" :class="item.active?'rotate-up':'rotate-down'"
                                       class="more"
                                       icon="angle-double-up"/>
                </div>
                <!--                3级分类-->
                <div class="sub-btn-group full-width" :key="'s'+index" v-if="item.children&&item.active">
                    <div class="btn" v-for="(item2,index) in item.children"
                         :key="index" @click="itemClick(item2,index,item.children)">
                        <img class="img" alt :src="item2.icon"/>
                        <img class="icon" v-if="item2.active" alt src="./img/item_select.png"/>
                        <div>{{item2.name}}</div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MapSelector',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0,
      single: true,
      selectArray: []
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function () {
        this.activeIndex = 0
      }
    }
  },
  methods: {
    init () {
      this.single = this.data[this.activeIndex].single
      this.send()
    },
    tabClick (index) {
      this.activeIndex = index
      this.init()
      this.removeActive(this.data)
    },
    itemClick (item, index, array) {
      if (this.single) {
        for (let i = 0; i < array.length; i++) {
          if (i !== index) {
            array[i].active = false
          }
          if (array[i].children) {
            for (let j = 0; j < array[i].children.length; j++) {
              array[i].children[j].active = false
            }
          }
        }
      }

      item.active = !item.active
      this.send()
    },
    removeActive (array) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i]
        item.active = false
        if (item.children) {
          this.removeActive(item.children)
        }
      }
    },
    send () {
      this.$emit('getSelect', {
        tab: this.data[this.activeIndex],
        items: this.findActive()
      })
    },
    findActive () {
      this.selectArray = []
      for (let i = 0; i < this.data[this.activeIndex].children.length; i++) {
        const item = this.data[this.activeIndex].children[i]
        if (item.children) {
          item.children.forEach((v) => {
            if (v.active) {
              this.selectArray.push(v)
            }
          })
        } else {
          if (item.active) {
            this.selectArray.push(item)
          }
        }
      }
      return this.selectArray
    }
  }
}
</script>

<style scoped lang="less">
.MapSelector {
    background-color: rgba(0, 19, 27, .7);
    position: absolute;
    bottom: 0;
    height: 38.2%;
    width: 38.2%;
    text-align: center;

    .tab-group {
        height: 40px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        /*flex-direction: row;*/

        .tab-item {
            flex-grow: 1;
            /*background: linear-gradient(to top, rgb(16, 19, 26), rgb(21, 62, 79));*/
            background-image: url("./img/select_default.png");
            line-height: 40px;
            font-size: 24px;
            padding: 0 10px;
            background-size: 100% 100%;
        }

        .active {
            font-weight: bold;
            background-image: url("./img/select_active.png");
        }
    }

    .btn-group {
        height: calc(~"100% - 40px");
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
    }

    .sub-btn-group {
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        border: 1px dashed #1E8DB0;
    }

    .btn {
        align-self: flex-start;
        width: calc(~"100% / 6");
        /*flex-grow: 1;*/
        padding: 10px;
        overflow: hidden;
        font-size: 16px;
        position: relative;

        > .img {
            width: 70%;
            cursor: pointer;
        }

        > .icon {
            position: absolute;
            right: 5px;
            top: 5px;
            width: 40px;
            height: 40px;
        }

        > .more {
            position: absolute;
            right: 5px;
            top: 75px;
            width: 40px;
            height: 40px;
        }
    }

    .rotate-up {
        animation: rotate-up .5s;
    }

    .rotate-down {
        animation: rotate-down .5s;
        transform: rotate(180deg);
    }

    @keyframes rotate-up {
        0% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }

    }
    @keyframes rotate-down {
        0% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(180deg);
        }

    }
}
</style>
