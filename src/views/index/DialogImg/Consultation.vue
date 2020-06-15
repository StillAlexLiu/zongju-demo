<template>
    <div class="Consultation">
        <ContainerDia title="会议日程" @click="close" class="full">
            <div slot="left" style="padding-left: 24px;padding-top: 24px">
                <ButtonGroup :data="btnGroup" v-model="selectedIndex"/>
            </div>
            <div style="padding-top: 120px" v-if="selectedIndex===0">
                <img-block :data="img"/>
            </div>
            <div v-if="selectedIndex===1" style="padding: 0 10px 5px 10px" class="full">
                <div class="w-1-4 full-height">
                    <container title="通讯录" class="full">
                        <div class=" w-2-5 full-height" style="overflow-y: scroll">
                            <Tree :data="tree" style="display: block"/>
                        </div>
                        <div class="full-height w-3-5">
                            <Peoples :data="peopleList"/>
                        </div>
                    </container>
                </div>
                <div class="w-2-4 full-height">
                    <div class="h-2-3 w-1-1">
                        <map-and-video/>
                    </div>
                    <container class="h-1-3 w-1-2" title="会议室" style="position: relative">
                        <div style="position: absolute;width: 310px;height: 163px;right: 15px;bottom: 15px">
                            <img-block :data="imgCenter1"/>
                        </div>
                        <div>
                            <PeopleOnTable :data="people" class="full" @click="changeIndex"/>
                        </div>
                    </container>
                    <container class="h-1-3 w-1-2" title="名片" style="position: relative">
                        <div class="full" style="position: absolute">
                            <img-block :data="imgCenter2"/>
                        </div>
                        <Card class="full" :data="people[peopleIndex]"/>
                    </container>
                </div>
                <div class="w-1-4 full-height">
                    <container class="h-2-3" title="接入">
                        <VideoGroup class="full" :data="videos"/>
                    </container>
                    <container class="h-1-3" title="会议沟通">
                        <img-block :data="imgRight2"/>
                    </container>
                </div>
            </div>
        </ContainerDia>
    </div>
</template>

<script>
import ImgBlock from '../../common/ImgBlock'
import ButtonGroup from './components/ButtonGroup'
import PeopleOnTable from './components/PeopleOnTable'
import Card from './components/Card'
import VideoGroup from '../components/VideoGroup'
import Peoples from './components/Peoples'
import Mock from 'mockjs'
import MapAndVideo from './components/MapAndVideo'

