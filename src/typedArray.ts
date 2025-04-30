type Constructor<T> = new (...args: any[]) => T;
type PrimitiveTypeString = (typeof PrimitiveTypes)[keyof typeof PrimitiveTypes];
type TypedArrayConfig<T> = {
  type: PrimitiveTypeString | Constructor<T>;
  length: number;
};
type TypedArrayObject = {
  [key: string | symbol]: PrimitiveTypeString | Function;
};

/**
 * Примитивные типы которые передаються в `TypedArrayConfig`
 */
var PrimitiveTypes = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  BigInt: "bigint",
  Symbol: "symbol",
  Undefined: "undefined",
  Null: "null",
} as const;
/**
 * Проверяет являеться ли value примитивны типом
 * @param {any} value
 * @returns {boolean}
 */
const isPrimitive = (value: any): boolean => {
  return Object.values(PrimitiveTypes).includes(typeof value);
};
/**
 *
 * @param {TypedArrayObject} source обьект который является
 * @param {{ [key: string]: any }} target
 * @returns
 */
const containsAllKeys = (
  source: TypedArrayObject,
  target: { [key: string]: any }
): boolean => {
  const targetKeys = Object.keys(target);
  return targetKeys.every((key) => key in source);
};

const containsAllValue = (
  source: TypedArrayObject,
  target: { [key: string]: any }
): boolean => {
  var noError = true;
  for (const key in target) {
    if (
      !typeValidation(
        target[key],
        source[key] as Function | PrimitiveTypeString
      )
    ) {
      noError = false;
    }
  }
  return noError;
};

const typeValidation = (
  value: any,
  type: TypedArrayObject | PrimitiveTypeString | Function
): boolean => {
  console.log(value instanceof type);

  const targetValueType = typeof value;
  return isPrimitive(value)
    ? targetValueType === type
    : typeof type === "function" && (value instanceof type || value === type);
};

export type { TypedArrayConfig, TypedArrayObject };
export {
  containsAllKeys,
  containsAllValue,
  PrimitiveTypes,
  typeValidation,
  isPrimitive,
};
