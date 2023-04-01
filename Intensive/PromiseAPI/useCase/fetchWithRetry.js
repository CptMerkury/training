/* Used case Promise for retry requst in some tries */
const https = require('https');

/**
 * @description Send request
 * @param {string} url 
 * @returns {Promise<{url: string, code: number}>}
 */
function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            resp.on('data', () => resp.statusCode !== 404
                ? resolve({ url, code: resp.statusCode })
                : reject({ url, code: 404 }))
        }).on('socket', () => console.log('Send requst: ' + url));

    })
};

/**
 * @description Create promise from request and check counter for retry request
 * @param {Promise<T>} promise 
 * @param {number} tries 
 * @returns {Promise<T>}
 */
async function fetchWithRetry(promise, tries) {
    return await promise().catch(err => {
        if (tries <= 0) {
            return Promise.reject(err)
        }

        tries--;
        return fetchWithRetry(promise, tries);
    })
}

fetchWithRetry(() => fetch('https://www.google.com'), 5)
    .then((res) => console.log(`Host: ${res.url}\nStatus: ${res.code}\n`))
    .catch((err) => console.log(`Error: ${err.url}\nStatus: ${err.code}\n`))

fetchWithRetry(() => fetch('https://www.google.com/as23asfa'), 10)
    .then(
        (res) => console.log(`Host: ${res.url}\nStatus: ${res.code}\n`),
        (err) => console.log(`Error: ${err.url}\nStatus: ${err.code}\n`)
    )