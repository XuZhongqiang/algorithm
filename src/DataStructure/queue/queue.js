/**
 * 基于链表实现的队列
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(element) {
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (this.head === null) return -1;

    const node = this.head;
    this.head = this.head.next;

    return node;
  }
}

// test
const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

let node;
while (node !== -1) {
  node = queue.dequeue();
  console.log('node: ', node);
}