const unique1 = array => [...new Set(array)];
const data1 = [1, 2, 1, 2, 3, 4, 5, 6, 5, 3, 4, 1, 9, 10, 2, 3, 5];
console.log(unique1(data1)); // [1, 2, 3,  4, 5, 6, 9, 10]

// or
const unique2 = array => array.filter((item, index) => array.indexOf(item) === index);
const data2 = [1, 9, 2, 3, 1, 2, 3, 4, 5, 1];
console.log(unique2(data2)); // [ 1, 9, 2, 3, 4, 5 ]

// or
const unique3 = array => array.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []);
const data3 = [1, 2, 3, 1, 2, 3, 4, 5, 2];
console.log(unique3(data3)); // [ 1, 2, 3, 4, 5 ]
