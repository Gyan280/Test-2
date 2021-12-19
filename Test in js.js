const numbers = new Array(1,2,6,5,3,2,1,4,5,2,1,6);

const counts = {};

for (const i of numbers) {
  counts[i] = counts[i] ? counts[i] + 1 : 1;
}

console.log(counts[2]);

console.log(numbers);