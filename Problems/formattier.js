const codeBlockRegEx = /\${([^}]+)}/g
const wordRegEx = /\D\S\w+/g

/* My solution */
function myFormat(str, obj) {
  if (str.includes('${')) {
    return str.replace(codeBlockRegEx, (_, expr) => {
      if (obj[expr]) {
        return obj[expr]
      } else {
        return Function(`return ${expr.replace(wordRegEx, (sub) => {
          return obj[sub]
        })}`)()
      }
    })
  }
  return str
}

/* Etalon solution */
function format(str, obj) {
  return str.replace(codeBlockRegEx, (_, expr) => {
    return Function(...Object.keys(obj), `return ${expr}`)(...Object.values(obj))
  })
}

console.log(myFormat('Hello ${name}! May age is ${age * 2}.', {name: 'Bob', age: 12})); // 'Hello Bob! My age is 24.'
console.log(format('Hello ${name}! May age is ${age * 2}.', {name: 'Bob', age: 12})); // 'Hello Bob! My age is 24.'

/* Solution after time */

function formatAfterTime(str, obj) {
  return str.replace(codeBlockRegEx, (_, expr) => {
    return Function(...Object.keys(obj), `return ${expr}`)(...Object.values(obj))
  })
}

console.log(formatAfterTime('Hello ${name}! May age is ${age * 2}.', {name: 'Bob', age: 12})); // 'Hello Bob! My age is 24.'
