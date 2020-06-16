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
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 12px 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
        /*height: 54px;*/
        padding-left: 45px;
        display: flex;
        justify-content: space-between;

        > div {
            float: left;
            /*width: 50%;*/
        }

        .name {
            text-indent: 1px;
            width: 50%;
        }

        .value {
            text-align: center;
            padding-right: 35px;
            width: 50%;
            /*flex-basis: 30%;*/
        }
    }
}
</style>
