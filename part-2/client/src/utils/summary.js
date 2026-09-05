import { findBiggestSpender } from "./biggestSpender";

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

export function summary(expenses) {
  let obj = makeSummary(expenses);
  let userObj = {}
  expenses.forEach((expObj) => {
    userObj[expObj.paidBy] = expObj.amount
   })
  obj.biggestSpender = findBiggestSpender(userObj);
  return obj
}