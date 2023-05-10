class Queue {
    #maxSize;
    #queArray;
    #front;
    #rear;
    #nItems;

    constructor(s) {
        this.#maxSize = s;
        this.#queArray = new Array(this.#maxSize);
        this.#front = 0;
        this.#rear = -1;
        this.#nItems = 0;
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
        this.#nItems++;
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

            this.#nItems--;
            return temp;
        }
    }

    peekFront() {
        return this.#queArray[this.#front];
    }

    isEmpty() {
        return this.#nItems == 0;
    }

    isFull() {
        return this.#nItems == this.#maxSize;
    }

    size() {
        return this.#nItems;
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