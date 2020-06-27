<template>
    <div class='TablePercent full'>
        <div class="title" style="height: 40px;line-height: 40px;font-size: 16px">{{tableTitle}}</div>
        <table style="height: calc(100% - 40px)" class="full-width">
            <thead>
            <tr>
                <th v-for="(item,index) in titles" :key="index">{{item}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in data" :key="index" :class="index%2===1?'black':''">
                <td v-for="(item2,index2) in item" :key="index2" :style="getStyle(item2,index2)">{{item2}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'TablePercent',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableTitle: {
      type: String,
      default: ''
    },
    titles: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    getStyle (item, index) {
      if (index === 2 || index === 3) {
        const arr = item.split('/')
        const str = arr[0] / arr[1] * 100 + '%'
        return {
          background: 'linear-gradient(90deg,rgba(52,144,251,0.1) 0%,#3584C4 100%)',
          // background: 'linear-gradient(90deg,rgba(52,144,251,0.1) 0%,rgba(74,144,226,0.31) 100%)',
          'background-size': str + ' 100%',
          'background-repeat': 'no-repeat'
        }
      } else {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.TablePercent {
    table {
        border-collapse: collapse;

    }

    td, th {
        font-size: 12px;;
    }

    thead {
        background: linear-gradient(180deg, rgba(44, 132, 191, 0.87) 0%, rgba(65, 147, 222, 1) 100%);

        th {
            height: 31px;
        }
    }

    tbody {
        td {
            height: 31px;
            background-repeat: no-repeat;
        }
    }

    .black {
        /*background-color: #000;*/

        td {
            background-color: #151C2C;
        }
    }
}
</style>
