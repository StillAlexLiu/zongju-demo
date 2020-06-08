<template>
    <div class='Peoples'>
        <div class="item" v-for="(item,index) in data" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="position">{{item.position}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Peoples',
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
.Peoples {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
        background-image: url("./img/card_huishangjizhi_tongxinlu备份 14@2x.png");
        background-size: 100% 100%;
        width: 110px;
        height: 100px;
        margin-bottom: 15px;
        text-align: center;
        padding-top: 14px;

        .name {
            font-size: 16px;
        }

        .position {
            padding-top: 6px;
            color: #CCCCCC;
            font-size: 12px;
        }
    }
}
</style>
