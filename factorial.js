/**
 * Factorial sequence in `for` loop
 * @param {Number} n - number to calculate
 * @return {Number} calculated value for !n
 */

function fact_for(n) {
  for (var i = 1, x = 1; i <= n; i++) {
    x = x * i;
  }
  return x;
}
console.log('fact_for(4): %d', fact_for(4)); //fact_for(4): 24

/**
 * Factorial sequence using `for` loop with memoization
 * @param {Number} n - value to calculate
 * @return {Number} calculated value for !n
 */

function fact(n) {
  for (
    var cache = [1];
    cache.length <= n;
    cache[cache.length] = cache[cache.length-1] * (cache.length)
  );
  return cache[n];
}
console.log('fact(5): %d', fact(5)); //fact(5): 120

/**
 * Factorial sequence using Array.prototype.reduce method
 * @param {Number} n - value to calculate
 * @return {Number} calculated value for !n
 *
 * Credits: http://ariya.ofilabs.com/2013/07/prime-numbers-factorial-and-fibonacci-series-with-javascript-array.html
 * [].reduce on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

function fact_reduce(n) {
  return Array
   .apply(null, Array(n))
   .reduce(function (iv, cv, ci) {
     return iv + iv * ci;
   },1);
}
console.log('fact_reduce(6): %d', fact_reduce(6)); //fact_reduce(6): 720

/**
 * Factorial sequence using Array.prototype.map method
 * @param {Number} n - value to calculate
 * @return {Number} calculated value for !n
 *
 * Array.prototype.map on MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

function fact_map(n) {
 //"fix" array to proper length
 n++;
 return Array
  .apply(null, Array(n))
  .map(function (el, ind, array) {
    if (ind <= 1) {
      return array[ind] = 1;
    }
    return array[ind] = array[ind-1] * ind;
  })
  //"fix" again to correct value
  [--n];
}
console.log('fact_map(7) %d', fact_map(7)); //fact_map(7) 5040

/**
 * Factorial sequence in recursion
 * @param {Number} n - value to calculated
 * @return {Number} calculated value for !n
 */

function fact_r(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n * fact_r(n-1);
  }
}
console.log('fact_r(8): %d', fact_r(8)); //fact_r(8): 40320

/**
 * Factorial sequence in recursion with memoization,
 * although this is not necessary, just for fun.
 * @param {Number} n - value to calculate
 * @return {Number} calculated value for !n
 */

function fact_rm(n) {
  //initialize cache storage for values for possible multiple calls of f(n);
  var cache = [];

  function f(num) {
    if (num <= 1) {
      return cache[num] = num;
    } else if (cache[num]) {
      return cache[num];
    } else {
      return cache[num] = num * f(num-1);
    }
  }
  return f(n);
}
console.log('fact_rm(9): %d', fact_rm(9)); //fact_rm(9): 362880


