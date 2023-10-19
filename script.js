// 1. Declare an array called fruits containing the names of three different fruits. Then, write a function printFruits that takes the fruits array as an argument and prints each fruit to the console.

const fruits = ["orange", "grapes", "mango"];

const outPutFruits = (fruits) => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
};

outPutFruits(fruits);

// 2. Declare three variables: name (a string), age (a number), and isStudent (a boolean). Assign values to these variables and then print them to the console.

const name1 = "Dhiraj";
const age = 24;
const isStudent = true;
console.log(name1);
console.log(age);
console.log(isStudent);

// 3. Write a function add that takes two numbers as arguments and returns their sum.

const sum = (name01, name02) => {
  return console.log(`Sum = ${name01 + name02}`);
};

sum("Dhiraj", "kumar");
sum(11, 22);

// 4. Write a function reverseString that takes a string as input and returns the string reversed.

// Not Using Reverse Method

const strReverse = (str) => {
  console.log(`The Original String : ${str}`);
  const splitArr = str.split("");
  const reverseArr = [];
  for (let i = splitArr.length - 1; i >= 0; i--) {
    reverseArr.push(splitArr[i]);
  }
  console.log(`The Reverse String : ${reverseArr.join("")}`);
};

strReverse("Dhiraj Developer");

// Using Reverse Method

const strsReverse = (str) => {
  console.log(`The Original String : ${str}`);
  const splitArr = str.split("");
  const reverseArr = splitArr.reverse();
  const joinArr = reverseArr.join("");
  console.log(`The Reverse String : ${joinArr}`);
};

strsReverse("Dhiraj Developer");

// 5. Write a function findMax that takes an array of numbers as input and returns the largest number in the array.

const Num1 = (arr = []) => {
  arr.sort(function (a, b) {
    return b - a;
  });
  console.log(`Max Num = ${arr[0]}`);
};

Num1([11, 4, 55, 777, , 743, 4545]);

//  6. Create an object called person with properties name,age, and city. Then, write a function printPerson that takes the person object as input and prints out a message like &quot;John is 30 years old and lives in New York.&quot;

const details = {
  name: "Dhiraj",
  age: 24,
  city: "bangalore",
};

const joinFun = () => {
  console.log(
    `${details.name} is ${details.age} years old and lives in ${details.city}`
  );
};

joinFun();

// 7. Write a function isEven that takes a number as input and returns true if the number is even and false if it&#39;s odd.

const isEven = (num) => {
  if (num % 2 === 0) {
    console.log(`The Given num ${num} is Even Number`);
  } else {
    console.log(`The Given num ${num} is Odd Number`);
  }
};

isEven(77);

// 8. Write a function sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

let all = 0;
const sumOfArr = (arr = []) => {
  for (let i = 0; i < arr.length; i += 1) {
    all = all + arr[i];
  }
  console.log(`The Total = ${all}`);
};

sumOfArr([-2, 0, 2, 7, 6, 187]);

// 9. Write a function countVowels that takes a string as input and returns the count of vowels (a, e, i, o, u) in the string, regardless of case.

const vowel = (str) => {
  let splitArr = str.toLowerCase().split("");
  let vowelArr = [];

  for (let i = 0; i < splitArr.length; i += 1) {
    if (splitArr[i] === "a") {
      vowelArr.push(splitArr[i]);
    } else if (splitArr[i] === "e") {
      vowelArr.push(splitArr[i]);
    } else if (splitArr[i] === "i") {
      vowelArr.push(splitArr[i]);
    } else if (splitArr[i] === "o") {
      vowelArr.push(splitArr[i]);
    } else if (splitArr[i] === "u") {
      vowelArr.push(splitArr[i]);
    } else {
      continue;
    }
  }
  console.log(`The Vowel letter : ${vowelArr}`);
};

vowel(`Dhiraj`);

//   10. Write a function mergeObjects that takes two objects as input and returns a new object that is a combination of both objects.

const obj1 = {
  name: "dhiraj",
  age: 23,
};

const obj2 = {
  city: "bangalore",
  job: "Software engineer",
};

const mergeObj = () => {
  const obj3 = {
    ...obj1,
    ...obj2,
  };
  console.log(obj3);
};

mergeObj();
