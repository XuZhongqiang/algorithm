class HashTable {
  constructor() {
    this.table = [];
  }

  // 散列函数
  loseHashCode(key) {
    let hash = 0;
    hash = key.split('').reduce((hash, cur) => {
      // 从ASCII表中查到的ASCII值加到hash中
      return hash + cur.charCodeAt(0);
    }, hash);

    // 为了得到比较小的数值，我们会用hash和任意数除余
    return hash % 37;
  }

   //向散列表增加一个新的项
   put(key,value) {
     const hash = this.loseHashCode(key);
     this.table[hash] = value;
   }

   //根据键从散列表删除值
   remove(key) {
     const hash = this.loseHashCode(key);
     this.table[hash] = undefined;
   }

   //返回根据键值检索到的特定的值
   get(key){
    const hash = this.loseHashCode(key);
    return this.table[hash];
   }

   print(){
     for (let i = 0; i < this.table.length; i++) {
       if (this.table[i] !== undefined) {
         console.log(`key: ${i}, value: ${this.table[i]}`);
       }
     }
   }
}

const hashTable = new HashTable();

hashTable.put('a', '1');
hashTable.put('b', '2');
hashTable.put('c', '3');
hashTable.put('d', '4');
hashTable.put('abc', '5');
hashTable.put('deh', '6');
hashTable.print();