/**
 * 使用栈, 模拟浏览器实现前进后退功能
 * 思路:
 * 1. 创建2个栈, 一个用于存放正常浏览顺序下的历史页面, 另一个用于存放后退的页面
 * 2. 当页面正常浏览时, 往normalStack push页面, 并清空backStack
 * 3. 当点击后退时, normalStack pop, 并将该值push到backStack中
 * 4. 当点击前进时, backStack pop, 并将该值push到normalStack
 */

import Stack from './stack';

class Browser {
  constructor() {
    this.normalStack = new Stack();
    this.backStack = new Stack();
  }

  push(url) {
    this.normalStack.push(url);
    this.backStack.clear();
  }

  /**
   * 首先需要判断当前页面是否在第一页, 也就是normalStack是否为空
   */
  back() {
    const url = this.normalStack.pop();

    if (url === -1) {
      console.log('当前在首页, 无法后退');
      return;
    }

    this.backStack.push(url);
  }

  /**
   * 首先需要判断当前页面是否在最后页, 也就是backStack是否为空
   */
  front() {
    const url = this.backStack.pop();

    if (url === -1) {
      console.log('当前已经在最后一页, 无法前进');
      return;
    }

    this.normalStack.push(url);
  }

  displayAll() {
    console.log('----------backStack:----------');
    this.backStack.display();
    console.log('----------normalStack:----------');
    this.normalStack.display();
  }
}

const browser = new Browser();

browser.push('baidu');
browser.push('taobao');
browser.push('tmall');
browser.push('wechat');
browser.displayAll();

console.log('**********');
browser.back();
browser.back();
browser.displayAll();

console.log('**********');
browser.front();
browser.displayAll();
