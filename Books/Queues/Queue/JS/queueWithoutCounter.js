class Queue {
    #maxSize;
    #queArray;
    #front;
    #rear;
    #nItems;

    constructor(s) {
        this.#maxSize = s + 1;
        this.#queArray = new Array(this.#maxSize);
        this.#front = 0;
        this.#rear = -1;
    }

    insert(val) {
        if (this.isFull()) {
            console.log("Error: Queue is full");
            return;
        }

        if (this.#rear == this.#maxSize - 1) {
            this.#rear = -1;
        }
        this.#queArray[++this.#rear] = val;
    }

    remove() {
        if (this.isEmpty()) {
            console.log("Error: Queue is empty");
            return 0;
        } else {
            const temp = this.#queArray[this.#front++];

            if (this.#front == this.#maxSize) {
                this.#front = 0;
            }

            return temp;
        }
    }

    peekFront() {
        return this.#queArray[this.#front];
    }

    isEmpty() {
        return (this.#rear + 1 == this.#front || (this.#front + this.#maxSize - 1 == this.#rear));
    }

    isFull() {
        return (this.#rear + 2 == this.#front || (this.#front + this.#maxSize - 2 == this.#rear));
    }

    size() {
        if (this.#rear >= this.#front) {
            return this.#rear - this.#front + 1;
        } else {
            return (this.#maxSize - this.#front) + (this.#rear + 1);
        }
    }
}

(function QueueApp() {

    const theQueue = new Queue(5);

    theQueue.insert(10);
    theQueue.insert(20);
    theQueue.insert(30);
    theQueue.insert(40);

    theQueue.remove();
    theQueue.remove();
    theQueue.remove();

    theQueue.insert(50);
    theQueue.insert(60);
    theQueue.insert(70);
    theQueue.insert(80);

    while (!theQueue.isEmpty()) {
        const temp = theQueue.remove();

        console.log(temp + " ");
    }

    console.log(" ");
})();