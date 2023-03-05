/* Uncatched Async Error */
function uncatchedAsyncError() {
    try {
        setTimeout(() => {
            throw new Error('Some error') /* This throw has been uncatched */
        }, 1500)

        console.log('Log after Uncatched Async Error\n')
    } catch {
        console.log('Uncatched Async Error')/* Not init */
    }
}
uncatchedAsyncError();


/* Catched Async Error */
function catchedAsyncError() {
    try {
        setTimeout(() => {
            try {
                throw new Error('Some error')
            } catch (e) {
                console.log('Catched Async Error', { Message: e.message, Stack: e.stack })
            }
        }, 1500)

        console.log('Log after Catched Async Error\n')
    } catch {
        console.log('Catched Async Error')/* Not init */
    }
}

catchedAsyncError();