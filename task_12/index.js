const without3 = (array, ...args) => {
  return array.filter(item => !args.includes(item));
};
const data = [1, 2, 3];
console.log(without3(data, 1, 2)); // [3]