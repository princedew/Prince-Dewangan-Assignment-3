export function summary(members, expenses) {
  let obj = makeSummary(expenses);
  let userObj = {}
  expenses.forEach((expObj) => {
    userObj[expObj.paidBy] = expObj.amount
   })
  obj.biggestSpender = findBiggestSpender(members, expenses);
  return obj
}

export function makeSummary(expenses) {
  let total = 0;
  let count = 0;
  let average = 0;
  expenses.forEach(expObj => {
    total += expObj.amount
    count += 1
  });
  average = total /count;

  return {total :total, count:count, average:average};
}

export function findBiggestSpender(members, expenses) {
  const totalSpent = {};

  for (const member of members) {
    totalSpent[member.id] = 0;
  }

  for (const expense of expenses) {
    const splitAmounts = splitEvenly(
      expense.amount,
      expense.participants.length
    );

    expense.participants.forEach((participant, index) => {
      totalSpent[participant.id] += splitAmounts[index];
    });
  }

  let biggestSpender = null;
  let maxAmount = 0;

  for (const member of members) {
    if (totalSpent[member.id] > maxAmount) {
      maxAmount = totalSpent[member.id];

      biggestSpender = {
        ...member,
        totalSpent: maxAmount
      };
    }
  }

  return biggestSpender;
}

export function splitEvenly(noToSplit, splitInto) {
  let split = noToSplit / splitInto;

  split = Number(split.toFixed(0));

  let splitSum = 0;
  let ans = [];

  for (let i = 1; i < splitInto; i++) {
    splitSum += split;
    ans.push(split);
  }

  let lastSplit = noToSplit - splitSum;
  ans.push(lastSplit);

  return ans;
}


export function search(desc, str) {
  if (str === "") {
    return true;
  }
 return desc.toLowerCase().includes(str.toLowerCase());
}