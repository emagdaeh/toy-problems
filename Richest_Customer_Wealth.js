var maximumWealth = function(accounts) {
  let compare = [];

  for (let i = 0; i < accounts.length; i++) {
    let summed = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      summed += accounts[i][j];
    }
    compare.push(summed);
  }

  let result = compare[0];

  for (let k = 1; k < compare.length; k++) {
    if (compare[k] > result) {
      result = compare[k];
    }
  }

  return result;
};