const countingNumbers1 = (number) => Math.floor(Math.log10(number)) + 1;

console.log(countingNumbers1(1)); // 1
console.log(countingNumbers1(10)); // 2
console.log(countingNumbers1(100)); // 3

const countingNumbers2 = (number) => String(number).split('').length;

console.log(countingNumbers2(1)); // 1
console.log(countingNumbers2(10)); // 2
console.log(countingNumbers2(100)); // 3
