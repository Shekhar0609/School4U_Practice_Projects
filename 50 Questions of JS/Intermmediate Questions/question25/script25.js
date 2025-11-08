// 25. Write a javascript function that returns a passed string with letters in alphabetical order.

function alpabeticalOrder(words) {
  return words.split(" ").sort().join(" ");
}

alpabeticalOrder("shekhar Narsimulu deekonda");
