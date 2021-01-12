// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//   if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//     console.log("ChickenMonkey"); 
//   } else if (currentNumber % 7 === 0) {
//     console.log("Monkey");
//   } else if (currentNumber % 5 === 0) {
//     console.log("Chicken");
//   } else {
//     console.log(currentNumber);
//   }
// }

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0;

function takeNumber(bandName) {
  bandNumber++;
  return bandNumber + "." + " " + bandName;
}

const scum = takeNumber("Galactic Scum");
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console