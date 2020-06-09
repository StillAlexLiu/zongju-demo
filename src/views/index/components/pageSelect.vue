<template>
    <div name="list" tag="div" class="pageSelect">
        <div v-for="(item,index) in data" :key="index" @click="toggle(index)"
             :class="selectIndex===index&&show?'active':''">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'pageSelect',
  data () {
    return {
      selectIndex: 0,
      show: false,
      list: [{
        name: '国家总局',
        value: '/index'
      }, {
        name: '河北局',
        value: '/province'
      }, {
        name: '食品',
        value: '/foodIndex'
      }, {
        name: '计量',
        value: '/metering'
      }, {
        name: '注册登记',
        value: '/deptIndex'
      }, {
        name: '信用监管',
        value: '/superviseIndex'
      }, {
        name: '产品质量',
        value: '/productIndex'
      }, {
        name: '专题-执法',
        value: '/LawIndex'
      }, {
        name: '会商',
        value: '/ConsultationIndex'
      }],
      data: []
    }
  },
  mounted () {
    this.init(this.selectIndex)
  },
  methods: {
    init (index) {
      this.data = []
      this.data.push(this.list[index])
    },
    toggle (index) {
      if (this.data.length === 1) {
        this.show = true
        this.data = []
        for (let i = 0; i < this.list.length; i++) {
          this.data.push(this.list[i])
        }
      } else {
        this.show = false
        console.log(index)
        this.selectIndex = index
        this.pageTo(index)
        this.init(index)
      }
    },
    pageTo (index) {
      this.$router.push({
        path: this.list[index].value
      })
    }
  }
}
</script>

<style scoped lang="less">
.pageSelect {
    height: 40px;
    display: flex;
    width: 124px;
    flex-direction: column;
    z-index: 999;
    text-align: center;
    color: #fff;

    > div {
        height: 30px;
        margin-bottom: 10px;
        background-image: url("./img/select-default.png");
        background-size: 124px 20px;
        background-position: bottom;
        background-repeat: no-repeat;
        cursor: pointer;
        font-size: 18px;
        line-height: 30px;

        &:hover {
            background-image: url("./img/select-active.png");
        }
    }

    .list-item {
    }

    .list-enter-active, .list-leave-active {
        transition: all .8s;
    }

    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(-240px);
    }

    .active {
        font-weight: bold;
    }
}
</style>
