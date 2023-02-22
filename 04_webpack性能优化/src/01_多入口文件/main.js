import axios from 'axios'


// 代码按需按需加载模块
import '../router/home'
import '../router/category'

console.log(axios);
const username = 'main'

console.log(username.includes('k'));

const foo = () => {
  return new Promise((resolve, reject) => {
    if (username === 'main') {
      resolve(username)
    } else reject('main')
  })
}
foo().then(res => console.log(res)).catch(err => console.log(err))