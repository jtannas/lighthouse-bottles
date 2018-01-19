const assert = require("chai").assert;
const bottles = require("../bottles").bottles;

describe("bottles", function() {

  it("should exist", function() {
    assert.exists(bottles);
  });

  it("should be a function", function() {
    assert.isFunction(bottles);
  });

  it("should return an object", function() {
    assert.isObject(bottles());
  });

  it("should return 0 total give 0$", function() {
    const funds = 0;
    const result = bottles(funds);
    assert.strictEqual(result.total, 0);
  });

  it("should return 0 total give -10000$", function() {
    const funds = -10000;
    const result = bottles(funds);
    assert.strictEqual(result.total, -10000);
  });

  it("should return 15 total given 10$", function() {
    const funds = 10;
    const result = bottles(funds);
    assert.strictEqual(result.total, 15);
  });

  it("should return 35 total given 20$", function() {
    const funds = 20;
    const result = bottles(funds);
    assert.strictEqual(result.total, 35);
  });

  it("should return 55 total given 30$", function() {
    const funds = 30;
    const result = bottles(funds);
    assert.strictEqual(result.total, 55);
  });

  it("should return 75 total given 40$", function() {
    const funds = 40;
    const result = bottles(funds);
    assert.strictEqual(result.total, 70);
  });

  it("should return 37 bottles earned from bottles given 40$", function() {
    const funds = 40;
    const result = bottles(funds);
    assert.strictEqual(result.earned.bottles, 37);
  });

  it("should return 18 bottles earned from bottles given 40$", function() {
    const funds = 40;
    const result = bottles(funds);
    assert.strictEqual(result.earned.caps, 18);
  });

  it("should return 1 bottle remaining given 40$", function() {
    const funds = 40;
    const result = bottles(funds);
    assert.strictEqual(result.remaining.bottles, 1);
  });

  it("should return 3 caps remaining from bottles given 40$", function() {
    const funds = 40;
    const result = bottles(funds);
    assert.strictEqual(result.remainin.caps, 3);
  });
});
