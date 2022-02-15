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

//comment