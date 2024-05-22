console.log(generateBrackets(1)); //'()'
console.log(generateBrackets(2)); // '(()) ()()'
console.log(generateBrackets(3)); // '()()() (())() ()(()) (()()) ((()))
console.log(generateBrackets(0)); // ''

function generate (cur, open, close, n) {
  if (cur.length === 2 * n) {
    return cur;
  }
  if (open < n) {
    return generate(cur + '(', open + 1, close, n)
  }
  if (close < open) {
    return generate(cur + ')', open, close + 1, n)
  }
}
function generateBrackets(n) {
  if (n < 1) return ''
  return generate('', 0, 0, n)
}