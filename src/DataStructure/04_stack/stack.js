class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.top = null;
  }

  push(element) {
    const node = new Node(element);

    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) return -1;

    const element = this.top.element;
    this.top = this.top.next;

    return element;
  }

  clear() {
    this.top = null;
  }

  display() {
    let cur = this.top;
    while(cur !== null) {
      console.log('node: ', cur.element);
      cur = cur.next;
    }
  }
}

// const stack = new Stack();
// stack.push('a');
// stack.push('b');
// stack.push('c');
// stack.push('d');

// stack.display();

// console.log('---------------');

// console.log('pop: ', stack.pop());

// console.log('---------------');
// stack.display();