/**
 * 单链表反转
 * 链表中的环检测
 * 两个有序的链表合并
 * 删除链表倒数第n个节点
 * 求链表的中间节点
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  append(newElement) {
    const newNode = new Node(newElement);
    let currentNode = this.head;

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  remove(element) {
    const prevNode = this.findPrev(element);

    if (prevNode === null) {
      console.log('找不到该节点');
      return;
    }

    prevNode.next = prevNode.next.next;
  }

  findByElement(element) {
    let currentNode = this.head.next;
    while(currentNode !== null && currentNode.element !== element) {
      currentNode = currentNode.next;
    }

    return currentNode !== null ? currentNode : null;
  }

  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;

    while (pos !== index && currentNode !== null) {
      currentNode = currentNode.next;
      pos++;
    }

    if (pos === index && currentNode !== null) {
      return currentNode;
    }
    return null;
  }

  findPrev(element) {
    let currentNode = this.head;

    while(currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return null;
    }

    return currentNode;
  }

  insertBefore(newElement, referenceElement) {
    const prevNode = this.findPrev(referenceElement);
    if (prevNode === null) {
      console.log(`找不到${referenceElement}对应的节点`);
      return;
    }

    const referenceNode = prevNode.next;
    const newNode = new Node(newElement);

    newNode.next = referenceNode;
    prevNode.next = newNode;
  }

  insertAfter(newElement, referenceElement) {
    const referenceNode = this.findByElement(referenceElement);
    if (referenceNode === null) {
      console.log(`找不到${referenceElement}对应的节点`);
      return;
    }

    const newNode = new Node(newElement);
    referenceNode.next = newNode;
  }

  display() {
    let currentNode = this.head.next;
    while(currentNode !== null) {
      console.log('node: ', currentNode.element);
      currentNode = currentNode.next;
    }
  }

  /**
   * 反转单向链表
   * tip: 其实就是将当前节点的next指针指向前一个节点
   */
  reverseList() {
    let cur = this.head.next;
    let prev = null;

    while(cur !== null) {
      const after = cur.next;

      cur.next = prev;
      prev = cur;
      cur = after;
    }

    this.head.next = prev;
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    this.reverseList();
    const node = this.findByIndex(index);
    if (node === null) {
      console.log('没有找到倒数第`${index}个节点`');
      return;
    }
    this.remove(node.element);
    this.reverseList();
  }

  // 求中间节点
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;

    while(fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    console.log('middleNode: ', slow);
    return slow;
  }

  // 环验证
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    
    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) return true;
    }

    return false;
  }
}

const ll = new LinkedList();
ll.append('a');
ll.append('b');
ll.append('c');
ll.append('d');
ll.append('e');
ll.append('f');
// ll.display();

// console.log("ll.findByElement('a'): ", ll.findByElement('a'));

// console.log("ll.findPrev('b'): ", ll.findPrev('b'));

// console.log('findByIndex: ', ll.findByIndex(1));

// ll.insertBefore('z', 'b');

// ll.insertAfter('d', 'c');
// ll.remove('c');
// ll.reverseList();
// ll.removeByIndexFromEnd(2);
ll.findMiddleNode();
ll.display();