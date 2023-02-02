export const sumWithReduce = (...numbers: number[]): number => {
  return numbers.reduce((pre, curr) => pre + curr);
};

export const sumWithFor = (...numbers: number[]): number => {
  let total = 0;

  for (const number of numbers) total += number;

  return total;
};

export const sumWithWhile = (...numbers: number[]): number => {
  let total = 0;
  let i = numbers.length;

  while (i--) total += numbers[i];

  return total;
};