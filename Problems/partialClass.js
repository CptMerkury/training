class Parent {
  foo() {
    console.log('It works!');
  }
}

class Example extends Parent {
}

/* Etalon solution */
// function partial(ex, mixin) {
//   Object.setPrototypeOf(mixin, Object.getPrototypeOf(ex.prototype))
//   Object.defineProperties(ex.prototype, Object.getOwnPropertyDescriptors(mixin))
// }

/* Solution after time */
function partial(ex, mixin) {
  Object.setPrototypeOf(mixin, Object.getPrototypeOf(ex.prototype))
  Object.defineProperties(ex.prototype, Object.getOwnPropertyDescriptors(mixin))
}

partial(Example, {
  foo() {
    super.foo();
    console.log('Yeaaah');
  },

  get bar() {
    return Math.random();
  }
});

const example = new Example();

example.foo(); // It works! Yeaaah

console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число
console.log(example.bar); // Случайное число