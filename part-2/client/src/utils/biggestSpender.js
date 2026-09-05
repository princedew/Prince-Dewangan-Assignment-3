function findBiggestSpenderAmount(biggestSpender) {
  let amount = null;
  for (const name in biggestSpender) {
    if (!amount) {
      amount = biggestSpender[name];
    }
  }
  return amount;
}

function findNameBiggestSpender(biggestSpender) {
  let userName = "";
  for (const name in biggestSpender) {
    userName = name;
  }
  return userName;
}

export function findBiggestSpender(userObj) {
  let biggestSpenders = [];

  let biggestSpender = null;

  for (const name in userObj) {
    if (!biggestSpender) {
      biggestSpender = {};
      biggestSpender[name] = userObj[name];
    } else {
      if (findBiggestSpenderAmount(biggestSpender) < userObj[name]) {
        biggestSpender = {};
        biggestSpender[name] = userObj[name];
      }
    }
  }

  for (const name in userObj) {
    if (
      userObj[name] === biggestSpender[findNameBiggestSpender(biggestSpender)]
    ) {
      biggestSpenders.push(name);
    }
  }

  return biggestSpenders;
}