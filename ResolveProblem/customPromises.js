/* allSettled */

function allSettled(iterable) {
  const promises = [...iterable].map((iter) => Promise.resolve(iter));
  const result = new Array(promises.length)
  let total = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then(value => {
          result[idx] = {status: 'fulfilled', value};
          total++;
          if (total >= promises.length) {
            resolve(result)
          }
        })
        .catch(reason => {
          result[idx] = {status: 'rejected', reason};
          total++;
          if (total >= promises.length) {
            resolve(result)
          }
        })
    })
  })
}

allSettled([1, Promise.resolve(2), Promise.reject(3)]).then(([v1, v2, v3]) => {
  console.log(v1); // {status: 'fulfilled', value: 1}
  console.log(v2); // {status: 'fulfilled', value: 2}
  console.log(v3); // {status: 'rejected', reason: 3}
});
