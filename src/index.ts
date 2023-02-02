import { sumWithFor, sumWithReduce } from "./sum";

const numbers = [5, 10, 20, 5, 2];

console.log(sumWithReduce(...numbers));
console.log(sumWithFor(...numbers));