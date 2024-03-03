 "use strict";

// Task 1 ------------------------------------

 const colors = ['red', 'green', 'blue'];
 console.log(colors.length);

 // Task 2 -----------------------------------

 const animals = ['monkey', 'dog', 'cat'];
 console.log(animals[animals.length-1]);

 // Task 4 -----------------------------------

 const students = ['Polina', 'Dasha', 'Masha'];

 students.pop();
 students.push('Borya');
 students.shift();
 students.unshift('Andrey');
 console.log(students);

 // Task 5 -----------------------------------

 const cats = ['Gachito', 'Tom', 'Batman'];

 //The first option
 for (let i = 0; i < cats.length; i++) {
   console.log(cats[i]);
 }

 // The second option
 for (let cat of cats) {
   console.log(cat);
 }

 // Task 6 ------------------------------------

 const evenNumbers = [2, 4, 6, 8, 10];
 const oddNumbers = [1, 3, 5, 7, 9];

 const tenNumbers = evenNumbers.concat(oddNumbers);
 console.log(tenNumbers.indexOf(8));

 // Task 7 ------------------------------------

 const binary = [0, 0, 0, 0];
 console.log(binary.join('1'));

