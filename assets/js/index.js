// alert("hello world from js file");

// const phonePrice = 200;
// const remise = 35;
// const earBuds = 75;
// const tva = 10;
// const secondRemise = 20;
// let total = 0;
// // let pour le total car il va varier, étant donné que c'est le résultat de l'addtion des autres
// // const pour les prix car ils ne bougent pas étant donné que ca va être le total qui va bouger

// total = phonePrice + earBuds;

// console.log(total)

// total = total - remise;

// console.log(total)

// total = total - tva;

// console.log(total)

// total = total - secondRemise

// console.log(total)


// Exo1)

const Nom = "Yusuf Buyukaydin";

console.log(Nom)

alert(Nom)

// Exo2)

let Age = 22;
let Message = "Je suis " + Nom + " et j'ai " + Age;

console.log(Message)

// exo 3)

let One = 1;
let plusOneAge = 0

plusOneAge = Age + One;

console.log(plusOneAge)

let SecondMessage = "L'année prochaine j'aurais " + plusOneAge;

console.log(SecondMessage)

// exo 4)

let toto = "toto";
let tata = "tata";
let invers = tata;
tata = toto;
toto = invers;

console.log("dans toto:" + toto, "dans tata:" + tata)

// en gros voit ca comme des verres d'eau, tu as 2 verres, toto et tata, tu en sors un 3eme invers,
//  tu rempli tata dedans, ensuite dans tata tu mets toto étant donné que tu as vidé tata dans invers,
// et donc ca s'est inversé quoi regarde la ligne de code tu comprendras mieux.


let price = 80;
let percent = 20;
let result = price * (percent / 100);

console.log(result);

let total = price - result;

console.log("Le prix après réduction est de " + total + "euros");

console.log("Le prix initial était de " + price + "euros, " +  "la réduction est de " + result + "euros, "
    + "et le prix final est de " + total + "euros. ");

console.log(`Bonjour ${Nom}, tu as ${Age} ans`);


// je déclare une variable qui contient nue string "hello world" et je l'affiche dans le consolelog
let firstTxt="hello world";

console.log(firstTxt);

// déclarer une variable Name qui contient "Marie"
// déclarer une variable age qui contient 25
// afficher dans la console la phrase "marie à 25 ans"
// le faire le plus dynamiquement possible

let Name = "Marie"
let Age2 = 25;
// let message2 = Name + " à " + Age2 + " ans";
let message2 = `${Name} à ${Age2} ans`; 
// version avec backticks, pas encore appris en cours,j'ai appris dans mon coin

console.log(message2)

// déclarer une variable ville qui contient paris
// finalement vous vous etes trompés et vous voulez modifier son contenu par Bordeaux
// afficher dans la console la varaibale ville qui contient bordeaux 

let ville = "Paris";
ville = "Bordeaux";

console.log(ville);

// une variable jean qui coute 14 euros, une variable chaussettes 50 euros, une variable slip a 1234 euros
// une variable tshirt qui coute 2 euros
// le total de mes achats dans la console,
// la moyenne du prix des articles 

let Jean = 14;
let Chaussettes = 50;
let Slip = 1234;
let Tshirt = 2;

let finalPrice = Jean + Chaussettes + Slip + Tshirt;

console.log(finalPrice);

let Moyenne = finalPrice / 4;

console.log(Moyenne);

// une variable x qui contient 14
// une variable y qui contient 18
// a l'aide d'une 3eme variable merci d'inverser le contenu de x et y 
// et de m'afficher les résultats de maniere lisible et dans un console.log

let x = 14;
let y = 18;
let invert = x;
x = y;
y = invert;
let miniPhrase = `je suis dans X = ${x} je suis dans y = ${y}`;

console.log(miniPhrase);