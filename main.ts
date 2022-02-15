/* console.log('Hello World!');

let myVar: number = 3;
myVar += 10;

console.log(myVar);

interface MyInterface {
    myNumber: number;
    myString: string;
}

let myInterface: MyInterface = {
    myNumber: 10,
    myString: 'Hello World',
};


console.log(myInterface.myNumber);
console.log(myInterface.myString); */

/* Variabili */

var myVar: string = 'ciao';

let myLetVar: string;
myLetVar = 'ciao';

const myCostant: number = 4;

let myBoolean: boolean = true;

let myUndefinedVar: undefined;
console.log(myUndefinedVar);

let myPossibleVar: number | undefined; // Posso dire che una variabile puù essere di 2 o più tipi
console.log(myPossibleVar);

let myNullVar: null = null;
console.log(myNullVar);

let myObject: object = {
    name: "Franco",
};

let myAny: any; // Posso dire che la variabile può essere di qualunque tipo

let myListNumber: number[] = [12, 45, 98, 52]; // Uso questa notazione per dire che sarà un'array di numeri
let myListString: string[] = ["a", "b", "c"]; // Uso questa notazione per dire che sarà un'array di stringhe

let myTuple: [string, number] = ["a", 3,]; // Uso questa notazione per dire che questo array o lista contiene 2 valori: il primo di tipo stringa e il secondo di tipo numerico. Posso assegnare quante tipologie voglio. Questa tipologia si chiama "Tupla".


// Cicli
let x = 2;
console.log(`\t${x}^2 = ${x * x}`); // la dicitura \t mi crea un'indentazione

// Ciclo For
console.log('Ciclo For');
for (let x = 1; x < 10; x++) {
    console.log(`\t${x}^2 = ${x * x}`)
}

// Ciclo forEach
console.log('Ciclo forEach');
const numbers = [2, 6, 12, 43];
for (const i of numbers) {
    console.log(`\t${i}^2 = ${i * i}`)
}

// Ciclo while
console.log('Ciclo while');
let z = 1;
while (z < 10) {
    console.log(`\t${z}^2 = ${z * z}`)
    z++;
}

// Challenge
let numberChallenge = [1, 2, 3, 4, 5];
let averageChallenge = 0; 
let sumChallenge = 0;

for (let i = 0; i < numberChallenge.length; i++) {
    sumChallenge += numberChallenge[i];
}

averageChallenge = sumChallenge / numberChallenge.length;

console.log(`La somma è ${sumChallenge}`);
console.log(`La media è ${averageChallenge}`);

// Altro metodo
let sum = 0;
let average = 0;
for (let num of numberChallenge) {
    sum += num;
}

average = sum / numberChallenge.length;
console.log(sum);
console.log(average);