<template>
    <div class="productShizhongPage full" v-if="data.length>0">
       <div class="productShizeBg full">
        <div class="productShizhong full">
            <div class="full " v-for="(item,index) in data" :border="index!==0"
                                      :key="index">
              <div class="dt full-height info">
                  <span class="dc ">{{item.title}}</span>
                  <span class="dc number-font" v-if="item.value">{{item.value}}</span>
                  <span class="dc" v-if="item.unit">{{item.unit}}</span>
              </div>
          </div>
         </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'productShizhong',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
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
.productShizhongPage{
    height: 70px;
    padding: 10px 0;
 .produtTitle{
    text-indent: 10px;
  }
  .productShizeBg{
        padding: 10px 0;

     background:linear-gradient(270deg,rgba(51,75,115,0) 0%,rgba(51,75,115,0.5) 50%,rgba(51,75,115,0) 100%);
  }
}

.productShizhong {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;

    > div {
        flex-grow: 1
    }

    .dt {
        display: table;

        .dr {
            display: table-row;
        }

        .dc {

            display: table-cell;
            vertical-align: middle;
            white-space: pre-line;
        }
    }

    .info {
        > span {
            padding: 0 8px;
        }

        .title {
            text-align: center;
        }
    }
}
</style>
