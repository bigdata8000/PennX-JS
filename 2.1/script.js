var a = 4;
a++;                    // a = 5
var c = a - 3;          // 2
var d = c + 3 * a;      // 17
var e = ( c + 3 ) * a;  // 25


var firstName = 'John';
var lastName = 'Doe';

var fullName = firstName.concat(' ', lastName);     // 'John Doe'
var greeting = 'HELLO, ' + fullName;                // 'HELLO, John Doe'

console.log(greeing.toUpperCase());                 // 'HELLO, JOHN DOE'

console.log(greeting.length);                       // 15


/*
    Truthy values: 'cow', 'false', 5, etc...

    Falsy values: null, undefined, NaN, ''.
*/

var myArray = ['cars', 12, false];
// var age = myArray[1];

console.log(age);       // 12


//----------------------------------------------


var myArray2 = ['kart', 'bike'];

myArray2.push('scooter');       // add element at END of array, ie PUSH to END    
console.log(myArray2);          // kart,bike,scooter

myArray2.unshift('train');      // add element at START of array, ie UNSHIFT to START
console.log(myArray2);          // train,kart,bike,scooter


//----------------------------------------------

var myArray3 = ['train', 'car', 'bike', 'scooter'];

var vehicle = myArray3.pop();           // remove LAST element
console.log(vehicle);               //
console.log(myArray3);              // train,car,bike

vehicle = myArray3.shift();              // remove FIRST element
console.log(myArray3);              // car,bike


//----------------------------------------------




