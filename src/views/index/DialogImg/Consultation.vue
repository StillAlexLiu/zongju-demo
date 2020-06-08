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
                        <Tree class="full-height w-2-5" :data="tree"/>
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
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }, {
        name: Mock.mock('@cname'),
        position: '局长，党组成员',
        online: true
      }],
      people: [
        {
          name: '房新华',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 35,
          top: 75
        },
        {
          name: '王晓文',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 65,
          top: 20
        },
        {
          name: '马占福',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 136,
          top: 10
        },
        {
          name: '白枫桐',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 214,
          top: 10
        },
        {
          name: '张福成',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 285,
          top: 20
        },
        {
          name: '丁文通',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 315,
          top: 75
        },
        {
          name: '覃承波',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 65,
          top: 140
        },
        {
          name: '谢奎',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
          left: 136,
          top: 150
        },
        {
          name: '程文平',
          org: '登记局册局',
          position: '局长，党组成员',
          img: require('./../BlockImg/mhzhjg_img_diaoduzhihui_renyuanxinxi_photo_s@2x.png'),
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
        name: '',
        active: true,
        children: [{
          name: '总局',
          active: true,
          children: [{
            name: '总局领导',
            active: true,
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
          }]
        }, {
          name: '地方局',
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
        }]
      }]
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
