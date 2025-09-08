function generateBrackets(n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    if (open < n) {
      generate(current + "(", open + 1, close);
    }
    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }

  generate("", 0, 0);
  return result;
}

console.log(generateBrackets(0)); // [""]
console.log(generateBrackets(1)); // ["()"]
console.log(generateBrackets(2)); // ["(())", "()()"]
console.log(generateBrackets(3)); // ["((()))","(()())","(())()","()(())","()()()"]