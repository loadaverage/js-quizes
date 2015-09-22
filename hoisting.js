var a = 'ten';

function foo () {
 a = 10;
 function a () {};
};
console.dir(
 a //ten
);
/**
 * Here function declaration 'function a'  is 'hoisted' to the top of 'foo' function;
 * afterwards, 'a' became a number. So 'a = 10' doesn't change global property ['a'];
 *
 * Implicitly this can be 'desugared' to:
 * 
 * var a;
 * a = 'ten';
 * var foo();
 *
 *  foo = function () {
 *   var a; //hoisted function declaration
 *   a = function () {};
 *   a = 10;
 *  };
 *
 **/
