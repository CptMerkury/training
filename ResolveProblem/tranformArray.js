function trainsWithoutOrder(array) {
    let end = array.length - 1;
    let start = 0;

    while (start < end) {
        if (array[start] === 0) {
            let temp = array[end];
            array[end] = array[start];
            array[start] = temp;
            end--;
        }
        start++;
    }

    return array
}

function trainsWithOrder(array) {
    let end = array.length;
    let start = 0;
    let flag = 0;


    while (start < end) {
        if (array[start] === 0 && flag === 0) {
            flag = start;
        }
        
        if (array[start] > 0 && start > flag) {
            let temp = array[flag]
            array[flag] = array[start]
            array[start] = temp;

            start = flag;
            flag = 0
        }
        start++
    }

    return array
}

console.log(trainsWithoutOrder([1,0,4,5,6,7,0,1]));
console.log(trainsWithOrder([1,0,4,5,6,7,0,1]));