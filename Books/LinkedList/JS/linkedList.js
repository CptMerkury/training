class Node {
    iData;
    dData;
    next;

    constructor(id, data) {
        this.iData = id;
        this.dData = data;
        this.next = null;
    }

    displayNode() {
        console.log(`{id: ${this.iData}, data: ${this.dData}} `);
    }
}

class LinkedList {
    #first;

    constructor() {
        this.#first = null;
    }

    insertFirst(id, data) {
        const node = new Node(id, data)
        node.next = this.#first;
        this.#first = node;
    }

    deleteFirst() {
        const temp = this.#first;
        this.#first = this.#first.next;
        return temp;
    }

    find(key) {
        let current = this.#first;
        while (current.iData !== key) {
            if (current.next == null) {
                return null;
            } else {
                current = current.next;
            }
        }
        return current;
    }

    delete(id) {
        let current = this.#first;
        let prev = this.#first;

        while(current.iData !== id) {
            if (current.next === null) {
                return null;
            } else {
                prev = current;
                current = current.next;
            }
        }

        if (current === this.#first) {
            this.#first = this.#first.next
        } else {
            prev.next = current.next;
        }

        return current;
    }

    displayList() {
        console.log("List (first --> last): \n")
        let current = this.#first;

        while(current !== null) {
            current.displayNode()
            current = current.next;
        }
    }

    isEmpty() {
        return this.#first === null; 
    }
}

(function LinkedListApp(){
    const theList = new LinkedList();

    theList.insertFirst(22, 22.99);
    theList.insertFirst(44, 44.99);
    theList.insertFirst(66, 66.99);
    theList.insertFirst(11, 11.99);
    theList.insertFirst(99, 99.99);
    theList.insertFirst(300, 300.99);

    theList.displayList();

    const f1 = theList.find(300);
    const f2 = theList.find(11);
    const f3 = theList.find(450);

    console.log(f1 !== null ? "Element: " + f1.dData : "Element not found");
    console.log(f2 !== null ? "Element: " + f2.dData : "Element not found");
    console.log(f3 !== null ? "Element: " + f3.dData : "Element not found");

    const d1 = theList.delete(99);
    const d2 = theList.delete(500);
    const d3 = theList.delete(44);
    console.log(d1 !== null ? "Deleted element: " + d1.dData : "Deleted element not found");
    console.log(d2 !== null ? "Deleted element: " + d2.dData : "Deleted element not found");
    console.log(d3 !== null ? "Deleted element: " + d3.dData : "Deleted element not found");

    theList.displayList();

    while(!theList.isEmpty()) {
        let node = theList.deleteFirst()
        console.log('Deleted: ->')
        node.displayNode()
    }

    theList.displayList();
})()