/*
Реализовать функцию сортировки. Мы должны пройтись по всем элементам с начала и удалить все элементы, которые стоят не по порядку.
По итогу небходимо получить отсортированный массив по возрастанию относительно первого элемента.
*/

// возвращаю новый массив
const sortingList = list => {
  let currentEl = list[0];
  const sortedList = [];
  list.forEach(item => {
    if (currentEl <= item) {
      sortedList.push(item);
      currentEl = item;
    }
  });
  return sortedList;
};
console.log(sortingList([10, 1, 5, 18, 18, 2, -7, 19, 20, 109])); // [10, 18, 18, 19, 20, 109]

// делаю манипуляции с тем же массивом
const sortingList = list => {
  for (let index = 1; index < list.length; index++) {
    if (list[index] < list[index - 1]) {
      list.splice(index, 1);
      index--;
    }
  }
  return list;
};
console.log(sortingList([10, 1, 5, 18, 18, 2, -7, 19, 20, 109])); // [10, 18, 18, 19, 20, 109]