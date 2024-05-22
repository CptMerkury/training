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

class FirstLastList {
    #first;
    #last;

    constructor() {
        this.#first = null;
        this.#last = null;
    }

    isEmpty() {
        return this.#first === null;
    }

    insertFirst(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.#last = node;
        }
        node.next = this.#first;
        this.#first = node;
    }

    insertLast(data) {
        const node = new Node(data);

        if (this.isEmpty()) {
            this.#first = node;
        } else {
            this.#last.next = node;
        }
        this.#last = node;
    }

    deleteFirst() {
        let temp = this.#first.dData;
        if (this.#first === null) {
            this.#last = null;
        }
        this.#first = this.#first.next;

        return temp;
    }

    displayList() {
        console.log("List (first --> last): \n")
        let current = this.#first;

        while(current !== null) {
            current.displayNode()
            current = current.next;
        }
    }
}

(function FirstLastListApp(){
    const theList = new FirstLastList();

    theList.insertFirst(22);
    theList.insertFirst(44);
    theList.insertFirst(66);

    theList.insertLast(11);
    theList.insertLast(33);
    theList.insertLast(55);

    theList.displayList();

    theList.deleteFirst();
    theList.deleteFirst();
    theList.deleteFirst();

    theList.displayList();
})()