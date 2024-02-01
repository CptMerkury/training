function fibonacci(num) {
  const res = new Array(num).fill(0);

  let prev = 0;
  let next = 1;

  for (let i = 0; i < num; i++) {
    let temp = next;
    next = next + prev;
    prev = temp;
    res[i] = prev
  }

  return res
}

console.log(fibonacci(10)) //[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibonacci(100))
