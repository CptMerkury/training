console.log(longestVector([]));//0;
console.log(longestVector([0, 0, 0, 0]));//0;
console.log(longestVector([1, 1, 1, 1]));//4;
console.log(longestVector([1, 0, 1, 1]));//2;
console.log(longestVector([1, 0, 1, 0]));//1;
console.log(longestVector([1, 1, 1, 0]));//3;

function longestVector(vector) {
  if (!vector.length) {
    return 0;
  }

  let max = 0;
  let count = 0;

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === 1) {
      count++;
      max = Math.max(max, count)
    } else {
      count = 0;
    }
  }

  return max
}
