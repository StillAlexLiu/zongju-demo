<template>
    <div class='PeopleOnTable'>
        <div class="item" v-for="(item,index) in data" :key="index" :style="{left:item.left+'px',top:item.top+'px'}"
             @click="click(index)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'PeopleOnTable',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    click (index) {
      this.$emit('click', index)
    }
  }
}
</script>

<style scoped lang="less">
.PeopleOnTable {
    position: relative;

    .item {
        position: absolute;
        width: 50px;
        height: 50px;
        font-size: 14px;
        border-radius: 50%;
        line-height: 50px;
        cursor: pointer;
        text-align: center;
        background-image: linear-gradient(158deg, #6EBCF9 0%, rgba(109, 188, 249, 0.69) 1%, rgba(61, 159, 235, 0.59) 100%);
    }
}
</style>
