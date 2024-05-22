class Node {
    dData;
    next;

    constructor(data) {
        this.dData = data;
        this.next = null;
    }
}

class SortedList {
    #first;

    constructor(data) {
        if (data) {
            this.#first = null;
            data.map(item => this.insert(item))
        } else {
            this.#first = null;
        }
    }

    insert(data) {
        let prev = null;
        let current = this.#first;

        while(current !== null && data.dData > current.dData) {
            prev = current;
            current = current.next;
        }

        if (prev === null) {
            this.#first = data;
        } else {
            prev.next = data;
        }

        data.next = current;
    }

    removeMin() {
        const temp = this.#first;
        this.#first = temp.next;
        return temp;
    }
}

(function InsertSortedArrayApp(){
    const size = 20;

    let linkArr = new Array(size);

    for(let j = 0; j < size; j++) {
        let value = Math.floor(Math.random() * 99)
        linkArr[j] = new Node(value);
    }

    console.log('Unsorted array: ');
    for(let j = 0; j < size; j++) {
        console.log(linkArr[j].dData)
    }
    console.log('\n');

    const theSortedList = new SortedList(linkArr);
    for(let j = 0; j < size; j++) {
        linkArr[j] = theSortedList.removeMin()
    }

    console.log('Sorted array: ');
    for(let j = 0; j < size; j++) {
        console.log(linkArr[j].dData)
    }
    console.log('\n');
})()