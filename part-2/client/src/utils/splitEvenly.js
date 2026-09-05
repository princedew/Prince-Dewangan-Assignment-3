export function splitEvenly(noToSplit, splitInto) {
  let split = noToSplit / splitInto;
  split = Number(split.toFixed(2))
  let splitSum = 0;
  let ans = [];
  for (let i = 1; i < splitInto; i++) {
    splitSum += split
    ans.push(split);
  }
  console.log(splitSum);

  let lastSplit = noToSplit - splitSum;
  ans.push(lastSplit);

  return ans;
}