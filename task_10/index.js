const reverse = array => {
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverse(data)); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

// or
const reverse2 = array => array.map((item, index, listing) => listing[listing.length - 1 - index]);
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverse2(data2)); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
