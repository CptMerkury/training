class Node {
    dData;
    next;

    constructor(data) {
        this.dData = data;
        this.next = null;
    }

    displayNode() {
        console.log(`{data: ${this.dData}} `);
    }
}

class SortedList {
    #first;

    constructor() {
        this.#first = null;
    }

    isEmpty() {
        return this.#first === null;
    }

    insert(data) {
        const newNode = new Node(data);
        let prev = null;
        let current = this.#first;

        while(current !== null && data > current.dData) {
            prev = current;
            current = current.next;
        }

        if (prev === null) {
            this.#first = newNode;
        } else {
            prev.next = newNode;
        }

        newNode.next = current;
    }

    removeFirst() {
        const temp = this.#first;
        this.#first = temp.next;
        return temp;
    }

    displayList() {
        console.log("\nList (first --> last):")
        let current = this.#first;

        while (current !== null) {
            current.displayNode();
            current = current.next;
        }
    }
}

(function SortedListApp(){
    const theSortedList = new SortedList();

    theSortedList.insert(20);
    theSortedList.insert(40);
    theSortedList.insert(60);

    theSortedList.displayList();

    theSortedList.insert(30);
    theSortedList.insert(50);
    theSortedList.insert(10);

    theSortedList.displayList();

    theSortedList.removeFirst();
    theSortedList.removeFirst();

    theSortedList.displayList();
})()