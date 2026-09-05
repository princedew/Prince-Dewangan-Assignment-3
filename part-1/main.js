const members = ["rahul", "aisha", "kabir"];

const expenses = [
  {
    id: 1,
    desc: "Milk",
    amount: 60,
    paidBy: "rahul",
    participants: ["rahul", "aisha", "kabir"],
  },
  {
    id: 2,
    desc: "Gas",
    amount: 960,
    paidBy: "aisha",
    participants: ["rahul", "aisha", "kabir"],
  },
  {
    id: 3,
    desc: "Wifi",
    amount: 840,
    paidBy: "rahul",
    participants: ["rahul", "aisha"],
  },
];

// --------------------
// -------------  1
// --------------------

// const totalPaid = (expenses, members) => {
//   let map = new Map();

//   expenses.forEach((expObj) => {
//     const name = expObj.paidBy
//     if (map.has(name)) {
//         map.set(name, map.get(name) + expObj.amount)
//     }else{
//         map.set(name, expObj.amount)
//     }
//   });

//   members.forEach((member) => {
//     if (!map.has(member)) {
//         map.set(member, 0)
//     }
//    })

//   return Object.fromEntries(map);
// };

// console.log(totalPaid(expenses, members));

// --------------------
// -------------  2
// --------------------

// function splitEvenly(noToSplit, splitInto) {
//   let split = noToSplit / splitInto;
//   split = Number(split.toFixed(0))
//   let splitSum = 0;
//   let ans = [];
//   for (let i = 1; i < splitInto; i++) {
//     splitSum += split
//     ans.push(split);
//   }
//   // console.log(splitSum);

//   let lastSplit = noToSplit - splitSum;
//   ans.push(lastSplit);

//   return ans;
// }

// console.log(splitEvenly(200, 3));


// --------------------
// -------------  3
// --------------------

// function totalOwed(expenses, members) {
//   let map = new Map();

//   members.forEach((member) => {
//     map.set(member, 0)
//    })

//   expenses.forEach((expObj) => {
//     let amount = expObj.amount;
//     let noOfParticipants = expObj.participants.length;
//     let perHead = amount / noOfParticipants

//     expObj.participants.forEach((participant) => {
//         map.set(participant, map.get(participant) + perHead)
//      })
//   });

//   return Object.fromEntries(map)
// }

// console.log(totalOwed(expenses, members));

// --------------------
// -------------  4
// --------------------

// const netBalance = (paid, owed) => {
//   let net = new Map();
//   let paidMap = new Map();

//   for (const name in paid) {
//     paidMap.set(name, paid[name]);
//   }

//   for (const name in owed) {
//     net.set(name, Number(paidMap.get(name)) - Number(owed[name]));
//     console.log(net);
//   }

//   return Object.fromEntries(net);
// };

// const netBal = netBalance(
//   { rahul: 900, aisha: 960, kabir: 0 },
//   { rahul: 760, aisha: 760, kabir: 340 },
// );

// console.log(netBal);

// --------------------
// -------------  5
// --------------------

// function balanceAddUp(userObj) {
//   let net = 0;

//   for (const name in userObj) {
//     net += userObj[name]
//     // console.log(net);
//   }

//   if (net == 0) {
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(balanceAddUp({ rahul: 140, aisha: 200, kabir: -300 }));

// --------------------
// -------------  6
// --------------------

// function findBiggestSpenderAmount(biggestSpender) {
//   let amount = null;
//   for (const name in biggestSpender) {
//     if (!amount) {
//       amount = biggestSpender[name];
//     }
//   }
//   return amount;
// }

// function findNameBiggestSpender(biggestSpender) {
//   let userName = "";
//   for (const name in biggestSpender) {
//     userName = name;
//   }
//   return userName;
// }

// function findBiggestSpender(userObj) {
//   let biggestSpenders = [];

//   let biggestSpender = null;

//   for (const name in userObj) {
//     if (!biggestSpender) {
//       biggestSpender = {};
//       biggestSpender[name] = userObj[name];
//     } else {
//       if (findBiggestSpenderAmount(biggestSpender) < userObj[name]) {
//         biggestSpender = {};
//         biggestSpender[name] = userObj[name];
//       }
//     }
//   }

//   for (const name in userObj) {
//     if (
//       userObj[name] === biggestSpender[findNameBiggestSpender(biggestSpender)]
//     ) {
//       biggestSpenders.push(name);
//     }
//   }

//   return biggestSpenders;
// }

// console.log(
//   findBiggestSpender({ rahul: 900, jay: 960, aisha: 960, kabir: 120 }),
// );

// --------------------
// -------------  7
// --------------------

// function byMember(expenses, name) {
//   let item = [];
//   expenses.forEach(expObj => {
//     if (expObj.paidBy === name || expObj.participants.includes(name)) {
//       item.push(expObj.desc)
//     }
//   });
//   return item;
// }

// console.log(byMember(expenses, "kabir"));

// --------------------
// -------------  8
// --------------------

// function search(expenses, str) {
//   let matchDesc = [];

//   expenses.forEach((expObj) => {
//     if (expObj.desc.toLowerCase().startsWith(str.toLowerCase())) {
//       matchDesc.push(expObj.desc);
//     }
//   });
//   return matchDesc
// }

// console.log(search(expenses, "g"));

// --------------------
// -------------  9
// --------------------

// function charInDesc(expObj, char) {
//   return expObj.desc.split("").includes(char)
// }

