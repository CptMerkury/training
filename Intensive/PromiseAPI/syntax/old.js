/* Example old syntax without Promise API
 * 1 - Read file
 * 2 - Normalize content from file
 * 3 - Generate hash from content
 * 4 - Fetch data on other server
 * 5 - Write result in file
 */

function openFile(path, cb) {
    /* some code */
}

function normalize(content) {
    /* some code */
}

function genHash(content, cb) {
    /* some code */
}

function fetch(url, cb) {
    /* some code */
}

function writeData(path, data, cb) {
    /* some code */
}

function doSomething(path) {
    openFile(path, (err, data) => { 
        if (err !== null) {
            console.error(err)
            return;
        }

        try {
            const normalizeContent = normalize(data)

            genHash(normalizeContent, (err, hash) => {
                if (err !== null) {
                    console.error(err)
                    return;
                }

                fetch(`someUrl?hash=${hash}`, (err, res) => {
                    if (err !== null) {
                        console.error(err)
                        return;
                    }

                    writeData('/foo.txt', res, (err) => {
                        if (err !== null) {
                            console.error(err)
                            return;
                        }
                    })
                })
            })

        } catch (error) {
            console.error(err)
            return;
        }
    })
}
