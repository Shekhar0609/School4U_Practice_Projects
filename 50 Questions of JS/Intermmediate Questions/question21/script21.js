// 21. Create a function that reverse each word of a given sentence.
// E.g., Mai hun manas → sanam nuh iam

let sentance = "APURVIKA";

function reverseFunction(words) {
  let wordArray = Array.from(words);
  return wordArray.reverse().join("");
}

reverseFunction(sentance); // sanam nuh iam
console.log(reverseFunction(sentance));
