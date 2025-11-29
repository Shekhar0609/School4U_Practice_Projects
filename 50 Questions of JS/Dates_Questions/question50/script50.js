/* 50. What are the different options and parameters available in toLocaleString and toLocaleDateString etc to
format date. */

const date = new Date("2024-06-15T12:30:00Z");

// Using toLocaleString with options
const options1 = {
  weekday: "long", // "Saturday"
  year: "numeric", // "2024"
  month: "long", // "June"
  day: "numeric", // "15"
  hour: "2-digit", // "12 PM"
  minute: "2-digit", // "30"
  timeZoneName: "short", // "UTC"
};
const formattedDate1 = date.toLocaleString("en-US", options1);
console.log(formattedDate1); // Output: "Saturday, June 15, 2024, 12:30 PM UTC"


// Using toLocaleDateString with options
const options2 = {
  year: "2-digit", // "24"
  month: "2-digit", // "06"
  day: "2-digit", // "15"
};
const formattedDate2 = date.toLocaleDateString("en-GB", options2); // Using British English locale
console.log(formattedDate2); // Output: "15/06/24"


// Using toLocaleTimeString with options
const options3 = {
  hour: "numeric", // "1 PM"
  minute: "numeric", // "30"
  second: "numeric", // "00"
  hour12: true, // 12-hour format
};
const formattedDate3 = date.toLocaleTimeString("en-US", options3);
console.log(formattedDate3); // Output: "1:30:00 PM"

// You can customize the options to get different formats as per your requirements.
// Note: The output may vary based on the locale and time zone settings of the environment.