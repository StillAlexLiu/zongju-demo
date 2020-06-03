<template>
    <div class="Fliter">
        <div v-for="(item,index) in data" :key="index">
            <div class="name"> {{item.name}}</div>
            <div class="value">{{item.value}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Fliter',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped lang="less">
.Fliter {
    background-image: url("./img/fliter.png");
    background-size: 96% auto;
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px 0;

    > div {
        height: 54px;
        padding-left: 20px;

        > div {
            float: left;
            width: 50%;
        }
        .name{
            text-indent: 10px;
        }
        .value {
            text-align: center;
            padding-right: 30px;
            line-height: 0;
        }
    }
}
</style>
