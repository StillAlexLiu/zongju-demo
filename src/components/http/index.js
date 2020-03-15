import axios from 'axios'

const post = (url, data) => {
  return new Promise(resolve => {
    axios.post(url, data).then(response => {
      resolve(response.data)
    }).catch(response => {
      console.log('请求失败', response)
    })
  })
}
export default {
  post
}
