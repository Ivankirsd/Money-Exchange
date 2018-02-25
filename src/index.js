// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency === 0) {
      return {};
    }

    if (currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let h = 0;
    let q = 0;
    let d = 0;
    let n = 0;
    let p = 0;

    let sum = currency;
    let money = [50, 25, 10, 5, 1];

    for (var i = 0; i < money.length; i++) {
      let value = Math.floor(sum/money[i]);
      setCoin(value, money[i]);
      sum = sum - value * money[i];
    }
    return getResult(h, q, d, n, p);

    function setCoin(value, coinType) {
      switch (coinType) {
        case 50:
          h = value;
          break;
        case 25:
          q = value;
          break;
        case 10:
          d = value;
          break;
        case 5:
          n = value;
          break;
        case 1:
          p = value;
          break;
        default:
      }
    }
}

function getResult(h, q, d, n, p) {
  let result = {};
  if (h>0) {
    result["H"] = h;
  }
  if (q>0) {
    result["Q"] = q;
  }
  if (d>0) {
    result["D"] = d;
  }
  if (n>0) {
    result["N"] = n;
  }
  if (p>0) {
    result["P"] = p;
  }
  return result;
}
