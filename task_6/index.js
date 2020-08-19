/*
В функцию передается целое положительное число.
Необходимо сделать так, чтобы функция возвращала сумму всех цифр в переданном числе.
*/

const sumDigits = number => {
  let amount = 0;
  while (number !== 0) {
    amount = amount + number % 10;
    number = Math.floor(number / 10);
  }
  return amount;
};
console.log(sumDigits(672)); // 15

// or
const sumDigits_2 = number => {
  return number.toString()
    .split("")
    .reduce((acc, number) => acc + Number(number), 0);
};
console.log(sumDigits_2(672)); // 15