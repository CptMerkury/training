class PriorityQ {
    #maxSize;
    #nItems;
    #priorityQArray;

    constructor(size) {
        this.#maxSize = size;
        this.#priorityQArray = new Array(this.#maxSize);
        this.#nItems = 0;
    }

    insert(value) {
        let j;

        if (this.#nItems === 0) {
            this.#priorityQArray[this.#nItems++] = value;
        } else {
            for (j = this.#nItems - 1; j >= 0; j--) {
                if (value > this.#priorityQArray[j]) {
                    this.#priorityQArray[j + 1] = this.#priorityQArray[j];
                } else {
                    break;
                }
            }
            this.#priorityQArray[j + 1] = value;
            this.#nItems++;
        }
    }

    remove() {
        return this.#priorityQArray[--this.#nItems];
    }

    peek() {
        return this.#priorityQArray[this.#nItems - 1];
    }

    isEmpty() {
        return this.#nItems === 0;
    }

    isFull() {
        return this.#nItems === this.#maxSize;
    }
}

(function PriorityQApp() {
    const thePQ = new PriorityQ(5);

    thePQ.insert(40);
    thePQ.insert(30);
    thePQ.insert(10);
    thePQ.insert(50);
    thePQ.insert(20);

    while (!thePQ.isEmpty()) {
        const temp = thePQ.remove();
        console.log(temp + " ");
    }

    console.log(" ")
})()