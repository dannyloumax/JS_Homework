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
 for (let item of cats) {
   console.log(item);
 }