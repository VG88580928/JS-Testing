// 第一題
function fibonacci(position) {
  let temp,
    a = 0, // 第 0 個數字
    b = 1; // 第 1 個數字

  for (let i = 0; i < position; i++) {
    temp = b;
    b += a;
    a = temp;
  }

  return a;
}

// 第二題
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;

    this.head = this.head.next;
    return temp.data;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

// 第三題
const userIds = ['U01', 'U02', 'U03'];

const orderIds = ['T01', 'T02', 'T03', 'T04'];

const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
];
const userData = { U01: 'Tom', U02: 'Sam', U03: 'John' };

const orderData = {
  T01: { name: 'A', price: 499 },
  T02: { name: 'B', price: 599 },
  T03: { name: 'C', price: 699 },
  T04: { name: 'D', price: 799 },
};

function dataProcessing() {
  let result = [];
  let l = userIds.length;

  let userObjs = Object.entries(userData).map(([id, name]) => ({
    id: id,
    name: name,
  }));

  let ordersIds = userOrders.map((obj) => obj.orderIds);

  for (let i = 0; i < l; i++) {
    let obj = {};
    let arr = [];
    obj.user = userObjs[i];

    obj.orders = arr;

    for (let j = 0; j < ordersIds[i].length; j++) {
      let obj2 = {};
      let orderId = ordersIds[i][j];
      obj2.id = orderId;
      obj2.name = orderData[orderId].name;
      obj2.price = orderData[orderId].price;

      obj.orders.push(obj2);
    }

    result.push(obj);
  }

  return result;
}

const result = dataProcessing();

console.log(result);

// 輸出結果:
// const result = [
// {
// 	user: { id: 'U01', name: 'Tom' },
// orders: [
// { id: 'T01', name: 'A', price: 499 },
// { id: 'T02', name: 'B', price: 599 },
// ],
// },
// …,
// ]
