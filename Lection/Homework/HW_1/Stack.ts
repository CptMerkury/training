/* 1.Реализовать стек на основе массива фиксированной длины */
class Stack {
    items;
    constructor() {
        this.items = [];
    }
    show() {
        return this.items
    }
    add(item) {
        return this.items.unshift(item)
    }
    remove() {
        if (this.items.length > 0) {
            return this.items.shift()
        }
        return 'Exception'
    }
    head() {
        if (this.items.length > 0) {
            return this.items[0];
        }
        return 'Stack is empty'
    }
    size() {
        return this.items.length
    }
}

const stack = new Stack();

stack.add(10);
stack.add(11);
stack.add(12);

console.log(stack.head());  // 12
console.log(stack.remove()); // 12
console.log(stack.size()); // 2
console.log(stack.head());  // 11
console.log(stack.remove()); // 11
console.log(stack.remove()); // 10
console.log(stack.remove()); // Exception
