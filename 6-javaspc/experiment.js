/* 1. degisken tanimlama ve degistirme: const let */
const monthlyRent = 500;
console.log(monthlyRent);
const yearlyRent = monthlyRent * 12;
console.log(monthlyRent, yearlyRent);

const myName = "Mustafa";
console.log(myName);

const firstName = "Mustafa";
const lastName = "Folk";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

/* 2. if */
const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

if (2 + 2 === 5) {
  console.log(
    "Oh thank god, the fundamental principles of mathematics still hold true."
  );
} else {
  console.log("Uh, panic?");
}

const friendsAtYourParty = 3;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty >= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

/* 3. loops */
let friendsAtMyParty = 3;
for (let i = 0; i <= 10; i++) {
  friendsAtMyParty++;
}
console.log(friendsAtMyParty);

console.log("hi lol");

const character = "f";
const timesTorepeat = 5;
let answer = "";
for (let i = 0; i <= timesTorepeat; i++) {
  answer = answer + character;
}
console.log(answer);

/* 4. functions */
function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);

/* Scope */
function addFive(number) {
  const someVariable = "you can't see me outside this function";
  return number + 5;
  console.log(someVariable);
}
addFive(10);

const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // works, the outter block (called the global scope) is still in scope
  const G = "G";
}
console.log(E); // works, E was declared outside the whie loop
console.log(G); // does not work, declared inside the while loop and it's over

doStuff("B");
console.log(B); // does not work, the B parameter expires after the function call
console.log(C); // does not work, C was declared inside the function and the function is over
console.log(F); // works, F was declared in the global scope

/* Builtins */
const sentences = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentences.toLowerCase());
console.log(sentences.toUpperCase());

const sentencess = "The quick brown fox jumps over the lazy dog.";

console.log(sentencess.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

console.log(Math.round(5.1));
console.log(Math.max(5.1, 4, 78, 23.3));
console.log(Math.min(5.1, 4, 78, 23.3));

const names = "Brian Holt";
console.log(
  names.substr(6, 3)
); /*0'dan baslar. 6'dan basla sonra 3 karakteri ver.*/
