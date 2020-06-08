<template>
    <div class='ContainerDia'>
        <div class="title">
            <div>
                <slot name="left"/>
            </div>
            <div class="text" @click="click">
                {{title}}
            </div>
            <div>
                <slot name="right"/>
            </div>
        </div>
        <div class="body">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContainerDia',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
.ContainerDia {
    background-image: url("./img/大弹出框背景.png");
    background-size: 100% 100%;

    > .title {
        height: 63px;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .text {
            line-height: 63px;
            font-size: 30px;
            background-image: url("./img/编组.png");
            background-size: 340px 63px;
            background-repeat: no-repeat;
            background-position: center;
        }

        > div {
            flex: 1;
        }
    }

    > .body {
        height: calc(100% - 63px);
    }
}
</style>
