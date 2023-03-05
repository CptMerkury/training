function finallyHandler() {
    const connection = db.connetct(); /* Some DB */
    try {
        const res = connection.query('SELECT * FROM bla').asArray(); /* Send query in some DB */
        //... other code

    } catch (e) {
        console.log('Exception', { Message: e.message, Stack: e.stack })

    } finally {
        connection.free(); /* Stop connect some DB */
        console.log('Log from finnaly Exception\n')
    }

    console.log('Log after Exception\n')
}

finallyHandler();