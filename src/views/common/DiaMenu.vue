<template>
    <div class='DiaMenu full'>
        <menu-list :data="menu.leftTop" style="position: absolute;top: 89px;left: 83px;" @click="click"/>
        <menu-list :data="menu.leftBottom" style="position: absolute;top: 307px;left: 83px;" @click="click"/>
        <menu-list :data="menu.rightTop" position="left" style="position: absolute;top: 118px;right: 80px;"
                   @click="click"/>
        <menu-list :data="menu.rightBottom" position="left" style="position: absolute;top: 307px;right: 80px;"
                   @click="click"/>
        <CenterMenu class="indexMenu" @click="indexClick"/>
    </div>
</template>

<script>
import MenuList from './MenuList'
import CenterMenu from './CenterMenu'

export default {
  name: 'DiaMenu',
  components: {
    CenterMenu,
    MenuList
  },
  methods: {
    indexClick () {
      this.click({
        name: '首页',
        path: '/index'
      })
    },
    click (item) {
      console.log(item)

      this.$router.push({
        path: item.path,
        query: {
          action: item.action ? item.action : null,
          ts: (new Date()).valueOf()
        }
      })
      this.$emit('close')
    }
  },
  data () {
    return {
      menu: {
        leftTop: [{
          name: '工业品和消费品',
          path: '/Industry',
          active: false,
          disable: false
        }, {
          name: '营商环境',
          path: '/Business',
          active: false,
          disable: false
        }, {
          name: '综合风险',
          path: '/Risk',
          active: false,
          disable: false
        }, {
          name: '食品安全',
          path: '/foodIndex',
          active: false,
          disable: false
        }, {
          name: '舆情热点',
          path: '/Hotspot',
          active: false,
          disable: false
        }, {
          name: '药品安全',
          path: '/DrugSafety',
          active: false,
          disable: false
        }],
        leftBottom: [
          {
            name: '特殊食品安全监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '执法稽查局',
            path: '/LawIndex',
            active: false,
            disable: false
          },
          {
            name: '食品安全抽检监测司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '登记注册局',
            path: '/deptIndex',
            active: false,
            disable: false
          },
          {
            name: '特种设备安全监察局',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '信用监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '计量司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '反垄断局',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '标准技术管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '价监局',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '标准创新管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '网络交易监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '认证监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '广告监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '认可与检测检验监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '质量发展局',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '科技和财务司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '产品质量安全监督管理司',
            path: '/product',
            active: false,
            disable: false
          },
          {
            name: '国家知识产权局',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '食品安全协调司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '国家药品监督管理局',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '食品生产安全监督管理司',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '食品经营安全监督管理司',
            path: '',
            active: false,
            disable: true
          }
        ],
        rightTop: [{
          name: '指挥调度',
          path: '/index',
          action: 'this.dia2=true',
          active: false,
          disable: false
        }, {
          name: '会议会商',
          path: '/index',
          action: 'this.dia1=true',
          active: false,
          disable: false
        }, {
          name: '挂图作战',
          path: '/index',
          action: 'this.dia4=true',
          active: false,
          disable: false
        }],
        rightBottom: [
          {
            name: '北京',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '江西',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '天津',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '广东',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '河北',
            path: '/province',
            active: false,
            disable: false
          },
          {
            name: '广西',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '辽宁',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '海南',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '吉林',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '河南',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '黑龙江',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '湖南',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '山东',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '湖北',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '江苏',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '山西',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '上海',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '内蒙古',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '浙江',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '宁夏',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '安徽',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '青海',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '福建',
            path: '',
            active: false,
            disable: true
          },
          {
            name: '展开更多+',
            path: '',
            active: false,
            disable: true
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.DiaMenu {
    position: absolute;
    /*background-color: rgba(5, 8, 22, 0.7);*/
    background-color: #0F1529;
    background-image: url("./img/椭圆形.png");
    background-size: 1062px 1062px;
    background-position: center;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .indexMenu {
        width: 872px;
        height: 872px;
        font-size: 32px;
        color: #ffffff;
        text-align: center;
    }
}
</style>
