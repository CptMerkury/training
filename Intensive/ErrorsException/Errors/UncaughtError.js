/* Uncaught Errors Async */
function uncaughtAsync() {
    setTimeout(() => {
        throw new Error('Some error')
    }, 3000)

    console.log('Log after Uncaught Error\n')

    //NodeJS
    process.on('uncaughtException', (e) => {
        console.log('Uncaught Error Node', { Message: e.message, Stack: e.stack })
    })

    //Browser
    window.addEventListener('error', (e) => {
        console.log('Uncaught Error Browser', { Message: e.message, Stack: e.stack })
    })
}

uncaughtAsync();


/* Uncaught Errors Promise*/
function uncaughtPromise() {
    Promise.reject('Error')

    console.log('Log after Uncaught Error\n')

    //NodeJS
    process.on('unhandledRejection', (e) => {
        console.log('Uncaught Error Node', e);
    })

    //Browser
    window.addEventListener('unhandledrejection', (e) => {
        console.log('Uncaught Error Browser', e);
    });
}

uncaughtPromise();