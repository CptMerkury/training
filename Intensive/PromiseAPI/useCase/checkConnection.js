/* Used case Promise.race - Check internet connetion */
const https = require('https');


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


/**
 * @description Get favicon from some server and retuns status code
 * @param {string} url 
 * @returns {number}
 */
function getFavicon(url) {
    return new Promise((resolve) => {
        https.get(`https://${url}/favicon.ico`, (resp) => {
            resp.on("data", () => resolve({ url, code: resp.statusCode }))
        }).on('error', (err) => "Error: " + err.message);

    })
};

Promise.race([
    getFavicon('www.google.com'),
    getFavicon('www.yahoo.com'),
    getFavicon('www.ya.ru'),
    sleep(null, "Error: Don't have internet connection", 5000),
])
    .then(res => console.log(`Connection on host: ${res.url}\nResponse with status: ${res.code}`))
    .catch(err => console.log(err))

