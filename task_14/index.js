const flattenArr1 = (list) => (Array.isArray(list) ? [].concat(...list.map(flattenArr1)) : list);

const flattenArr2 = (list) => {
  let array = list.slice();
  const result = [];
  while (array.length) {
    let currentEl = array.pop();
    Array.isArray(currentEl) ? array.push(...currentEl) : result.push(currentEl);
  }
  return result.reverse();
};

const flattenArr3 = (list) => {
  let result = [];
  list.forEach((item) => {
    if (Array.isArray(item)) {
      result = [...result, ...flattenArr3(item)];
    } else {
      result = [...result, item];
    }
  });
  return result;
};

console.log(flattenArr1([1, 'any [complex] string', null, function () {}, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

console.log(flattenArr2([1, 'any [complex] string', null, function () {}, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

console.log(flattenArr3([1, 'any [complex] string', null, function () {}, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
