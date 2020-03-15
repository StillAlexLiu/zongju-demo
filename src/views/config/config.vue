<template>
    <div class="config">
        <!--        <tree :data="options"/>-->
        <Tree :data="options" :render="renderContent" class="demo-tree-render" :expand="true"></Tree>
        <Modal
                v-model="modal1"
                title="新增"
                :closable="false"
                :mask-closable="false"
                @on-ok="ok"
                @on-cancel="cancel">
            <Form ref="appendForm" :model="appendForm" :rules="appendRule">
                {{appendForm}}
                <FormItem prop="type" label="配置类型">
                    <Select v-model="appendForm.type" placeholder="配置类型" prefix="ios-person-outline">
                        <Option value="page">页面</Option>
                        <Option value="component">模块</Option>
                        <Option value="list">列表</Option>
                        <Option value="kv">键值对</Option>
                    </Select>
                </FormItem>
                <FormItem prop="name" label="标题名称/键/key">
                    <i-input type="text" v-model="appendForm.name" placeholder="标题名称/键/key">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem prop="value" label="值">
                    <i-input type="text" v-model="appendForm.value" placeholder="值">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem prop="component" label="组件名称，多用于开发">
                    <i-input type="text" v-model="appendForm.component" placeholder="组件名称，多用于开发">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                <FormItem prop="comment" label="描述，说明">
                    <i-input type="text" v-model="appendForm.comment" placeholder="描述，说明">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
            </Form>
        </Modal>
        <Modal
                v-model="modal2"
                title="确定删除吗？"
                @on-ok="okDelete"
                @on-cancel="cancelDelete">
            <p>该操作会删除该节点和节点下的<span style="color: red;font-weight: bold">所有</span>子节点,且<span
                    style="color: red;font-weight: bold">不可恢复</span></p>
        </Modal>
    </div>
</template>

<script>
// import Tree from './components/tree'

export default {
  name: 'config',
  data () {
    return {
      options: [],
      modal1: false,
      modal2: false,
      buttonProps: {
        type: 'default',
        size: 'small'
      },
      appendForm: {
        name: '',
        value: '',
        type: '',
        component: '',
        comment: '',
        pid: '',
        id: ''
      },
      deleteForm: {
        id: ''
      },
      appendRule: {
        name: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        value: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        type: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        component: [
          {
            required: true,
            trigger: 'blur'
          }
        ],
        comment: [
          {
            required: true,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {
    this.getConfig()
  },
  methods: {
    getConfig () {
      this.$http.post('/screenNode/getTree', {}).then(value => {
        this.options = value
      })
    },
    renderContent (h, { root, node, data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.name)
        ]),
        data.pid === 'root' ? h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-add'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => {
                this.append(data)
              }
            }
          })
        ]) : h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-add'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => {
                this.append(data)
              }
            }
          }),
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-remove'
            }),
            style: {
              marginRight: '8px'
            },
            on: {
              click: () => {
                this.remove(root, node, data)
              }
            }
          }),
          h('Button', {
            props: Object.assign({}, this.buttonProps, {
              icon: 'ios-create-outline'
            }),
            on: {
              click: () => {
                this.edit(root, node, data)
              }
            }
          })
        ])
      ])
    },
    append (data) {
      console.log(data)
      this.appendForm.pid = data.id
      this.modal1 = true
    },
    remove (root, node, data) {
      console.log(arguments)
      this.deleteForm.id = data.id
      this.modal2 = true
    },
    edit (root, node, data) {
      console.log(data)
      this.appendForm = JSON.parse(JSON.stringify(data))
      this.modal1 = true
    },
    ok () {
      this.add()
    },
    cancel () {
      console.log('取消')
      this.clearAppendForm()
    },
    clearAppendForm () {
      this.appendForm.name = ''
      this.appendForm.value = ''
      this.appendForm.type = ''
      this.appendForm.component = ''
      this.appendForm.comment = ''
      this.appendForm.pid = ''
      this.appendForm.id = ''
    },
    add () {
      this.$http.post('/screenNode/addAndUpdate', this.appendForm).then(value => {
        this.modal1 = false
        this.clearAppendForm()
        this.getConfig()
      })
    },
    okDelete () {
      this.deleteItemAndChildren()
    },
    cancelDelete () {
    },
    deleteItemAndChildren () {
      this.$http.post('/screenNode/delete', this.deleteForm).then(value => {
        this.getConfig()
      })
    }
  }
}
</script>

<style scoped lang="less">
.config {

    .demo-tree-render {
        background-color: #ffffff;
        width: 500px;
        border: 1px solid #eee;
    }
}
</style>
<style lang="less">
.config {
    .ivu-tree-title {
        width: calc(100% - 20px)
    }
}
</style>
