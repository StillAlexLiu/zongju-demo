<template>
    <div class='Tree'>
        <div v-for="(item,index) in data" :key="index" class="item"
             :class="root?'':'item-line'"
             :style="{backgroundSize:index===data.length-1?'1px 12px':' 1px 100%'}">
            <div class="line">
                <div class="icon" :style="{backgroundSize: root?'0':'18px 1px'}">
                    <div class="icon-img" @click="itemClick(item)" v-if="item.children&&item.children.length>0">
                        <!--                        {{item.active?'-':'+'}}-->
                        <img :src="item.active?defaultImg:activeImg">
                    </div>
                    <div class="icon-img" @click="itemClick(item)" v-else>
                    </div>
                </div>
                <div class="left-line">
                </div>
            </div>
            <div class="child-line">
                <div class="name" @click="itemClick(item)"
                     :class="item.active&&item.children&&item.children.length?'name-border':''">
                    {{item.name}}
                </div>
                <Tree :data="item.children" class="child" v-if="item.active" :root="false"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tree',
  data () {
    return {
      defaultImg: require('./img/pku_control_menu_tree_shouqi_default@2x.png'),
      activeImg: require('./img/pku_control_menu_tree_zhankai_default@2x.png')
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    root: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    itemClick (item) {
      item.active = !item.active
      console.log(item)
    }
  }
}
</script>

<style scoped lang="less">
.Tree {
    color: #A0D2FF;
    display: block;
    overflow: hidden;
    font-size: 14px;
    user-select: none;

    .item {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: stretch;
    }

    .item-line {
        background-image: repeating-linear-gradient(#5D84B1, #5D84B1);
        background-size: 1px 100%;
        background-repeat: no-repeat;
        background-position: top left;
    }

    .line {
        width: 24px;

        .left-line {
            width: 24px;
        }

        .icon {
            width: 24px;
            height: 24px;
            background-image: repeating-linear-gradient(#5D84B1, #5D84B1);
            background-size: 18px 1px;
            background-repeat: no-repeat;
            background-position: left center;
            position: relative;

            .icon-img {
                width: 5px;
                height: 5px;
                border-radius: 6px;
                background-color: #5D84B1;
                text-align: center;
                margin-left: -12px;
                position: absolute;
                right: 3px;
                top: 10px;
                cursor: pointer;

                > img {
                    width: 14px;
                    height: 14px;
                    vertical-align: top;
                    margin-top: -5px;
                }
            }
        }

    }

    .child-line {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: calc(100% - 24px);

        .name {
            text-indent: 8px;
            line-height: 24px;
            height: 24px;
            cursor: pointer;

        }

        .child {
        }
    }

    .name-border {
        background-image: repeating-linear-gradient(#5D84B1, #5D84B1);
        background-size: 1px 50%;
        background-repeat: no-repeat;
        background-position: bottom left;
    }

    .active {
        background-image: url("./img/pku_control_menu_tree_shouqi_default@2x.png");
    }

    .active {
        background-image: url("./img/pku_control_menu_tree_zhankai_default@2x.png");
    }
}
</style>
