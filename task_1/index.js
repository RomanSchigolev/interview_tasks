/* Написать функцию, в которую передается целое число.
Функция должна вывести горку как показано в примере с тем числом линий, которое было передано в функцию.
Пример: printHill(5)
        #
        ##
        ###
        ####
        #####
*/

const printHill = number => {
    for(let i = 1; i <= number; i++) {
        console.log("#".repeat(i))
    }
};
console.log(printHill(5));

// or
let counter = "";
const printHill = number => {
  for (let i = 1; i <= number; i++) {
    for (let j = 0; j < i; j++) {
      counter = counter + "#";
    }
    counter = counter + "\n";
  }
  return counter.slice(0, -1);
};
console.log(printHill(5));
