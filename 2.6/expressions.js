var name = 'toucan';

name.length;        // 6
name.charAt(3);     // c
name[3];            // c

// JS strings are immutable!

var animal = 'cat';

animal[0] = 'r';
console.log(animal);    // still 'cat'


// can modify strings

var friend = 'turtle';

friend.toUpperCase();       // 'TURTLE'
console.log(friend);        // 'turtle'


//--------------------------------------------------------

var message = ' hello everyone ';
message = message.trim();       // 'hello everyone' 


//--------------------------------------------------------


var myAnimal = 'cat'.concat('mouse');
console.log(myAnimal);      // 'catmouse'


//--------------------------------------------------------

var msg = 'programming in JavaScript is fun';

msg.startsWith('programming');      // true
msg.startsWith('PROGRAMMING');      // false

msg.endsWith('is fun');             // true

msg.includes('JavaScript');         // true


//--------------------------------------------------------


var title = 'the title of my book';
var start = title.search('title');      // 4, the starting position of your search item

start = title.search('banana');         // -1, does not have the search item


//--------------------------------------------------------

/*
    Regular Expressions
*/

var status = 'I am working VERY hard';

status.search(/VERY/);      // 13, starting position
status.search(/very/);      // -1, not found, ie is case sensative

status.search(/very/i);     // 13, ignore case


//--------------------------------------------------------


var numbers = '5 8 2 5 7 6';
numbers.search(/[012]/);        // 4


//--------------------------------------------------------


var password = 'password4real';

password.search(/[a-z]/);       // 0, position of first match
password.search(/\d/);          // 8, position of first digit, \d 


//--------------------------------------------------------


var code = 'abc123d4e5';
code.search(/[0-9] [a-z] [0-9]/);       // 5


//--------------------------------------------------------

/*
    search characters NOT in a range
*/

var chars = 'abc123K456';
chars.search(/[^0-9a-z]/);      // 6, K is ^ in the search criteria


//--------------------------------------------------------


