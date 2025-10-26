// 7. In an array of objects filter out those objects which have gender's value male.

// Sample Input:
let userArrayObject = [
  {
    fname: "ram",
    gender: "male",
  },
  { fname: "seeta", gender: "female" },
  { fname: "laxman", gender: "male" },
  { fname: "geeta", gender: "female" },
];


function maleGender(objArr) { // Function to filter male gender objects
  let filterArray = objArr.filter((obj) => { // Using filter method to filter objects
    return obj.gender === "male"; // Condition to check for male gender
  });
  return filterArray; // Returning the filtered array
}

maleGender(userArrayObject); // Calling the function with sample input
// Output:
// [ { fname: 'ram',
//    gender: 'male' },
//  { fname: 'laxman',
//   gender: 'male' } ]
console.log(maleGender(userArrayObject));
