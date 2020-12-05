const flatten1 = list => Array.isArray(list) ? [].concat(...list.map(flatten1)) : list

const flatten2 = list => {
  let array = list.slice();
  const result = [];
  while (array.length) {
    let currentEl = array.pop();
    Array.isArray(currentEl) ? array.push(...currentEl) : result.push(currentEl);
  }
  return result.reverse();
};

console.log(flatten1([1, 'any [complex] string', null, function () { }, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

console.log(flatten2([1, 'any [complex] string', null, function () { }, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
