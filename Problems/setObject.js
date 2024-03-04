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
setByPath(obj, 'baz.boo', 1);
setByPath(obj, 'baz.bad', 2);
setByPath(obj, 'foo.val', 4);

// console.log(obj);

const prop = {
  f1: '123',
  f2: '456',
}

const dict = {
  text: 'f6.text',
  local: 'f6.local.test.p',
  test: 'f5',
  address: 'f4'
}

const data = {
  f4: 'test',
  f5: 'test2',
  f6: {
    text: 'qwe',
    local: {
      test: {
        p: '123qweqwe'
      }
    }
  }
}

const getDeep = (data, path) => {
  if (path.length === 1) {
    return data[path[0]] || '';
  }
  return getDeep(data[path[0]], path.slice(1))
}
function getFromPath(target, path, alias, dataSet) {
  for (const [_, key] of path.entries()){
    const localPath = alias[key].split('.');
    if (localPath.length === 1) {
      target[key] = dataSet[localPath[0]] || ''
    } else {
      target[key] = getDeep(dataSet, localPath)
    }
  }
}

getFromPath(prop, ['text', 'test', 'address', 'local'], dict, data)
console.log(prop)