<template>
    <div class="GroupYaoPin full">
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
    align-items: stretch;

    > div {
        flex: 1;
        background-image: linear-gradient(270deg, rgba(51, 75, 115, 0.00) 3%, rgba(51, 75, 115, 0.35) 51%, rgba(51, 75, 115, 0.00) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > div {
            flex: 0;
            line-height: 16px;
        }

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
