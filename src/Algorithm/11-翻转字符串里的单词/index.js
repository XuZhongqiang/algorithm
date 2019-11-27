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

  append(element) {
    const node = new Node(element);
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }

    cur.next = node;
  }

  reverseList() {
    let cur = this.head.next;
    let prev = null;

    while (cur !== null) {
      const after = cur.next;

      cur.next = prev;
      prev = cur;
      cur = after;
    }

    this.head.next = prev;
  }

  display() {
    let cur = this.head.next;

    while(cur) {
      console.log(cur);
      cur = cur.next;
    }
  }
}

function reverseWords(word) {
  const words = word.split(' ').filter(word => word);
  console.log(words);
  const linkedList = new LinkedList();
  words.forEach(word => {
    linkedList.append(word);
  });
  linkedList.reverseList();
  
  const reversedWords = [];
  let cur = linkedList.head.next;
  while (cur !== null) {
    reversedWords.push(cur.element);
    cur = cur.next;
  }

  return reversedWords.join(' ');
}

console.log(reverseWords('the sky is blue'));