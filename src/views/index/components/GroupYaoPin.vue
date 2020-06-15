<template>
    <div class="GroupYaoPin">
        <div v-for="(item,index) in data" :key="index" class="text-center  item">
            <div class="">{{item.name}}</div>
            <div>
                <span class="number-font ">{{item.value}}</span>
                <span class="unit ">{{item.unit}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupYaoPin',
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
.GroupYaoPin {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
        flex: 1;
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);

        .number-font {
            font-size: 18px;
        }

        .unit {
            font-size: 12px;
        }

        /*> span {*/
        /*    padding: 0 4px;*/
        /*}*/
    }
}
</style>
