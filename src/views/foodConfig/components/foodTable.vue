<template>
    <div>
      <div class="w-1-2">
         <table class='table table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>地区</th>
                        <th>细则</th>
                        <th>最终平分</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ='(user,index) in data' :key='index'>
                      <td>{{user.name}}</td>
                      <td>{{user.address}}</td>
                      <td class="number-font">{{user.value}}</td>
                    </tr>
                </tbody>
            </table>
      </div>
     <div class="w-1-2">
         <table class='table table-bordered table-striped text-center'>
                <thead>
                    <tr>
                        <th>地区</th>
                        <th>细则</th>
                        <th>最终平分</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ='(user,index) in data1' :key='index'>
                      <td>{{user.name}}</td>
                      <td>{{user.address}}</td>
                      <td class="number-font">{{user.value}}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'foodJgxk',
  components: {
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    data1: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
  table{
    width: 100%;
    thead{
      background-color: #2E3655;
      width: 100%;
      tr{
        td{
          width: 33.3%;
        }
      }
    }
    tbody{
      tr{
        td{
           border-bottom:1px solid #fff!important;
        }
      }
    }
  }
</style>
