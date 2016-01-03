/**
 * Fibonacci sequence in `for` loop with memoization
 * @param {Number} n - number to calculate
 * @return {Number} - value of `n` position
 */

function fib_for(n) {
  for(
    var a = [0, 1];
    a.length <= n;
    a[a.length] = a[a.length-1] + a[a.length-2]
    );
  return a[n];
}
console.log('fib_for(5): %d', fib_for(5));//fib(5): 5

/**
 * Fibonacci sequence in `while` loop with memoization
 * @param {Number} n - number to calculate
 * @return {Number} - value of `n` position
 */

function fib_while(n) {
  var a = [0, 1];
  while(a[a.length] = a[a.length - 1] + a[a.length - 2], a.length <= n);
  return a[n];
}
console.log('fib_while(6): %d', fib_while(6));//fib_while(6): 8

/**
 * Fibonacci sequence in plain `for` loop
 * @param {Number} n -  number to calculate
 * @return {Number} - value of `n` position
 *
 * Due limitation, maximum number precision in JS/Node is (2^53)-1 on x64
 * So for accuracy position `n` must be lower than 79
 */

function fib(n) {
  if (n <= 1) { return n; }
  for(var x = 0, y = 1, z; --n;) {
    z = y;
    y = x + y;
    x = z;
  }
  return y;
}
console.log('fib(7): %d', fib(7));//fib(7): 13

/**
 * Fibonacci sequence in recursive form
 * @param {Number} n - number to calculate
 * @return {Number} - value of `n` position
 *
 * Takes 3672623805 function calls and ~20 sec on t2.micro for fib_re(45)
 */

function fib_rec(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib_rec(n-1) + fib_rec(n-2);
  }
}
console.log('fib_rec(8): %d', fib_rec(8));//fib_rec(8): 21

/**
 * Fibonacci sequence if recursive with memoization
 * @param {Number} n - number to calculate
 * @return {Number} - value of `n` position
 */

function fib_recm(n) {
  var cache = [];
  function fib(num) {
    if (num <= 1) {
      return cache[num] = num;
    } else if (cache[num]) {
      return cache[num];
    } else {
      return cache[num] = fib(num-1) + fib(num-2);
    }
  }
  return fib(n);
}
console.log('fib_recm(9): %d', fib_recm(9));//fib_recm(9): 34
