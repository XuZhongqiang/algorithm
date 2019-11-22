### 完成 convert(list) 函数，实现将 list 转为 tree

### 面试官给的思路是深度优先遍历, 业务场景是'级联选择框' 或者 '城市搜索'
```!
// 输入以下数组, 输出一个树状结构的数据
const list = [
  {
    "id": 19,
    "parentId": 0,
  },
  {
    "id": 18,
    "parentId": 16,
  },
  {
    "id": 17,
    "parentId": 16,
  },
  {
    "id": 16,
    "parentId": 0,
  }
];

const result = convert(list, 0);
const tree = {
  "id": 0,
  "children": [
    {
      "id": 19,
      "parentId": 0
    },
    {
      "id": 16,
      "parentId": 0,
      "children": [
        {
          "id": 18,
          "parentId": 16
        },
        {
          "id": 17,
          "parentId": 16
        }
      ]
    }
  ]
}
```

### 解法
```js
function convert(list, rootValue) {
  /**
  * 思路: 将每个node放到parentId对应的桶中, 然后用node连接起来
  * 为了方便书写, 先将currentKey用id替换
  */
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    const { parentId, id } = element;
    
    if (!arr[id]) {
      arr[id] = element;
    } else {
      // 如果走到else, 说明这个位置的元素是在下面的arr[parentId]生成的
      // 为了保持node之间的引用, 所以需要重置引用
      element.children = arr[id].children;
      arr[id] = element;
    }

    let parent = arr[parentId];
    
    if (!parent) {
      arr[parentId] = parent = {
        id: parentId,
        children: [element]
      }
    } else if (!Array.isArray(arr[parentId].children)) {
      arr[parentId].children = [element];
    } else {
      arr[parentId].children.push(element);
    }

  }
  
  const tree = arr.find(node => node.id === rootValue);
  console.log(tree, '------');
  return tree;
}
```