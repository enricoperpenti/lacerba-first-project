/* Importare moduli o librerie */
var faker = require('faker');

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



// Challenge Functions

//------------ Challenge somma e media

const sumFunction = (numb: number[]) => {
    let somma = 0;

    for (let i of numb) {
        somma += i;
    }
    console.log(`La somma è: ${somma}`);
    averageFunction(somma, numb.length);
}

const averageFunction = (sum: number, numb: number) => {
    let media = 0;
    media = sum / numb;
    console.log(`La media è: ${media}`);
}

sumFunction([1, 2, 3, 4, 5]);


//------------ Challenge trovare min e max

const minMaxFunction = (numb: number[]) => {
    let min = numb[0];
    let max = numb[0];
    for (let i = 0; i < numb.length; i++) {
        if (max < numb[i]) {
            max = numb[i];
        } else {
            min = numb[i];
        }
    }
    console.log(`Il numero minore è ${min}, il numero maggiore è ${max}`);
}

minMaxFunction([1, 2, 3, 4, 5]);
minMaxFunction([25, 14, 46, 29, 5]);


// Soluzioni Challenge 

//------------ Soluzione Challenge somma e media
const arr = [1, 2, 3, 4, 5];

function summa(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function media(arr: number[]) {
    const sum = summa(arr);
    return sum / arr.length;
}

console.log(`somma = ${summa(arr)}`);
console.log(`media = ${media(arr)}`);


//------------ Soluzione Challenge trovare min e max

let arrMinMax = [3, 2, 1, 5, 4, 12, -1, 5];

const minimo = (arr: number[]): number => {
    let min = arr[0];
    for (let n of arr) {
        if (n < min) {
            min = n
        }
    }
    return min;
}

const massimo = (arr: number[]): number => {
    let max = arr[0];
    for (let n of arr) {
        if (n > max) {
            max = n
        }
    }
    return max;
}

console.log(`min = ${minimo(arrMinMax)}`);
console.log(`max = ${massimo(arrMinMax)}`);


// Funzioni anonime
function printFunction(func: () => void) { // una funzione che prende in ingresso un'altra funzione di tipo "void", ciò vuol dire che può ritornare qualcosa oppure niente e non ha parametri, è una funzione di ordine superiore, perchè richiama altre funzioni
    console.log('calling function');
    func();
    console.log('function called function');
}

printFunction(() => { // quella all'interno è una funzione anonima
    console.log(greeting('Enrico'));
});


//------------ Creo un'array di numeri quadrati primo metodo
const numeri: number[] = [1, 2, 3, 4, 5];

let numeriQuadrati1: number[] = [];

for (let num of numeri) {
    numeriQuadrati1.push(num * num);
}
console.log(numeriQuadrati1);


//------------ Creo un'array di numeri quadrati secondo metodo funzione anonima di JS
const numeriQuadrati2 = numeri.map(num => {
    return num * num;
});
console.log(numeriQuadrati2);


//------------ Creo un'array di numeri quadrati terzo metodo funzione anonima di JS, senza il return perchè la funzione ha solo una riga
const numeriQuadrati3 = numeri.map((num) =>  num * num);
console.log(numeriQuadrati3);

// ------------ Creo un'array di numeri dispari
const oddNumbers = numeri.filter((n) => n % 2 != 0); // filter, cicla l'array e bisogna dargli un algoritmo che restituisca true o false, e crea il nuovo array con i "true"
console.log(oddNumbers);

const oddNumbers2 = numeri.filter((n) => n % 2 != 0).map((n) => n + 10); // sommo 10 a tutti i numeri dispari
console.log(oddNumbers2);

// ------------ Risultato maggiore di 3
const searchNumber = numeri.find(n => n > 3); // find funziona come filter, solo che mi restituisce un solo numero, il primo che soddisfa la condizione
console.log(searchNumber);


// Compilare codice in tsc
/*
Digitando "tsc" nella console, mi creerà un file js con il file Typescript leggibile dai browser.. la cartella di output è stata impostata nel file "tsconfig.json" --> "outDir": "./dist"
*/


// Modulo npm (node package manager)
/*
Come installare e gestire pacchetti esterni da utilizzare all'interno di un progetto.
Ad esempio per installare Faker.js (un generatore di informazioni inventate), digito nella console "npm install faker --save-dev", --save-dev mi serve per renderlo disponibile solo per la fase di sviluppo.
Lo importiamo all'inizio del file js-ts in cui lo andiamo ad utilizzare "var faker = require('faker');".
Se riscontro problemi è sempre meglio consultare la guida del pacchetto, in questo caso "https://www.npmjs.com/package/faker/v/5.5.3".
Ora dovrebbe essere rponto per l'uso.
*/

var randomName = faker.name.findName();
var randomEmail = faker.internet.email(); 
console.log(randomName, randomEmail);

for (let i = 0; i < 10; i++) {
    const randomNames = faker.name.firstName();
    console.log(randomNames);
}
