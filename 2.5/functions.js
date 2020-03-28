var nums = [ 4, 8, 12, 2, 32];

function myPrint(n) {           // myPrint if your programme/function name
    console.log(n);             // console.log it
}

nums.forEach(myPrint);          // your varName, forEach, apply your function


//--------------------------------------------------------

function isEven(n) {
    return n % 2 == 0;
}

nums.every(isEven);     // true, every element in the array is divisable by 2.


//--------------------------------------------------------


function square(n) {
    return n * n;
}

var squares = nums.map(square);     // [16, 64, 144, 4]


//--------------------------------------------------------


var johnDoe = {
    name: 'John Doe',
    age: '32',
    greeting: function () {
        return 'Hello! Nice Meeting You!';
    }
}

console.log(johnDoe.greeting());


//--------------------------------------------------------


