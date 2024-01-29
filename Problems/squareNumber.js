console.log(squareNumber([-3, 2, 4])); //4,9,16
console.log(squareNumber([-3, 1, 2, 4, 5])); //1,4,9,16,25
console.log(squareNumber([])); //
console.log(squareNumber([1, 2, 3, 4])); // 1,4,9,16
function squareNumber(arr) {
  const result = new Array(arr.length);

  let left = 0;
  let right = arr.length - 1;

  let cur = right;

  while (left <= right) {
    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      result[cur] = Math.abs(Math.pow(arr[right], 2))
      right--;
    } else {
      result[cur] = Math.abs(Math.pow(arr[left], 2))
      left++
    }
    cur--
  }

  return result
}