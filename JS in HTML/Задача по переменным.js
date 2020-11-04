'use strict';
/*
let width = 10; //ширина
let length = 20; //длинна
let square = 0;

square = width * length;
square = square + 2;
square += 2;
square++;
++square;

console.log('Площадь', square);
console.log('Площадь: ' + square)
console.log(`Площадь: ${square}` );
console.log(`Площадь: ${10*30+2}` );

// как найти ануитетный платеж по ипотеке
let S = 1e6;
let p = 5;
let n = 10;

p /=1200; //p = p / 12 /100
n *= 12; //n = n * 12

A = S * p / (1 - (1+ p) ** (-n))

console.log(A)

console.log( Math.round( A ) )

console.log(A * n - S)

if ( true )
    console.log('live to ride')

console.clear();


const n = 34;
let result = '';

if( n % 2 ) {
    result = 'нечетное';
}   else {
    result = 'чётное';
}
console.log( result );

console.log( n % 2 ? 'нечетное' : 'чётное' )


let k = 23
if( k = 7 ){
    console.log(':)')
}   else {
    console.log(':(')
}


let dayNumber = 4;
let menu = '';

switch( dayNumber ){
    case 1: menu = 'шашлык';    break;
    case 2: menu = 'шаурма';    break;
    case 3: menu = 'мёд';   break;
    case 4: menu = 'суши';  break;
    case 5: menu = 'шоколад';   break;
    default: menu = 'борщ';
}
console.log(` день ${dayNumber}: ${menu} `);


var i = 0;
// i++;
console.log(i++);
console.log('after',i);
console.log(i++, i++);

var i = 0;
// ++i;
console.log(++i);

let j = 0;
while(j < 5){
    console.log(j);
    j++;
}
console.log(j);

let tree = '*';
let delta = '**';
let rows = 5;
let k = 1;

while(k < rows){
    tree += '\n' + delta;
    delta += '**';
    k++;
}
console.log(tree);

for(let i = 0; i < 5; i++){
    console.log(i);
}


var str = 'hello',
    num = 123,
    flag = true,
    txt = 'true';
    
console.log(typeof str, typeof num, typeof flag, typeof txt);

let a1 = 5 + 3,
    a2 = 5 - 3,
    a3 = 5 * 3,
    a4 = 5 / 3,
    a5 = 10 % 4;

console.log(a1, a2, a3, a4, a5)

let a6 = 5 % 3,
    a7 = 3 % 5,
    a8 = 5 + '3',
    a9 = '5' - 3,
    a10 = 75 + 'kg';

console.log(a6, a7, a8, a9, a10)

let heigth = 23;
let width = 10;
let s = width * heigth;
console.log(s)

let heigthC = 10;
let dC = 4;
let v = (3.1415 * dC * heigthC);
console.log(v);
console.log(Math.round(v));

let n = 3;
let m = 4;
let k = (Math.pow(n,2) + Math.pow(m,2));
    k = (Math.sqrt(k));
console.log(k);


let s = 305000;
let p = 15;
let years = 3;
let A = 0;
let perepl = 0;

p /= 1200;
years *= 12;
A = s * p / (1 - (1 + p) ** (-years));
perepl = (A * years - s);

console.log(A);

console.log(Math.round (A));

console.log(Math.round (perepl));


var codeWord1 = "обернись";
var codeWord2 = "неужели";
var codeWord3 = "огурцы";
var codeWord4 = "липкие";
var codeWord5 = "?!";
console.log (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);


let nFib = 12, el12;
el12 = ((( 1 + (Math.sqrt(5) ) / 2) * Math.pow(n) - (( 1 - (Math.sqrt(5) ) / 2)) * Math.pow(n)) / (Math.sqrt(5));
el12 = Math.round(el12);


function f(n){
    if(n < 2) return 1;
    return f(n - 1) + f(n - 2);
}
console.log(f(12));

var longString = "Эта длинная строка такая длинная";
console.log(longString.slice(0, 24));

var sillyString = "эЙ, кАК деЛа?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1, 13);
var sillyString = firstCharacterUpper + restOfString;
console.log(sillyString);

var heigth = 150;
var heigthRestriction = 150;
console.log(heigth >= heigthRestriction);

var sillyString = "эЙ, кАК деЛа?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1, 13);
var sillyString = firstCharacterUpper + restOfString;
console.log(sillyString);

var sillyString = "эЙ, кАК деЛа?";
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
console.log(sillyString);
*/

var hadShower = true;
var hasBackpack = false;
console.log(hadShower && hasBackpack);

var hasApple = true;
var hasOrange = false;
console.log(hasApple || hasOrange);

var isWeekend = true;
var needToShowerToday = !isWeekend;
console.log(needToShowerToday);

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower &&
    (hasApple || hasOrange);
console.log(shouldGoToSchool);

var heigth = 149;
var heigthRestriction = 150;
console.log(heigth >= heigthRestriction);

var heigth = 110;
var heigthRestriction = 120;
console.log(heigth <= heigthRestriction);

var mySecretNumber = 5;
var chicoGuess = 3;
console.log(mySecretNumber === chicoGuess);
var harpoGuess = 7;
console.log(mySecretNumber === harpoGuess);
var grouchoGuess = 5;
console.log(mySecretNumber === grouchoGuess);

var stringNumber = "5";
var actualNumber = 5;
console.log(stringNumber === actualNumber);
console.log(stringNumber == actualNumber);


















