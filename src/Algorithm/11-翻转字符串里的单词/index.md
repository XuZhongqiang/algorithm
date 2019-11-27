### 翻转字符串里的单词
给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：
```!
输入: "the sky is blue"
输出: "blue is sky the"
```

示例 2：
```!
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

示例 1：
```!
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

说明：

无空格字符构成一个单词。
输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

### 思路: 链表反转
```js
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
```