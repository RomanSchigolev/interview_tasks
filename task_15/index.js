const get = (obj, path, defaultValue) => {
  const arrOfProps = path.split(".");
  let indexOfProps = 0;
  while (obj !== null && indexOfProps < arrOfProps.length) {
    if (obj.hasOwnProperty(arrOfProps[indexOfProps])) {
      obj = obj[arrOfProps[indexOfProps++]];
    } else {
      return obj[arrOfProps[indexOfProps]] || defaultValue;
    }
  }
  return obj;
};

const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b'));   // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e'));   // 'f'
console.log(get(obj, 'a.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value
