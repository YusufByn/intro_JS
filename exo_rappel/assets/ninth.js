// 9   exists(arr, value)  Retourne true si value existe dans le tableau, sinon false.

const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, "grapefruit")); // false
console.log(checkAvailability(fruits, "banana")); // true