const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers);
// console.log(numbers.reverse());

const rev_numbers = [];

// for (const num of numbers) {
//   rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  rev_numbers.unshift(num);
}

// ================

for (let i = numbers.length - 1; i >= 0; i--) {
  const num = numbers[i];
  console.log(num);
}
