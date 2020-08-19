/*
В функцию передается массив из целых чисел(list) и число(num).
Необходимо написать функцию, которя вернет булево значение true в случае,
если в переданном массиве есть два числа, сумма которых равна num, иначе false.
*/

const check = (list, num) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 1; j < list.length; j++) {
      if (list[i] + list[j] === num) {
        return true;
      }
    }
  }
  return false;
};

console.log(check([10, 15, 3, 7], 17)); // true
console.log(check([10, 15, 3, 7], 20)); // false