/**
 * 
 * @param {number} val 
 * @param {Array<number>} arr 
 * @returns {Object}
 */
function customFindHandler(val, arr) {
    const pos = arr.indexOf(val)
    return {
        success(cb) {
            if (pos !== -1) {
                cb(pos)
            }
            return this;
        },
        excention(cb) {
            if (pos === -1) {
                cb(val)
            }
            return this;
        }
    }
}


/**
 * 
 * @param {number} val 
 * @param {Array<number>} arr 
 * @returns {Promise}
 */
function promiseFindHandler(val, arr) {
    const pos = arr.indexOf(val)
    return new Promise((resolve, reject) => {
        pos === -1 ? reject(val) : resolve(pos)
    })
}


function alernativeErrorHandler() {
    customFindHandler(4, [1, 2, 3, 4, 5])
        .success((pos) => console.log(`Element posintion is ${pos}\n`))
        .excention((val) => console.log(`Element ${val} is not found within array\n`))

    customFindHandler(10, [1, 2, 3, 4, 5])
        .success((pos) => console.log(`Element posintion is ${pos}\n`))
        .excention((val) => console.log(`Element ${val} is not found within array\n`))

    promiseFindHandler(4, [1, 2, 3, 4, 5])
        .then((pos) => console.log(`Element posintion is ${pos}\n`))
        .catch((val) => console.log(`Element ${val} is not found within array\n`))

    promiseFindHandler(10, [1, 2, 3, 4, 5])
        .then((pos) => console.log(`Element posintion is ${pos}\n`))
        .catch((val) => console.log(`Element ${val} is not found within array\n`))
}

alernativeErrorHandler();