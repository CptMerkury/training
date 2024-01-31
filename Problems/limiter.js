const requestsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const LIMIT = 5;
const analytics = [];
const sleep = (delay) => new Promise( async (resolve) => {
  setTimeout(() => {
    resolve();
  }, delay)
})

async function request(id) {
  return new Promise((resolve, reject) => {
    if (id % 2 === 0) {
      return resolve('Success')
    } else {
      return reject('Failed')
    }
  })
}

function* limiter(req, limit) {
  for (let i = 0; i < req.length; i++) {
    request(req[i])
      .then(data => {
        analytics.push({data: data, time: new Date().toLocaleTimeString('ru-RU'), id: req[i]})
      })
      .catch(err => {
        analytics.push({reason: err, time: new Date().toLocaleTimeString('ru-RU'), id: req[i]})
      })

    if (((i + 1) % limit) === 0) {
      yield req[i];
    }
  }
}

async function awaiter(requests, limit) {
  const results = limiter(requests, limit)

  for (let res of results) {
    console.log('Waiting...')
    await sleep(3000)

  }
}

awaiter(requestsIds, LIMIT).then(() => console.log(analytics));




