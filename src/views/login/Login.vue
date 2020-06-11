<template>
    <div class='Login full'>
        <div class="form">
            请输入平台密码
            <label>
                <input type="password" v-model="password" class="password">
            </label>
            <div class="btn" @click="login">确定</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      password: ''
    }
  },
  mounted () {
    this.Init()
  },
  methods: {
    login () {
      if (this.password !== '') {
        const url = 'http://120.92.86.238:8086/dp/moa/dpuser/query?userName=' + this.password
        this.$http.get(url).then(data => {
          if (data && data !== '') {
            this.success(data)
          } else {
            this.Init()
            alert('密码错误')
          }
        })
      } else {
        this.Init()
        alert('请输入密码')
      }
    },
    success (data) {
      console.log(data)
      sessionStorage.setItem('login', 'true')
      sessionStorage.setItem('timeout', '10,800,000')
      this.$router.push('/index')
    },
    Init () {
      sessionStorage.setItem('login', 'false')
      sessionStorage.setItem('timeout', '10')
    }
  }
}
</script>

<style scoped lang="less">
.Login {
    width: 1920px;
    height: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('./components/img/bg2.jpg');
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;

    .form {
        width: 200px;
        background-color: rgba(255, 255, 255, .3);
        text-align: center;
        border-radius: 10px;
        padding: 10px 20px;
        color: #fff;
        font-size: 22px;
    }

    .btn {
        background-color: #01A5BE;
        padding: 3px 3px;
        width: 60px;
        font-size: 18px;
        margin: 10px auto 0;
        border-radius: 5px;
        cursor: pointer;
    }
}
</style>
