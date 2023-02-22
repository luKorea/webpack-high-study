const obj = {
  username: 'korea',
  info: {
    list: [1, 2, 4, 5]
  }
}

const {
  username,
  info: {
    list
  }
} = obj

console.log(username);
console.log(list);

const foo = () => console.log('foo');

foo()