<template>
    <div class='ConsultationIndex' style="padding-top: 120px">
        <Tree :data="tree" style="width: 300px"/>
    </div>
</template>

<script>

export default {
  name: 'ConsultationIndex',
  data () {
    return {
      // tree: [{
      //   name: '总局',
      //   active: false,
      //   children: [{
      //     name: '总局领导',
      //     active: false,
      //     children: [{
      //       name: '领导1',
      //       active: false,
      //       children: []
      //     }, {
      //       name: '领导2',
      //       active: false,
      //       children: []
      //     }]
      //   }, {
      //     name: '总局机关',
      //     active: false,
      //     children: []
      //   }]
      // }, {
      //   name: '地方局',
      //   active: false,
      //   children: [{
      //     name: '领导1',
      //     active: false,
      //     children: []
      //   }, {
      //     name: '领导2',
      //     active: false,
      //     children: []
      //   }]
      // }]
      // tree: [{
      //   name: '',
      //   active: true,
      //   children: [{
      //     name: '总局',
      //     active: true,
      //     children: [{
      //       name: '总局领导',
      //       active: true,
      //       children: [{
      //         name: '领导1',
      //         active: false,
      //         children: []
      //       }, {
      //         name: '领导2',
      //         active: false,
      //         children: []
      //       }]
      //     }, {
      //       name: '总局机关',
      //       active: false,
      //       children: [{
      //         name: '领导1',
      //         active: false,
      //         children: []
      //       }, {
      //         name: '领导2',
      //         active: false,
      //         children: []
      //       }]
      //     }]
      //   }, {
      //     name: '地方局',
      //     active: false,
      //     children: [{
      //       name: '领导1',
      //       active: false,
      //       children: []
      //     }, {
      //       name: '领导2',
      //       active: false,
      //       children: []
      //     }]
      //   }]
      // }]
      tree: [{
        name: '总局',
        active: false
      }, {
        name: '地方局',
        active: false
      }]
    }
  }
}
</script>

<style scoped lang="less">
.ConsultationIndex {
}
</style>
