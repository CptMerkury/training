const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

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

    getFirst() {
        return this.#first;
    }

    setFirst(node) {
        this.#first = node;
    }

    isEmpty() {
        return this.#first === null;
    }

    getIterator() {
        return new ListIterator(this)
    }

    displayList() {
        console.log("List (first --> last): \n")
        let current = this.#first;

        while (current !== null) {
            current.displayNode()
            current = current.next;
        }
    }
}

class ListIterator {
    #current;
    #prev;
    #ourList

    constructor(list) {
        this.#ourList = list;
        this.reset();
    }

    reset() {
        this.#current = this.#ourList.getFirst();
        this.#prev = null;
    }

    atEnd() {
        return this.#current.next == null;
    }

    nextLink() {
        this.#prev = this.#current;
        this.#current = this.#current.next;
    }

    getCurrent() {
        return this.#current
    }

    insertAfter(data) {
        const newNode = new Node(data);

        if (this.#ourList.isEmpty()) {
            this.#ourList.setFirst(newNode);
            this.#current = newNode;
        } else {
            newNode.next = this.#current.next;
            this.#current.next = newNode
            this.nextLink()
        }
    }

    insertBefore(data) {
        const newNode = new Node(data);

        if (this.#prev === null) {
            newNode.next = this.#ourList.getFirst();
            this.#ourList.setFirst(newNode);
            this.reset()
        } else {
            newNode.next = this.#prev.next;
            this.#prev.next = newNode;
            this.#current = newNode
        }
    }

    deleteCurrent() {
        const value = this.#current.dData;

        if (this.#prev === null) {
            this.#ourList.setFirst(this.#current.next)
            this.reset();
        } else {
            this.#prev.next = this.#current.next;

            if (this.atEnd()) {
                this.reset()
            } else {
                this.#current = this.#current.next;
            }
        }

        return value;
    }
}

(function ListIteratorApp() {
    const theList = new LinkedList();
    const theIter = new ListIterator(theList)
    let currentValue;

    function ConsoleCommand() {
        rl.question("Enter the first letter of:\n show, current, reset, next, before, after, delete \n", str => {
            if (str === "") {
                console.log("Exit...")
                process.exit(0);
            } else {
                switch (str) {
                    case 's':
                        if (!theList.isEmpty()) {
                            theList.displayList();
                        } else {
                            console.log("List is empty");
                        }
                        break;
                    case 'r':
                        theIter.reset();
                        break;
                    case 'n':
                        if (!theList.isEmpty() && !theIter.atEnd()) {
                            theIter.nextLink();
                        } else {
                            console.log("Can't go to next link");
                        }
                        break;
                    case 'c':
                        if (!theList.isEmpty()) {
                            currentValue = theIter.getCurrent().dData;
                            console.log("Current node is " + currentValue);
                        } else {
                            console.log("List is empty");
                        }
                        break;
                    case 'b':
                        rl.question("Enter the value to insert before current: ", str => {
                            currentValue = parseInt(str, 10);
                            theIter.insertBefore(currentValue);
                            ConsoleCommand();
                        })
                        break;
                    case 'a':
                        rl.question("Enter the value to insert after current: ", str => {
                            currentValue = parseInt(str, 10);
                            theIter.insertAfter(currentValue);
                            ConsoleCommand();
                        })
                        break;
                    case 'd':
                        if (!theList.isEmpty()) {
                            currentValue = theIter.deleteCurrent();
                            console.log("Deleted: " + currentValue);
                        } else {
                            console.log("Can't deleted");
                            console.log("List is empty");
                        }
                        break;
                    default:
                        console.log("Invalid command");
                }
                ConsoleCommand()
            }
        })
    }
    ConsoleCommand()
})()