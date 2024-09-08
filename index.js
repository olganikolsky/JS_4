function greet(name) {
  console.log('Привет, ' + name + '!');
}
greet('Надежда');

let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3));

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(6));

const add = (a, b) => a + b;
console.log(add(4, 6));

const square = (k) => Math.pow(k, 2);
console.log(square(8));

const sayHello = (name) => console.log('Привет, ' + name + '!');
sayHello('Тимур');

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // так и не поняла, как работают эти числа Фибоначчи, почему 1+0+1+1+0... выходит 5е число например, но поняла как работает рекурсия:)

function sum(N) {
  if (N === 1) {
    return 1;
  } else {
    return N + sum(N - 1);
  }
}
console.log(sum(10));

function creatCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = creatCounter();
console.log(counter());
console.log(counter());

function createSecret() {
  let secret = 'защищенное значение';
  return function () {
    console.log(secret);
  };
}
const outputSecret = createSecret();
outputSecret();

function createCounterWithInitial(n) {
  let first = n;
  return function () {
    first++;
    return first;
  };
}

const types = createCounterWithInitial(4);
console.log(types());
console.log(types());
console.log(types());
