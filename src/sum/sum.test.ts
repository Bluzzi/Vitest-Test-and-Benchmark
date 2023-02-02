import { expect, test } from "vitest";
import { sumWithFor, sumWithReduce, sumWithWhile } from "./sum";

const numbers = [5, 10, 20];
const result = 35;

test("sum with reduce", () => {
  expect(sumWithReduce(...numbers)).toBe(result);
  expect(sumWithReduce(5, 10, 20)).toBe(result);
});

test("sum with for", () => {
  expect(sumWithFor(...numbers)).toBe(result);
  expect(sumWithFor(5, 10, 20)).toBe(result);
});

test("sum with while", () => {
  expect(sumWithWhile(...numbers)).toBe(result);
  expect(sumWithWhile(5, 10, 20)).toBe(result);
});