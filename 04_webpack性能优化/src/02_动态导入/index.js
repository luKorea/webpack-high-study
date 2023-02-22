// 代码按需按需加载模块
// import './router/home'
// import './router/category'

const btn1 = document.createElement('button')
btn1.textContent = '首页'
const btn2 = document.createElement('button')
btn2.textContent = '分类'


btn1.onclick = function () {
  // 魔法注释
  import( /* webpackChunkName: 'home' */ './router/home')
}
btn2.onclick = function () {
  import( /* webpackChunkName: 'category' */ './router/category')
}


document.body.append(btn1)
document.body.append(btn2)