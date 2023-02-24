// 1. 基本写法
const foo = cb => {
  console.log('任务执行');
  // 调用 cb 结束任务
  cb()
}

module.exports = {
  foo
}

// 默认任务
module.exports.default = cb => {
  console.log('这是默认任务');
  cb()
}