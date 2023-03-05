/* 1.Реализовать очередь на основе связанного списка */
class Queue {
    items;
    constructor() {
        this.items = []
    }
    add(item) {
        return this.items.unshift(item)
    }
    addFirst(item) {
        return this.items.push(item)
    }
    remove() {
        if (this.items.length > 0) {
            return this.items.pop()
        }
        return 'Exception'
    }
    removeLast() {
        if (this.items.length > 0) {
            return this.items.shift()
        }
        return 'Exception'
    }
    head() {
        if (this.items.length > 0) {
            return this.items[this.items.length - 1]
        }
        return 'Queue is empty'
    }
}

const queue = new Queue();

queue.add(10);
queue.add(11);
queue.add(12);

console.log(queue.head());  // 10
console.log(queue.remove()); // 10
console.log(queue.head());  // 11
console.log(queue.remove()); // 11
console.log(queue.remove()); // 12
console.log(queue.remove()); // Exception

/* 2.Реализовать двустороннюю очередь */
const dequeue = new Queue();

dequeue.add(10);
dequeue.addFirst(11);
dequeue.add(12);

console.log(dequeue.removeLast());   // 12
console.log(dequeue.remove()); // 11
console.log(dequeue.removeLast());   // 10
console.log(dequeue.removeLast());   // Exception