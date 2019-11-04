/**
 * 单向链表: 插入 查找 删除
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

/**
 * append: 向末尾添加节点
 * remove: 根据值删除
 * findByElement: 根据element查找节点
 * findByIndex: 根据index查找节点, 从0开始
 * insertBefore: 在指定元素之前插入节点
 * insertAfter: 在指定元素之后插入节点
 * findPrev: 查找指定节点的前一个
 * display: 遍历显示所有节点
 */
class LinkedList {
  constructor() {
    // 链表的首节点固定为'head': 称之为哨兵, 这样就不需要在单链表的插入和删除操作时, 判断是否在第一个位置进行
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

  findByElement(element) {
    let currentNode = this.head.next;
    while(currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }

    return currentNode === null ? -1 : currentNode;
  }

  findPrev(element) {
    let currentNode = this.head;

    while(currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return -1;
    }

    return currentNode;
  }

  remove(element) {
    const prevNode = this.findPrev(element);

    if (prevNode === -1) {
      console.log('找不到元素');
      return;
    }

    prevNode.next = prevNode.next.next;
  }

  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;

    while(currentNode && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }

    return currentNode === null ? -1 : currentNode;
  }

  /**
   * 
   * @param {*} newElement 
   * @param {*} referenceElement 
   * newElement 用于插入的节点
   * referenceElement newElement将要插在这个节点之前
   * 如果 referenceElement 为 null 则 newElement 将被插入到子节点的末尾。
   */
  insertBefore(newElement, referenceElement) {
    const newNode = new Node(newElement);
    const referenceNode = this.findByElement(referenceElement);
    if (referenceNode === -1) {
      this.append(newNode);
      return;
    }
    
    const nodeBeforeReferenceNode = this.findPrev(referenceElement);
    newNode.next = referenceNode;
    nodeBeforeReferenceNode.next = newNode;
  }

  insertAfter(newElement, referenceElement) {
    const newNode = new Node(newElement);
    const referenceNode = this.findByElement(referenceElement);
    if (referenceNode === -1) {
      this.append(newNode);
      return;
    }

    newNode.next = referenceNode.next;
    referenceNode.next = newNode;
  }

  display() {
    let currentNode = this.head.next;// 忽略头指针的值
    while(currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

/* ******************test********************* */
const ll = new LinkedList();

ll.append('a');
ll.append('b');
ll.display();
 
console.log(ll.findByElement('a'));
console.log(ll.findByIndex(1));

ll.insertAfter('c', 'b');
ll.display();

ll.insertBefore('0', 'a');
ll.display();