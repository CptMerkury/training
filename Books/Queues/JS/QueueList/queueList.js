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

class LinkedList {
    #first;
    #last;

    constructor() {
        this.#first = null;
        this.#last = null;
    }

    isEmpty() {
        return this.#first === null
    }

    insertLast(data) {
        const node = new Node(data);

        this.isEmpty() ? this.#first = node : this.#last.next = node;
        this.#last = node;
    }

    deleteFirst() {
        const current = this.#first;

        if (this.isEmpty()) {
            this.#last = null;
        }
        this.#first = this.#first.next;
        return current;
    }

    displayList() {
        let current = this.#first;

        while(current !== null) {
            current.displayNode();
            current = current.next;
        }
    }
}

class QueueList {
    theQueue;

    constructor() {
        this.theQueue = new LinkedList();
    }

    push(data) {
        this.theQueue.insertLast(data)
    }

    pop() {
        this.theQueue.deleteFirst()
    }

    displayQueue() {
        console.log("Queue (start -> end): ")
        this.theQueue.displayList();
    }
}

(function QueueListApp() {
    const theQueue = new QueueList();

    theQueue.push(10);
    theQueue.push(20);
    theQueue.push(30);

    theQueue.displayQueue();

    theQueue.push(40);
    theQueue.push(50);
    theQueue.push(60);

    theQueue.displayQueue();

    theQueue.pop();
    theQueue.pop();
    theQueue.pop();
    theQueue.pop();

    theQueue.displayQueue();
})()