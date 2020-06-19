<template>
    <div class="GroupZhunRu" v-if="data.length>0">
        <container-with-left-border :border="index===1" v-for="(item,index) in data[0].value" :key="index">
            <div class="flex full" @click="$emit('click')">
                <div class="name text-right">{{item.name}}</div>
                <div class="text-center number-font">{{item.value}}</div>
                <div class="unit text-center unit-font">{{item.unit}}</div>
                <div class="unit text-center percent-font">{{item.percent}}</div>
                <div>
                    <Arrow :dir="item.status"/>
                </div>
            </div>
        </container-with-left-border>
    </div>
</template>

<script>
import Arrow from './Arrow'

export default {
  name: 'GroupZhunRuNew',
  components: { Arrow },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    makeRow (text) {
      let rtn = []
      for (let i = 0; i < text.length; i++) {
        rtn += text[i]
        if (i % 2 === 1) {
          rtn += '\n'
        }
      }
      return rtn
    }
  }
}
</script>

<style scoped lang="less">
.GroupZhunRu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    > div {
        flex: 1;
    }

    .flex {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }
}
</style>
