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
    console.log(`\t${z}^2 = ${z * z}`);
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

// Altro metodo Challenge
let sum = 0;
let average = 0;
for (let num of numberChallenge) {
    sum += num;
}

average = sum / numberChallenge.length;
console.log(sum);
console.log(average);


// If e Switch

// If
let c = 1;
while (c < 10) {
    if (c !== 5) {
        console.log(`\t${c}^2 = ${c * c}`);
    } else {
        console.log(`\tIl numero è 5, quindi: ${c}^2 = ${c * c}`);
    }  
    c = c + 1;
}

let a = 1;
while (a < 10) {
    if (a < 5) {
        console.log(`\t${a}^2 = ${a * a}`);
    } else if (a == 5) {
        console.log(`\ta vale 5!`);
    }  else {
        console.log(`\t${a}^3 = ${a * a * a}`);
    }
    a = a + 1;
}

let b = 1;
while (true) {
    if (b > 100) {
        break; // si utilizza all'interno dei cicli per fermarlo all'arrivo della condizione
    }
    console.log(`${b}^2 = ${b * b}`);
    b = b + 1;
}

let d = 0;
while (true) {
    d = d + 1;
    if (d > 100) {
        break; // si utilizza all'interno dei cicli per fermarlo all'arrivo della condizione
    }
    if (d % 2 == 0) {
        continue; // si utilizza all'interno dei cicli per fermarlo in quella condizione, ma continua il ciclo
    }
    console.log(`\t${d}^2 = ${d * d}`);
}

// Switch
let f: number = 1;

switch (f) {
    case 1:
        console.log('f vale 1');
        break;
    case 2:
        console.log('f vale 2');
        break;
    case 10:
        console.log('f vale 10');
        break;
    default:
        console.log('Non conosco il valore di f!');
        break;
}


// Functions
function hello() {
    console.log('Hello World!');
}
hello();


function hi(name: string) {
    console.log(`Hello ${name}`);
}
hi("Enrico");


function saluto(name: string): string { // gli dico che deve ritornare una stringa
    console.log(`Hello ${name}`);
    return 'questa è la stringa di ritorno';
}
saluto("Marco");
const returnSaluto = saluto('Giovanni');
console.log(returnSaluto);


function greeting(name: string) {
    return `Ciao ${name}`;
}
console.log(greeting('Giacomo'));


function greetingLang(name: string, lang: 'en' | 'it') { // dico che lang deve avere valore en o it
    if (lang == 'en') {
        return `Hello ${name}!`;
    } else {
        return `Ciao ${name}!`;
    }
}
console.log(greetingLang('Giacomo', 'en'));
console.log(greetingLang('Aldo', 'it'));


function greetingLanguages(name: string, lang: 'en' | 'it' | 'es' = 'it') { // dico che lang deve avere valore en o it o es, e dico che il valore di default è it
    const greetMap = {
        'en': 'Hello',
        'it': 'Ciao',
        'es': 'Hola',
    };
    let greetingWorld = greetMap[lang];
    return `${greetingWorld} ${name}!`;
}
console.log(greetingLanguages('Giorgio', 'en'));
console.log(greetingLanguages('Davide'));


// Arrow function
const random = (min: number, max: number): number => { // creo una funzione che mi genera un numero random casuale tra 2 valori (min e max), e mi deve ritornare un numero, il valore di ritorno non è obbligatorio
    return Math.random() * (max - min) + min;
}

console.log('random number between 3 and 5', random(3, 5));










