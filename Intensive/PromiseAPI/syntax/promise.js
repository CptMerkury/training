/* Example abstract syntax with Promise API
 * 1 - Read file
 * 2 - Normalize content from file
 * 3 - Generate hash from content
 * 4 - Fetch data on other server
 * 5 - Write result in file
 */

function openFile(path) {
    /* some code */
}

function normalize(content) {
    /* some code */
}

function genHash(content) {
    /* some code */
}

function fetch(url) {
    /* some code */
}

function writeData(path, data) {
    /* some code */
}

function doSomething(path) {
    return openFile(path)
        .then((content) => genHash(normalize(content)))
        .then((hash) => fetch(`someUrl?hash=${hash}`))
        .then((res) => writeData('/foo.txt', res))
        .catch(console.error)
}