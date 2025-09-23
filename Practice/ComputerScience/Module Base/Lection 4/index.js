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

  getTail() {
    this.tail;
  }

  remove() {
    if (this.tail !== null) {
      const tail = this.tail;

      this.tail = this.tail.prev;
      if (this.tail !== null) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      return tail;
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

class Queue {
  head;

  constructor() {
    this.head = new LinkedList();
  }

  push(value) {
    this.head.addRight(value)
  }

  pop() {

  }
}
