/* 44. Guess the Output: */

let date = new Date(0);
console.log(date.toString());

// Output:
// Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

// Explanation:
// The Date object in JavaScript represents a single moment in time in a platform-independent format.
// When you create a Date object with the argument 0, it represents the epoch time, which is January 1, 1970, 00:00:00 UTC.
// However, when you convert this date to a string using the toString() method, it converts the time to the local time zone of the environment where the code is executed.
// In this case, the local time zone is India Standard Time (IST), which is UTC+5:30.
// Therefore, the output shows the date and time adjusted to IST, resulting in "Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)".
// Note: The exact output may vary depending on the local time zone of the environment where the code is run.