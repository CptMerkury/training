function sortOdd(array) {
    const isOdd = (item) => item % 2 === 0;

    const odd = array.filter(item => isOdd(item)).sort((a,b) => a - b);

    for(let i = 0; i < array.length; i++) {
        if(isOdd(array[i])) {
            array[i] = odd.shift();
        }
    }

    return array;
}

console.log(sortOdd([1,3,4,5,6,6,2,2,5]))