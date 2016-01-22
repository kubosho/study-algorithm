"use strict";

const assert = require("assert");
const calcGCD = require("./index");

const gcd1 = calcGCD(12, 18);
const gcd2 = calcGCD(24, 14);
const gcd3 = calcGCD(12707, 12319);

assert.strictEqual(gcd1, 6);
assert.strictEqual(gcd2, 2);
assert.strictEqual(gcd3, 97);
