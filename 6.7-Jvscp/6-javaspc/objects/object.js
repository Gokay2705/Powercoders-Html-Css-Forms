const tire = "----------------------------"; // to separate the code blocks

const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "takos",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};
console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; definitely prefer using the other one
console.log(tire);

const person1 = {
  name: "Brian",
  ageRange: "25-35",
};
const person2 = {
  name: "Jack",
  ageRange: "65-75",
};
const person3 = {
  name: "JaMort",
  ageRange: "76-100",
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk you crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);
suggestMusic(person3);
console.log(tire);

const dog = {
  // iceride fonk tanimlamaya orenek
  name: "dog",
  speak(someParametter) {
    console.log("woof woof", someParametter);
  },
};

dog.speak("someParametter in function");
console.log(tire);

const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    country: "USA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    // this burada ara demek yani name icinde first ara
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  },
};

console.log(me);
console.log(me.name.first);
console.log(me.name.last);
console.log(tire);
console.log(me.getAddress());
console.log(tire);

// arrays
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
console.log(tire);

const primeNumbers = [10, 1, 9, 8, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length); // kac tane deger var
console.log(primeNumbers.join(" | ")); // ekle
console.log(tire);

const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" },
  true,
  14,
];

console.log(courses);

courses.push({ teacher: "Sean Larkin", course: "Webpack" }); // en sona veri ekler
courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" }; // guncelleme yaptik

console.log(courses);

const course = courses.pop(); // son veriyi siler
console.log(course);
console.log(tire);

const subarray = courses.splice(2, 2, {
  course: "Intro to Angular",
  teacher: "",
}); // dizi icindeki 2 index numarali veriden sonra 2 veriyi alir yeni bir dizi olusturur
console.log(subarray);
console.log(tire);
console.log(typeof course); // datanin tipini verir
console.log(typeof NaN);
console.log(typeof []);
console.log(tire);

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i].toUpperCase());
}
console.log("----------------------------");
// method 2
cities.forEach(function (city) {
  console.log(city);
});
console.log(tire);

console.log(primeNumbers.sort()); // string olarak siralar
console.log(tire);

const string1 = ["a", "C", "g", "T", "i", "-", ":-)"];
string1
  .map((string) => {
    return string.toUpperCase();
  })
  .sort();
console.log(tire);

const x = "this is something";
console.log(x.split(""));
console.log(tire);

console.log(x.split("").map((s) => s.toUpperCase()));
console.log(tire);

const y = x
  .split("")
  .map((s) => s.toUpperCase())
  .join("");
console.log(y);
console.log(tire);

const z = x
  .split("")
  .map((s) => s.toUpperCase())
  .filter((s) => s !== "I")
  .join(""); // esit degil
console.log(z);
console.log(tire);
