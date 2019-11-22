### 完成 convert(list) 函数，实现将 list 转为 tree

### 面试官给的思路是深度优先遍历, 业务场景是'级联选择框' 或者 '城市搜索'
```js
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