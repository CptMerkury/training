const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        return !this.isEmpty() ? this.#stackArray[this.#top] : "0";
    }

    isEmpty() {
        return this.#top === -1;
    }

    isFull() {
        return this.#top === this.#maxSize - 1;
    }
}

class Reverser {
    #input;
    #output;

    constructor(string) {
        this.#input = string;
    }

    DoRev() {
        const stackSize = this.#input.length;
        const stack = new StackX(stackSize);

        for (let c = 0; c < this.#input.length; c++) {
            const char = this.#input[c];
            stack.push(char);
        }

        this.#output = "";

        while (!stack.isEmpty()) {
            let char = stack.pop();
            this.#output += char;
        }

        return this.#output;
    }

}

function ReverseApp() {
    rl.question("Enter a string: ", str => {
        if (str === "") {
            console.log("Exit...")
            process.exit(0);
        }

        let reverse = new Reverser(str);
        let output = reverse.DoRev();
        console.log("Reverse is: " + output)

        ReverseApp();
    })

    rl.on('close', () => {
        console.log("Exit...")
        process.exit(0);
    })

}

ReverseApp();