import axios from 'axios'


console.log(axios);
const username = 'korea'

console.log(username.includes('k'));

const foo = () => {
  return new Promise((resolve, reject) => {
    if (username === 'korea') {
      resolve(username)
    } else reject('用户名有误')
  })
}
foo().then(res => console.log(res)).catch(err => console.log(err))