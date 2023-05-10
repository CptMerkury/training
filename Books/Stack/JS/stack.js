function StackApp() {
    const stack = new StackX(10);

    stack.push(20);
    stack.push(40);
    stack.push(60);
    stack.push(80);

    while (!stack.isEmpty()) {
        let value = stack.pop();
        let top = stack.peek();

        console.log(value + '\n');
        console.log("Stack top is " + top + "\n");

    }
    console.log("Stack is empty")
}

StackApp();

class StackX {
    #maxSize;
    #stackArray;
    #top;

    constructor(size) {
        this.#maxSize = size;
        this.#stackArray = new Array(this.#maxSize);
        this.#top = -1;
    }

    push(value) {
        this.#stackArray[++this.#top] = value;
    }

    pop() {
        return this.#stackArray[this.#top--];
    }

    peek() {
        return !this.isEmpty() ? this.#stackArray[this.#top] : -1;
    }

    isEmpty() {
        return this.#top === -1;
    }

    isFull() {
        return this.#top === this.#maxSize - 1;
    }
}