
let elem = document.querySelector('div');

function logAfter(task) {
    task.then(() => console.log('After event task'))
}


function on(el, event) {
    return new Promise(resolve => {
        el.addEventListener(event, (e) => resolve(e))
    })
}

logAfter(
    on(elem, 'click')
        .then((event) => event.target.append('ed'))
        .catch((err) => console.log(err))
        .finally(removeEventListener('click', elem))
)
