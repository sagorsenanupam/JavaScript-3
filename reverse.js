const sentence = "I am learning Web Dev.";

// let reverse = "";
// for (const letter of sentence) {
//   reverse = letter + reverse;
// }
// console.log(reverse);
let reverse = "";
for (i = 0; i < sentence.length; i++) {
  let letter = sentence[i];
  reverse = letter + reverse;
}
console.log(reverse);