export default {
  name: 'MapDia1',
  components: {
    MapAndVideo,
    Peoples,
    VideoGroup,
    Card,
    PeopleOnTable,
    ButtonGroup,
    ImgBlock
  },
  data () {
    return {
      selectedIndex: 1,
      peopleIndex: 0,
      btnGroup: [{
        name: '会议日程',
        value: 0
      }, {
        name: '会议启动',
        value: 1
      }],
      img: {
        img: require('./../BlockImg/编组 4.png'),
        width: 1694,
        height: 568
      },
      imgCenter1: {
        img: require('./../BlockImg/编组 5@2x.png'),
        width: 620 / 2,
        height: 326 / 2
      },
      imgCenter2: {
        img: require('./../BlockImg/编组 15@2x.png'),
        width: 828 / 2,
        height: 440 / 2
      },
      imgRight2: {
        img: require('./../BlockImg/编组 3@2x.png'),
        width: 764 / 2,
        height: 472 / 2
      },
      peopleList: [{
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '副局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '处长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '处长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '处长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '处长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '处长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '科长',
        online: true
      }],
      people: [
        {
          name: '房新华',
          org: '登记注册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/pic/1.jpg'),
          left: 35,
          top: 75
        },
        {
          name: '王晓文',
          org: '登记注册局',
          position: '处长，党组成员',
          img: require('./../BlockImg/pic/2.jpg'),
          left: 65,
          top: 20
        },
        {
          name: '马占福',
          org: '登记注册局',
          position: '处长',
          img: require('./../BlockImg/pic/3.jpg'),
          left: 136,
          top: 10
        },
        {
          name: '白枫桐',
          org: '登记注册局',
          position: '科长',
          img: require('./../BlockImg/pic/4.jpg'),
          left: 214,
          top: 10
        },
        {
          name: '张福成',
          org: '登记注册局',
          position: '科长',
          img: require('./../BlockImg/pic/5.jpg'),
          left: 285,
          top: 20
        },
        {
          name: '丁文通',
          org: '执法稽查司',
          position: '局长，党组成员',
          img: require('./../BlockImg/pic/6.jpg'),
          left: 315,
          top: 75
        },
        {
          name: '覃承波',
          org: '登记注册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/pic/7.jpg'),
          left: 65,
          top: 140
        },
        {
          name: '谢奎',
          org: '反垄断局',
          position: '局长',
          img: require('./../BlockImg/pic/8.jpg'),
          left: 136,
          top: 150
        },
        {
          name: '程文平',
          org: '登记注册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/pic/9.jpg'),
          left: 214,
          top: 150
        },
        {
          name: '......',
          org: '',
          position: '',
          img: '',
          left: 285,
          top: 140
        }
      ],
      videos: [
        {
          img: require('./../BlockImg/VideoGroup/mhzhjg_items_jgquanjing_jiankong_video@2x.png')
        },
        {
          img: require('./../BlockImg/VideoGroup/mhzhjg_items_jgquanjing_jiankong_video@2x.png')
        },
        {
          img: require('./../BlockImg/VideoGroup/mhzhjg_items_jgquanjing_jiankong_video@2x.png')
        },
        {
          img: require('./../BlockImg/VideoGroup/mhzhjg_items_jgquanjing_jiankong_video@2x.png')
        },
        {
          img: require('./../BlockImg/VideoGroup/mhzhjg_items_jgquanjing_jiankong_video@2x.png')
        },
        {
          img: require('./../BlockImg/VideoGroup/mhzhjg_items_jgquanjing_jiankong_video@2x.png')
        }
      ],
      tree: [{
        // name: '',
        // active: true,
        // children: [{
        name: '总局',
        active: true,
        children: [{
          name: '总局领导',
          active: false,
          children: [{
            name: '领导1',
            active: false,
            children: []
          }, {
            name: '领导2',
            active: false,
            children: []
          }]
        }, {
          name: '总局机关',
          active: true,
          children: [
            {
              name: '办公厅',
              active: false,
              children: []
            },
            {
              name: '综合规划司',
              active: false,
              children: []
            },
            {
              name: '法规司',
              active: false,
              children: []
            },
            {
              name: '执法稽查局',
              active: false,
              children: []
            },
            {
              name: '登记注册局（小微企业个体工商户专业市场党建工作办公室）',
              active: false,
              children: []
            },
            {
              name: '信用监督管理司',
              active: false,
              children: []
            },
            {
              name: '反垄断局',
              active: false,
              children: []
            },
            {
              name: '价格监督检查和反不正当竞争局（规范直销与打击传销办公室）',
              active: false,
              children: []
            },
            {
              name: '网络交易监督管理司',
              active: false,
              children: []
            },
            {
              name: '广告监督管理司',
              active: false,
              children: []
            },
            {
              name: '质量发展局',
              active: false,
              children: []
            },
            {
              name: '产品质量安全监督管理司',
              active: false,
              children: []
            },
            {
              name: '食品安全协调司',
              active: false,
              children: []
            },
            {
              name: '食品生产安全监督管理司',
              active: false,
              children: []
            },
            {
              name: '食品经营安全监督管理司',
              active: false,
              children: []
            },
            {
              name: '特殊食品安全监督管理司',
              active: false,
              children: []
            },
            {
              name: '食品安全抽检监测司',
              active: false,
              children: []
            },
            {
              name: '特种设备安全监察局',
              active: false,
              children: []
            },
            {
              name: '计量司',
              active: false,
              children: []
            },
            {
              name: '标准技术管理司',
              active: false,
              children: []
            },
            {
              name: '标准创新管理司',
              active: false,
              children: []
            },
            {
              name: '认证监督管理司',
              active: false,
              children: []
            },
            {
              name: '认可与检验检测监督管理司',
              active: false,
              children: []
            },
            {
              name: '新闻宣传司',
              active: false,
              children: []
            },
            {
              name: '科技和财务司',
              active: false,
              children: []
            },
            {
              name: '人事司',
              active: false,
              children: []
            },
            {
              name: '国际合作司（港澳台办公室）',
              active: false,
              children: []
            },
            {
              name: '机关党委',
              active: false,
              children: []
            },
            {
              name: '离退休干部办公室',
              active: false,
              children: []
            }
          ]
        }, {
          name: '直属单位',
          active: true,
          children: [
            {
              name: '机关服务中心',
              active: false,
              children: []
            },
            {
              name: '信息中心',
              active: false,
              children: []
            },
            {
              name: '发展研究中心',
              active: false,
              children: []
            },
            {
              name: '行政学院',
              active: false,
              children: []
            },
            {
              name: '专业技术人才开发中心',
              active: false,
              children: []
            },
            {
              name: '宣传中心',
              active: false,
              children: []
            },
            {
              name: '中国纤维质量监测中心',
              active: false,
              children: []
            },
            {
              name: '食品审评中心（中保委）',
              active: false,
              children: []
            },
            {
              name: '中国计量科学研究院',
              active: false,
              children: []
            },
            {
              name: '中国标准化研究院',
              active: false,
              children: []
            },
            {
              name: '中国检验检疫科学研究院',
              active: false,
              children: []
            },
            {
              name: '中国特种设备检测研究院',
              active: false,
              children: []
            },
            {
              name: '中国合格评定国家认可中心',
              active: false,
              children: []
            },
            {
              name: '中国网络安全审查',
              active: false,
              children: []
            },
            {
              name: '技术与认证中心',
              active: false,
              children: []
            },
            {
              name: '全国组织机构统一社会',
              active: false,
              children: []
            },
            {
              name: '信用代码数据服务中心',
              active: false,
              children: []
            },
            {
              name: '中国物品编码中心',
              active: false,
              children: []
            },
            {
              name: '认证认可技术研究中心',
              active: false,
              children: []
            },
            {
              name: '国家标准技术审评中心',
              active: false,
              children: []
            },
            {
              name: '中国市场监管报社',
              active: false,
              children: []
            },
            {
              name: '中国质量报刊社',
              active: false,
              children: []
            },
            {
              name: '中国消费者报社',
              active: false,
              children: []
            },
            {
              name: '中国工商出版社有限公司',
              active: false,
              children: []
            },
            {
              name: '中国质量标准出版传媒有限公司',
              active: false,
              children: []
            },
            {
              name: '中国市场监督管理学会',
              active: false,
              children: []
            },
            {
              name: '中国计量测试学会',
              active: false,
              children: []
            },
            {
              name: '中国检验检测学会',
              active: false,
              children: []
            },
            {
              name: '中国个体劳动者协会',
              active: false,
              children: []
            },
            {
              name: '中国消费者协会',
              active: false,
              children: []
            },
            {
              name: '中国质量万里行促进会',
              active: false,
              children: []
            },
            {
              name: '中国品牌建设促进会',
              active: false,
              children: []
            },
            {
              name: '中国消费品质量安全促进会',
              active: false,
              children: []
            },
            {
              name: '中国出入境检验检疫协会',
              active: false,
              children: []
            },
            {
              name: '中国认证认可协会',
              active: false,
              children: []
            },
            {
              name: '中国质量检验协会',
              active: false,
              children: []
            },
            {
              name: '中国计量协会',
              active: false,
              children: []
            },
            {
              name: '中国标准化协会',
              active: false,
              children: []
            },
            {
              name: '中国防伪行业协会',
              active: false,
              children: []
            },
            {
              name: '中国设备监理协会',
              active: false,
              children: []
            },
            {
              name: '中国特种设备安全与节能促进会',
              active: false,
              children: []
            }
          ]
        }]
      }, {
        name: '地方局',
        active: true,
        children: [
          {
            name: '北京',
            active: false,
            children: []
          },
          {
            name: '上海',
            active: false,
            children: []
          },
          {
            name: '深圳',
            active: false,
            children: []
          },
          {
            name: '杭州',
            active: false,
            children: []
          },
          {
            name: '深圳',
            active: false,
            children: []
          },
          {
            name: '成都',
            active: false,
            children: []
          },
          {
            name: '海口',
            active: false,
            children: []
          }
        ]
      }]
      // }]

    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    changeIndex (index) {
      this.peopleIndex = index
    }
  }
}
</script>

<style scoped lang="less">
.Consultation {
    position: relative;

    .full {
        /*background-image: url("./dia1.png");*/
        background-size: 100% 100%;
    }

    .can {
        background: #6DD400;
        width: 1786px;
        height: 922px;
    }

    .close {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
    }
}
</style>
