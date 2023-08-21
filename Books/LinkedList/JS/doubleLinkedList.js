class Node {
    dData;
    next;
    prev;

    constructor(data) {
        this.dData = data;
        this.next = null;
        this.prev = null;
    }

    displayNode() {
        console.log(`{data: ${this.dData}} `);
    }
}

class DoubleLinkedList {
    #first;
    #last;

    constructor() {
        this.#first = null;
        this.#last = null;
    }

    isEmpty() {
        return this.#first === null;
    }

    displayForward() {
        console.log("\nList Forward (first --> last):");

        let current = this.#first;

        while(current !== null) {
            current.displayNode();
            current = current.next;
        }
    }

    displayBackward() {
        console.log("\nList Backward (last --> first):");

        let current = this.#last;

        while(current !== null) {
            current.displayNode();
            current = current.prev;
        }
    }

    insertFirst(data) {
        const newNode = new Node(data);

        if(this.isEmpty()) {
            this.#last = newNode
        } else {
            this.#first.prev = newNode;
        }

        newNode.next = this.#first;
        this.#first = newNode;
    }

    insertLast(data) {
        const newNode = new Node(data);

        if(this.isEmpty()) {
            this.#first = newNode
        } else {
            this.#last.next = newNode;
        }

        newNode.prev = this.#last;
        this.#last = newNode;
    }

    deleteFirst() {
        if(this.isEmpty()) {
            console.log("List is empty \n")
        }

        const temp = this.#first;

        if(this.#first.next === null) {
            this.#last = null;
        } else {
            this.#first.next.prev = null;
        }

        this.#first = this.#first.next;
        return temp;
    }

    deleteLast() {
        if(this.isEmpty()) {
            console.log("List is empty \n")
        }

        const temp = this.#last;

        if(this.#first.next === null) {
            this.#first = null;
        } else {
            this.#last.prev.next = null;
        }

        this.#last = this.#last.prev;
        return temp;
    }

    insertAfter(key, data) {
        if(this.isEmpty()) {
            this.insertFirst(data);
        }

        let current = this.#first;

        while(current.dData !== key) {
            current = current.next;

            if(current === null) {
                console.log("Element " + key + " not found \n")
                return;
            }
        }

        const newNode = new Node(data);

        if(current === this.#last) {
            newNode.next = null;
            this.#last = newNode;
        } else {
            newNode.next = current.next;
            current.next.prev = newNode;
        }

        newNode.prev = current;
        current.next = newNode;

        console.log("Element " + data + " insert \n")
        return;
    }

    deleteKey(key) {
        if(this.isEmpty()) {
            console.log("List is empty \n")
        }

        let current = this.#first;

        while(current.dData !== key) {
            current = current.next;
            
            if(current === null) {
                console.log("Element " + key + " not found \n")
                return;
            }
        }

        if(current === this.#first) {
            this.#first = current.next;
        } else {
            current.prev.next = current.next;
        }

        if(current === this.#last) {
            this.#last = current.prev;
        } else {
            current.next.prev = current.prev;
        }

        console.log("Element " + key + " removed \n")
        return;
    }
}

(function DoubleLinkedListApp(){
    const theList = new DoubleLinkedList();

    theList.insertFirst(30);
    theList.insertFirst(20);
    theList.insertFirst(10);

    theList.displayForward();
    theList.displayBackward();

    theList.insertLast(70);
    theList.insertLast(80);
    theList.insertLast(90);

    theList.displayForward();
    theList.displayBackward();

    theList.insertAfter(10, 25);
    theList.insertAfter(90, 75);
    theList.insertAfter(30, 5);

    theList.displayForward();
    theList.displayBackward();

    theList.deleteFirst();

    theList.displayForward();
    theList.displayBackward();

    theList.deleteLast();

    theList.displayForward();
    theList.displayBackward();

    theList.deleteKey(70);
    theList.deleteKey(75);

    theList.displayForward();
    theList.displayBackward();
})();