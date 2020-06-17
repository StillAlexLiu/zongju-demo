<template>
    <div class="charts">
        <v-chart :options='computedOptions' :autoresize='true' theme="screen" @click="this.handler"
                 :initOptions="initOptions"/>
        <!--        {{computedOptions}}-->
    </div>
</template>

<script>
export default {
  name: 'charts',
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      // initOptions: {
      //   // renderer:'svg'
      // },
      defaultOption: {
        title: {
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal'
          }
        },
        grid: {
          // containLabel: true,
          left: 40,
          top: 40,
          right: 20,
          bottom: 20
        }
      }
    }
  },
  computed: {
    initOptions () {
      const str = JSON.stringify(this.computedOptions)
      const reg = RegExp(/rich/)
      if (str.match(reg)) {
        return {}
      } else {
        return { renderer: 'svg' }
      }
    },
    computedOptions () {
      if (!this.options.grid) {
        const assign = {
          grid: this.defaultOption.grid
        }
        Object.assign(this.options, assign)
      }
      if (this.options.title) {
        Object.assign(this.options.title, this.defaultOption.title)
      }
      return this.options
    }
  },
  methods: {
    addLinePoint () {

    },
    handler (...params) {
      this.$emit('click', params)
    }
  }
}
</script>

<style scoped lang="less">
.charts {
    width: 100%;
    height: 100%;
}
</style>
