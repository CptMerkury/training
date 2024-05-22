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

    isEmpty() {
        return this.#top === -1;
    }
}

class BracketsChecker {
    #input;

    constructor(string) {
        this.#input = string;
    }

    check() {
        const stackSize = this.#input.length;
        const stack = new StackX(stackSize);

        for (let i = 0; i < stackSize; i++) {
            const ch = this.#input[i];

            switch (ch) {
                case "{":
                case "[":
                case "(":
                    stack.push(ch)
                    break;
                case "}":
                case "]":
                case ")":
                    if (!stack.isEmpty()) {
                        let chx = stack.pop();

                        if (ch == '}' && chx != '{' ||
                            ch == ']' && chx != '[' ||
                            ch == ')' && chx != '(') {
                            console.log("Error: " + ch + " at " + i)
                            return false;
                        }
                    } else {
                        console.log("Error: " + ch + " at " + i)
                        return false;
                    }
                default:
                    break;
            }
        }

        return stack.isEmpty();
    }

}

function BracketsApp() {
    rl.question("Enter a string: ", str => {
        if (str === "") {
            console.log("Exit...")
            process.exit(0);
        }

        let checker = new BracketsChecker(str);

        if (checker.check()) {
            console.log("Status: success");
        } else {
            console.log("Status: fail");
        }

        BracketsApp();
    })

    rl.on('close', () => {
        console.log("Exit...")
        process.exit(0);
    })

}

BracketsApp();