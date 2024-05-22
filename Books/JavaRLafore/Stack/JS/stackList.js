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

    constructor() {
        this.#first = null;
    }

    isEmpty() {
        return this.#first === null;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.#first;
        this.#first = newNode
    }

    deleteFirst() {
        if (this.isEmpty()) {
            return -1;
        }

        const temp = this.#first;
        this.#first = this.#first.next;

        return temp;
    }

    displayList() {
        let current = this.#first;

        while(current !== null) {
            current.displayNode();
            current = current.next;
        }
    }
}

class StackList {
    #theStack;

    constructor() {
        this.#theStack = new LinkedList();
    }

    push(data) {
        this.#theStack.insertFirst(data);
    }
    
    pop() {
        return this.#theStack.deleteFirst();
    }

    isEmpty() {
        return this.#theStack.isEmpty();
    }

    displayStack() {
        console.log("Stack (top -> bottom): ")
        this.#theStack.displayList();
    }
}

(function StackListApp(){
    const theStack = new StackList();

    theStack.push(10);
    theStack.push(30);
    theStack.push(50);

    theStack.displayStack();

    theStack.push(70);
    theStack.push(90);
    theStack.push(110);

    theStack.displayStack();

    theStack.pop();
    theStack.pop();
    theStack.pop();

    theStack.displayStack();
})()