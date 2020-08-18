/*
В функцию передается массив, состоящий из целых чисел.
Функция должна вернуть сумму всех нечетных чисел больше нуля.
*/

const calculateList = list => {
  return list.reduce((acc, number) => number > 0 && number % 2 ? acc + number : acc, 0);
};
console.log(calculateList([5, 17, -5, 0, -2, -32, 16, 88])); // 22

// or
const calculateList_2 = list => {
  let sum = 0;
  for (const number of list) {
    if (number > 0 && number % 2) {
      sum = sum + number;
    }
  }
  return sum;
};
console.log(calculateList_2([5, 17, -5, 0, -2, -32, 16, 88])); // 22
