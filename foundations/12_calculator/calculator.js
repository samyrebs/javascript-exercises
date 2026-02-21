const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((sum, current) => sum * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let temp = 1;
	for(let i = 1; i <= num; i++){
    temp = temp * i;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
