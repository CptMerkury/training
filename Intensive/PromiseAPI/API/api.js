/* Promise method api */

/**
 * @description Some delay helper
 * @param {number?} value
 * @param {string?} err
 * @param {number} ms
 * @returns {Promise<number>}
 */
async function sleep(value, err, ms = 0) {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (err === null) {
            resolve(value)
        }
        reject(err);
    }, ms))
};

/* Resolve - create new Promise and resolved him */
const res = Promise.resolve(1)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });


/* Reject - create new Promise and rejected him */
const rej = Promise.reject(1)
    .then(() => { })
    .catch(() => { })
    .finally(() => { });;


/* All - get iterable param, return reject if anyone been rejected or array all result */
const all = Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    //Promise.reject('Reject') - Reject Promise.all
])
    .then((res) => console.log('All: ', res, '\n')) //[1,2]
    .catch((err) => console.log('All: ', err, '\n'))
    .finally(() => {/* Always */ });


/* All Settled - get iterable param, return array of all promise result */
const allSatteled = Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(2) //Reject our promise
])
    .then((res) => console.log('All Settled: ', res, '\n')) //[{status: 'fulfilled', value: 1},{status: 'rejected', reason: 2}]
    .catch(() => {/* If reject all */ })
    .finally(() => {/* Always */ });


/* Race - get itarable param, return first resolved or first rejected promise */
const race = Promise.race([
    sleep(1, null, 200),
    sleep(2, null, 100),
    sleep(null, 'reject', 300),
])
    .then(res => console.log('Race: ', res, '\n')) // 2
    .catch(err => {/* If reject faster */ })
    .finally(() => {/* Always */ });


/* Any - get itarable param, return first resolved promise or all rejected promise */
try {
    const any = Promise.any([
        Promise.reject(1).catch(() => { }),
        Promise.resolve(2),
        Promise.reject(3).catch(() => { }),
    ])
        .then(res => console.log('Any: ', res, '\n')) // [2]
        .catch(() => {/* If all reject */ })
        .finally(() => {/* Always */ });
} catch {
    console.log('Promise.any not supported lower node v15.0.0\n');
}
/* UPD: Promise.any not supported lower node v15.0.0 */