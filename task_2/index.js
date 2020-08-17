/*
В функцию передается массив, состоящий из чисел. Функция должна вернуть новый массив с четными числами.
*/

const getEven = array => {
    return array.filter(number => !(number % 2));
};
console.log(getEven([2, 5, 0, -5, 20, 80, 17, -32]));