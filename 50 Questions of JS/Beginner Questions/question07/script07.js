// 7. In an array of objects filter out those objects which have gender's value male.

let userArrayObject = [
  {
    fname: "ram",
    gender: "male",
  },
  { fname: "seeta", gender: "female" },
  { fname: "laxman", gender: "male" },
  { fname: "geeta", gender: "female" },
];

function maleGender(objArr) {
  let filterArray = objArr.filter((obj) => {
    return obj.gender === "male";
  });
  return filterArray;
}

maleGender(userArrayObject);
// Output:
// [ { fname: 'ram',
//    gender: 'male' },
//  { fname: 'laxman',
//   gender: 'male' } ]
console.log(maleGender(userArrayObject));
