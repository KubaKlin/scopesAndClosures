// 1
function getDeltaFunction(deltaObject) {
  return function(subDelta = {}) {
    const delta = {...deltaObject, ...subDelta}
    return  delta.b * delta.b - 4 * delta.a * delta.c;
  }
}

// delta = b*b - 4*a*c
const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48

// The nested function returns NaN if any of the arguments are missing
console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
console.log(getDeltaFunction({ a: 1, c: 3 })({ b: 15 })); // 213

// 2
function positiveSum(numbers) {
  let numbersSum = 0;

  numbers.forEach(function(number) {
    if (number > 0) {
      numbersSum = numbersSum + number;
    }
  })

  return numbersSum;
}

console.log(positiveSum([1, 5, 10]));
console.log(positiveSum([-1, 5, -10]));

// 3
function countSheep(shed) {
  return shed.filter(Boolean).length;
}

const shed = [true, false, true, false, true];
console.log(countSheep(shed)); //3

// 4
function findNeedle(haystack) {
  const needle = (el) => el === "needle";
  const index = haystack.findIndex(needle);
  return 'found the needle at position ' + index;
}

const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(findNeedle(haystack));

// 5
function doubleNumbers(numbers){
  return numbers.map(function(number) {
    return number * 2;
  })
}

console.log(doubleNumbers([1, 2, 3]));

// 6
function invertNumbers(numbers) {
  return numbers.map(function(number) {
    return number * -1;
  })
}

console.log(invertNumbers([1, -2, 3, -4, 5]));

// 7
function getAverage(marks){
  let averageMarks = 0;

  marks.forEach(function(mark) {
    averageMarks += mark;
  })

  return Math.floor(averageMarks / marks.length);
}

console.log(getAverage([3, 4, 5]));

// 8
function isStringInArray(array) {
  return !!array.find(function(string) {
    return typeof string === 'string';
  })
}

console.log(isStringInArray([4, 'Orange'], 'Apple')); // true
console.log(isStringInArray([3, 4], 'Potato')); // false

// 9
function forEach(array, callback) {
  for (let i = 0; i < array.length; ++i) {
    callback(array[i], i.toString());
  }
}

const vegetables = ['Carrot', 'Cabbage', 'Onion'];

function printVegetable(vegetable, index) {
  console.log(vegetable, index);
}

forEach(vegetables, printVegetable);
// Carrot 0
// Cabbage 1
// Onion 2

const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(fruits,
  function(fruit, index) {
    console.log(fruit, index);
  }
);
// Apple 0
// Orange 1
// Watermelon 2

// 10
function executeAfterFiveSeconds(callback) {
  setTimeout(() => {
    callback();
  }, 5000);
}

function sayHello() {
  console.log('Hello!');
}

executeAfterFiveSeconds(sayHello);

// 11
function getRandomIntegerGenerator(firstNumber, secondNumber) {
  const subtraction = (secondNumber - firstNumber);
  return Math.floor(Math.random() * subtraction) + firstNumber;
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigit); // random number between 0 and 9

console.log(getRandomIntegerGenerator(-10, 10)); // random number between -10 and 10

// 12
function findObjectProperty(object, getProperty) {
  let searchedValue;

  Object.keys(object).forEach(function(key) {
    if (getProperty(object[key])) {
      searchedValue = key;
    }
  })

  return searchedValue;
}

const redApple = {
  color: 'red',
  weightInGrams: 150
}

const propertyName = findObjectProperty(redApple, function(propertyValue) {
  return propertyValue === 'red';
})
console.log(propertyName); // color

const john = {
  name: 'John',
  bestFriend: {
    name: 'Adam'
  }
}

const adamPropertyName = findObjectProperty(john, function(propertyValue) {
  return propertyValue && propertyValue.name === 'Adam';
})
console.log(adamPropertyName); // bestFriend

// 13
function getRandomCharacterGenerator(string) {
  const randomCharacter = Math.random() * string.length
  return string.charAt(Math.floor(randomCharacter));
}

const getRandomNumber = getRandomCharacterGenerator('0123456789');

console.log(getRandomNumber); // returns a random string that contains a single digit

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC); // returns a random string that is a, A, b, B, c, or C

// 14
function getPrefixedStringGenerator(prefix) {
  return function(string) {
    return prefix + string
  };
}

const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam

const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie

const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair