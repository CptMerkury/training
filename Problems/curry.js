function sumThree(a, b, c ) {
  return a + b + c;
}

function curry(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args)
    } else {
      return function(...second) {
        return curried.apply(this, args.concat(second))
      }
    }
  }
}

const carriedSumThree = curry(sumThree);

console.log(carriedSumThree(1, 2, 3));
console.log(carriedSumThree(1, 2)(3));
console.log(carriedSumThree(1)(2, 3));
console.log(carriedSumThree(1)(2)(3));
