const fill = (arraySize, value) => {
  const result = [];
  for (let i = 0; i < arraySize; i++) {
    result.push(value);
  }
  return result;
};
console.log(fill(3, "a")); // ["a", "a", "a"]

// or
const fill2 = (arraySize, value) => {
  return new Array(arraySize).fill(value);
};

console.log(fill2(3, "a")); // ["a", "a", "a"]