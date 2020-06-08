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
    padding: 12px 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
        /*height: 54px;*/
        padding-left: 15px;

        > div {
            float: left;
            width: 50%;
        }

        .name {
            text-indent: 1px;
        }

        .value {
            text-align: center;
            padding-right: 20px;
        }
    }
}
</style>
