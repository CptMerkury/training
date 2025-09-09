/**
 *
 * @param {string} brackets
 * @returns {boolean}
 */
function checkBrackets(brackets) {
    let open = '('
    let close = ')'
    const stack = [];

    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i] === open) {
            stack.push(brackets[i]);
        }
        if (brackets[i] === close) {
            stack.pop();
        }
    }
    return stack.length === 0
}

console.log(checkBrackets("((()))(()())(())()()(())()()()"));
console.log(checkBrackets("((()))"));
console.log(checkBrackets("(((())"));
console.log(checkBrackets("(((())()()()()())))"));