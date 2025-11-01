// 14. Build a simple isPrime() function to check if a number is prime.

function isPrime(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true; 
}

isPrime(11); // true
isPrime(4); // false

console.log(isPrime(3), isPrime(4));
