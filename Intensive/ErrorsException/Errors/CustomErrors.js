class IndexOfError extends Error {
    constructor(elem) {
        super(`The requested element (${elem}) is not found within array\n`);
    }
}

/**
 * 
 * @param {number} val 
 * @param {Array<number>} arr 
 * @returns {number}
 */
function find(val, arr) {
    const pos = arr.indexOf(val)
    if (pos === -1) {
        throw new IndexOfError(val)
    }
    console.log(`Element position is ${pos}`)
    return pos;
}


function customErr() {
    try {
        find(4, [1, 2, 3, 4, 5])
        find(10, [1, 2, 3, 4, 5])
        find(1, [1, 2, 3, 4, 5]) // Not init
    } catch (e) {
        console.log('Custom Error', { Message: e.message, Stack: e.stack })
    }

    console.log('Log after Custom Error\n')
}

customErr();