const obj = {};

function setByPath(target, path, value) {
  const keys = path.split('.')

  for (let [i, key] of keys.entries()) {
    if (i === keys.length - 1) {
      target[key] = value;
    } else {
      target[key] = target[key] || {}
      target = target[key]
    }
  }
}

setByPath(obj, 'foo.bar', 1);
setByPath(obj, 'foo.bla', 2);
setByPath(obj, 'foo.baz', 1);
setByPath(obj, 'foo.bad', 2);
setByPath(obj, 'foo.val.baz', 4);

console.log(obj);