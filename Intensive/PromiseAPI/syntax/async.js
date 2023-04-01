/* Example abstract syntax with async/await Promise API
 * 1 - Read file
 * 2 - Normalize content from file
 * 3 - Generate hash from content
 * 4 - Fetch data on other server
 * 5 - Write result in file
 */

async function openFile(path) {
    /* some code */
}

async function normalize(content) {
    /* some code */
}

async function genHash(content) {
    /* some code */
}

async function fetch(url) {
    /* some code */
}

async function writeData(path, data) {
    /* some code */
}

async function doSomething(path) {
    try {
        const content = await openFile(path);
        const hash = await genHash(normalize(content));
        const res = await fetch(`someUrl?hash=${hash}`);
        return await writeData('/foo.txt', res)
    } catch (error) {
        console.error(error)
    }
}