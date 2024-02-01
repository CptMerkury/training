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

function sumAll(...a) {
  const sumA = a.reduce((acc, i) => acc + i, 0);
  return (...b ) => {
    if (b.length) {
      const sumB = b.reduce((acc, i) => acc + i, 0);
      return sumAll(sumA + sumB)
    }
    return sumA;
  }
}



console.log(carriedSumThree(1, 2, 3));
console.log(carriedSumThree(1, 2)(3));
console.log(carriedSumThree(1)(2, 3));
console.log(carriedSumThree(1)(2)(3));

console.log(sumAll(1,2,3)(5)()) //11
console.log(sumAll(5,5,5)(5)(5)(5)()) //30
console.log(sumAll(4)(6,3)(2,20)()) //35
console.log(sumAll(2,3)(100)(4,0)()) //109
