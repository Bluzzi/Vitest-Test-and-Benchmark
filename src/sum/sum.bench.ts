import { bench, BenchOptions } from "vitest";
import { sumWithReduce, sumWithFor, sumWithWhile } from "./sum";

const config: BenchOptions = { time: 1000 };

const numbers = [5, 10, 20, 5, 2];

bench("sum with reduce", () => {
  sumWithReduce(...numbers);
}, config);

bench("sum with for", () => {
  sumWithFor(...numbers);
}, config);

bench("sum with while", () => {
  sumWithWhile(...numbers);
}, config);