import {
  containsAllValue,
  PrimitiveTypes,
  type TypedArrayObject,
} from "./typedArray";
import { performance } from "perf_hooks";

const source: TypedArrayObject = {
  number: PrimitiveTypes.Number,
  con: Function,
};
const obj = {
  number: 123,
  con: "asd",
};

const start = performance.now();

var value = containsAllValue(source, obj);

const end = performance.now();
console.log(`Время выполнения: ${end - start} мс`, value);

// Пример использования:

// // Используем конструктор типа Number
// const numArray = new TypedArray<number>(
//   {
//     type: Number, // Конструктор типа `Number`
//     length: 5,
//   },
//   [1, 2, 3]
// );

// console.log(numArray); // [1, 2, 3, null, null]
// console.log(numArray.type); // function Number() { [native code] }

// // Используем конструктор типа String
// const strArray = new TypedArray<string>(
//   {
//     type: String, // Конструктор типа `String`
//     length: 5,
//   },
//   ["hello", "world"]
// );

// console.log(strArray); // ["hello", "world", null, null, null]
// console.log(strArray.type); // function String() { [native code] }

// // Используем конструктор типа Object
// const objArray = new TypedArray<object>(
//   {
//     type: Object, // Конструктор типа `Object`
//     length: 3,
//   },
//   [{ id: 1 }, { id: 2 }]
// );

// // console.log(objArray); // [{ id: 1 }, { id: 2 }, null]
// // console.log(objArray.type); // function Object() { [native code] }

// console.log(numArray.filledLength);

// for (const item of numArray) {
//   console.log(item); // 1, 2, 3, null, null
// }
