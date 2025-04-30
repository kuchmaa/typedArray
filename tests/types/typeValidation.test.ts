import { expect, test } from "bun:test";
import {
  containsAllKeys,
  containsAllValue,
  PrimitiveTypes,
  typeValidation,
  type TypedArrayObject,
} from "../../src/typedArray";

const source: TypedArrayObject = {
  number: PrimitiveTypes.String,
  con: Function,
};
const obj = {
  number: "asd",
  con: () => {},
};

test("typeValidation", () => {
  expect(typeValidation(123, PrimitiveTypes.Number)).toBe(true);
  expect(typeValidation("ddd", PrimitiveTypes.String)).toBe(true);
});

test("containsAllValue", () => {
  expect(containsAllValue(source, obj)).toBe(true);
});

test("containsAllKeys", () => {
  expect(containsAllKeys(source, obj)).toBe(true);
});

test("Object validation", () => {
  expect(containsAllKeys(source, obj) && containsAllValue(source, obj)).toBe(
    true
  );
  var noValidValue = {
    number: 123,
    con: () => {},
  };
  expect(
    containsAllKeys(source, noValidValue) &&
      containsAllValue(source, noValidValue)
  ).toBe(false);
  var noValidKey = {
    strasd: "123",
    con: () => {},
  };
  expect(
    containsAllKeys(source, noValidKey) && containsAllValue(source, noValidKey)
  ).toBe(false);
});

test("Class validation", () => {
  class TestClass {
    name: string = "";
    age: number = 0;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  const testObj = new TestClass("msxim", 13);
  expect(
    containsAllKeys(TestClass, testObj) && containsAllValue(TestClass, testObj)
  ).toBe(true);
});
