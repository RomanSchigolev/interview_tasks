const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

const rotate90Deg = list => {
  const listLength = list.length;
  // Transpose matrix
  for (let i = 0; i < listLength; i++) {
    for (let j = i; j < listLength; j++) {
      const temp = list[i][j];
      list[i][j] = list[j][i];
      list[j][i] = temp;
    }
  }
  // Flips the first and last element
  for (let i = 0; i < listLength; i++) {
    for (let j = 0; j < Math.floor(listLength / 2); j++) {
      const temp = list[i][j];
      list[i][j] = list[i][listLength - 1 - j];
      list[i][listLength - 1 - j] = temp;
    }
  }
  return list;
};
console.log(rotate90Deg(arr2));

