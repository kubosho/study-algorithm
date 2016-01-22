"use strict";

module.exports = function calcGCD(a, b) {
  if (a > b) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  const res1 = a % b;
  const res2 = b % res1;

  if (res2 === 0) {
    return res1;
  }

  return calcGCD(res1, res2);
};
