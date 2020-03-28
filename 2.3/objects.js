var person = {
    name: 'John Doe',
    age: 25,
    isMale: true,
    personality: ['patient', 'loyal', 'happy'],
    company: {name: 'edx', id: 2984}
}

console.log(person.age);                // 25
console.log(person['company'].id)       // 2984


//---------------------------------------------------

var pet = {
    name: 'Cooper',
    type: 'dog'
}

console.log(pet.age);           // undefined
pet.age = 11;
console.log(pet.age);           // 11

pet['status'] = 'good boy';
console.log(pet.status);        // good boy


//---------------------------------------------------

/*

    == equal to
    === equal to and same type
    != not equal to
    !== not equal to or diff type
    > gretaer than
    >= gretaer than or equal to
    < less than
    <= less than or equal to

    || logical OR
    && logical AND
    ! logical NOT

*/

1 == '1'    // true, JS will convert string to number
1 === '1'   // flase! diff type

5 < '20'    // true
'5' < 20    // true

5 > 'alligator' // false
5 < 'alligator' // also false!

'zebra' > 'giraffe' // true, z is larger than g


//---------------------------------------------------

/*
    LOOPS
*/

for (var i = 1; i <=n; i++) {
    factorial *= i;
}


var i = 1;
while (i <=n) {
    factorial *=i;
    i++;
}


var i =1;
do {
    factorial *= i;
    i++;
}
while (i <= n);


//---------------------------------------------------

