class ListNode {
  next;
  value;
  prev;

  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addRight(value) {
    const node = new ListNode(value);

    if (this.tail == null) {
      this.head = node
    } else {
      this.tail.next = node;
      node.prev = this.tail
    }
    this.tail = node;
  }

  addLeft(value) {
    const node = new ListNode(value);

    if (this.head == null) {
      this.tail = node
    } else {
      this.head.prev = node;
      node.next = this.head
    }
    this.head = node;
  }

  remove() {
    if (this.tail !== null) {
      this.tail = this.tail.prev;
      if (this.tail !== null) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
    }
  };

  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  };
}

const list = new LinkedList();

list.addRight(1);
list.addRight(2);
list.addRight(3);
console.log('Head', list.head.value) // 1
list.addLeft(2);
console.log('Head', list.head.value) // 2
console.log('Tail', list.tail.value) // 3
list.remove();

console.log('Tail', list.tail.value) // 3
console.log('Head next', list.head.next.value) // 1
console.log('Head next prev value', list.head.next.prev.value) // 2