// function filterExpenses(expenses, obj) {
//   let expenseItem = []
//   if (obj.member === null || obj.search === "") {
//     expenses.forEach(expObj => {
//       expenseItem.push(expObj.desc)
//     });
//     return expenseItem
//   }else{
//     expenses.forEach((expObj) => {
//       if (expObj.participants.includes(obj.member) && charInDesc(expObj, obj.search)) {
//         expenseItem.push(expObj.desc)
//       }
//      })
//   }
//   return expenseItem
// }

// console.log(filterExpenses(expenses,  { member: "rahul", search: "i" }))

// --------------------
// -------------  10
// --------------------

// function makeSummary(expenses) {
//   let total = 0;
//   let count = 0;
//   let average = 0;
//   expenses.forEach(expObj => {
//     total += expObj.amount
//     count += 1
//   });
//   average = total /count;

//   return {total :total, count:count, average:average};
// }

// function summary(expenses) {
//   let obj = makeSummary(expenses);
//   let userObj = {}
//   expenses.forEach((expObj) => {
//     userObj[expObj.paidBy] = expObj.amount
//    })
//   obj.biggestSpender = findBiggestSpender(userObj);
//   return obj
// }

// console.log(summary(expenses));

// --------------------
// -------------  11
// --------------------

// const a = { x: 1 };
// const b = a;
// b.x = 2;
// console.log(a.x);            // 2

// const c = { x: 1, nested: { y: 1 } };
// const d = { ...c };
// d.x = 99;
// d.nested.y = 99;
// console.log(c.x);            // 99
// console.log(c.nested.y);     // 99

// const list = [1, 2, 3];
// const copy = list;
// copy.push(4);
// console.log(list.length);    // 3

// --------------------
// -------------  12
// --------------------

// const todos = [{ id: 1, done: false }, { id: 2, done: false }];

// function toggleDone(todos, id) {
//   todos.map(todo =>(
//     if (todo.id === id) {
//       todo.done ===true
//     }
//   ));
// }
// const next = toggleDone(todos, 2);

// console.log(next[0] === todos[0]);
// console.log(next[1] === todos[1]);

// --------------------
// -------------  13
// --------------------


// class MyArray {
//   constructor(array) {
//     this.array = array;
//   }

//   myFilter = function(fn){
//     let result = [];

//     for (let i = 0; i < this.array.length; i++) {
//       if(fn(this.array[i], i, this.array)){
//         result.push(this.array[i]);
//       }
//     }
//     return result;
//   }

//   myMap = function(fn) {
//     let result = [];

//     for(let i= 0; i< this.array.length; i++){
//       const val = fn(this.array[i], i, this.array);
//       result.push(val);
//     }
//     return result;
//   }

//   myReduce = function (fn, val) {
//     let result;
//     let startingIndex;
//     if (!val) {
//       result = this.array[0];
//       startingIndex = 1;
//     }else{
//       result = val;
//       startingIndex = 0;
//     }

//     for (let i = startingIndex; i < this.array.length; i++) {
//       const val = fn(result, this.array[i]);
//       result = val;
//     }
//     return result;
//   }

//   myForEach = function (fn) {
//     for (let i = 0; i < this.array.length; i++) {
//       this.array[i] = fn(this.array[i]);
//     }
//     return this.array;
//   }
// }

// let input = [1,2,3,4]

// let users = new MyArray(input);

// console.log(users.myFilter((num) => num%2 === 0));
// console.log(users.myMap((num) => num*2));
// console.log(users.myReduce((acc, cv) => acc+cv, 10));
// console.log(users.myForEach((e) => e/2));

// --------------------
// ------------- 14
// --------------------

// for (var i = 0; i < 3; i++) {
//   console.log(i);

//   setTimeout(() => console.log(i), 4000);
// }
// 0, 1, 2

// --------------------
// -------------  15
// --------------------

// let obj = { a: 1, b: { c: 2, d: [3, 4, { e: 4 }] }, f: "skip me" }

// let total= 0;

// function sum(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       total = total + obj[key]
//     }else if (typeof obj[key] === "object") {
//       sum(obj[key]);
//     }else if(Array.isArray(obj[key])) {
//       arraySum(key)
//     }
//   }
// }

// function arraySum(arr) {
//   arr.forEach(e => {
//     if (typeof e === "number") {
//       total+= e
//     }else if (typeof e === "object") {
//       sum(e)
//     }
//   });
// }

// sum(obj)

//// ---------------- METHOD : 2 ------------ CLEANER METHOD --------

// let arr = Object.entries(obj);

// function sum(arr) {
//   // console.log(1);

//   arr.forEach((e) => {
//     if (typeof e === "number") {
//       total += e
//     }else if (Array.isArray(e)) {
//      sum(e)
//     }else if (typeof e === "object"){
//       console.log(2, e);
//       let array = Object.entries(e);
//       console.log(2, array);
//       sum(array);
//     }
//    });
// }

// sum(arr)

// console.log(total);

// --------------------
// -------------  16
// --------------------

// let arr = [
//   {
//     id: 1,
//     text: "a",
//     replies: [
//       { id: 2, text: "b", replies: [{ id: 3, text: "c", replies: [] }] },
//     ],
//   },
//   { id: 4, text: "d", replies: [] },
// ];

// let ans = [];

// function findDepth(arr) {
//   return arr.map(({ replies, ...obj }) => ({
//     ...obj,
//     depth: replies ? replies.length : 0,
//   }));
// }

// function flattern(arr) {
  
// }


// console.log();

// --------------------
// -------------  17
// --------------------

// function sleep(i, ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(console.log(i));
//     }, ms);
//   });
// }

// async function stopwatch(sec) {
//   for (let i = 1; i <= sec; i++) {
//     await sleep(i, 1000);
//   }
// }

// stopwatch(20);
