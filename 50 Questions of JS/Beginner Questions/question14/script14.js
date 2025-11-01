// 14. Build a simple isPrime() function to check if a number is prime.

// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
function isPrime(num) {
  // check if num is prime
  if (num <= 1) return false; // numbers less than or equal to 1 are not prime

  // check for factors from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // optimization: check up to sqrt(num)

    // check if i is a divisor of num
    if (num % i === 0) {
      // found a divisor
      return false; // found a divisor, not prime
    }
  }
  return true; // no divisors found, is prime
}

isPrime(11); // true
isPrime(4); // false

console.log(isPrime(5), isPrime(4));
