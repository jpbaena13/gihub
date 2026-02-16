const isOdd = (num) => {
  return num % 2 !== 0;
}

const isEven = (num) => {
  return num % 2 === 0;
}

console.log(isOdd(1)); // true
console.log(isOdd(2)); // false
console.log(isOdd(3)); // true

console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // false
