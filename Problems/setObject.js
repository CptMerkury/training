const obj = {};

function setByPath(obj, path, value) {

}

setByPath(obj, 'foo.bar', 1);
setByPath(obj, 'foo.bla', 2);

console.log(obj); // {foo: {bar: 1, bla: 2}}