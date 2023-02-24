const {
  series,
  parallel
} = require("gulp");

const foo1 = cb => {
  setTimeout(() => {
    console.log('foo1 run');
    cb()
  }, 2000)
}

const foo2 = cb => {
  setTimeout(() => {
    console.log('foo2 run');
    cb()
  }, 1000)
}
const foo3 = cb => {
  setTimeout(() => {
    console.log('foo3 run');
    cb()
  }, 3000)
}

// 串行任务, 依次执行
const seriesFoo = series(foo1, foo2, foo3)
// 并行任务
const parallelFoo = parallel(foo1, foo2, foo3)

module.exports = {
  seriesFoo,
  parallelFoo
}