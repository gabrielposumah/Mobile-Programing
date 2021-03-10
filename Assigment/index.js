// Nama : Posumah, Gabriel Janes

// Array Excercise

let people = ["Greg", "Mary", "Devon", "James"];

//Using for-llop
console.log("Using for-loop : ");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

console.log("");

//Using forEach
console.log("Using forEach : ");
people.forEach(function (item) {
  console.log(item);
});

console.log("");

//Remove Greg from the array

console.log("Remove Greg from array : ");
//use shift
people.shift();
console.log("Use shift", people);

console.log("");

//Remove James from the array
console.log("Remove James from array : ");
people.pop();
console.log("Use pop : ", people);

console.log("");

//Add Matt to the front of the array
console.log("Add Matt to the front of the array : ");
people.unshift("Matt");
console.log("Use unshift : ", people);

console.log("");

//Add my nmae to the end of the array
console.log("Add my name to the end of the array : ");
people.push("Gabriel");
console.log("Use push : ", people);

console.log("");

// 7
console.log("Using for loop and break after Marry");
for (let i = 0; i < people.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(people[i]);
}

console.log("");

// 8
console.log("Use slice dan tidak tampilkan Marry or Matt");
let people1 = people.slice(2);
console.log(people1);

console.log("");

// 9
console.log("Redefine and and remove Devon then add Elizabeth dan Artie");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

console.log("");

//10
console.log("Create new variable and equal with people");
let withBob = people.concat("Bob");
console.log(withBob);

// Objcet Excercises

let programming = {
  languages: ["JavaScript", "Phyton", "Ruby"],
  isChalleginf: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// Number 1
console.log("Tambahkan Go di akhir array")
programming.languages.push("Go");

console.log("");

// Number 2
console.log("By using the bracket notation, change the difficulty to the value of 7.")
programming["difficulty"] = 7;
console.log(programming);

console.log("");

// Number 3
console.log("Remove the jokse use delete")
delete programming.jokes;
console.log(programming);

// Number 4
console.log("add new key called isFun")
programming.isFun = true;
console.log(programming);

console.log("");

//Number 5
console.log("using a map")
let update = programming.languages.map(function(item, index) {
    return index + " - " + item;
})

console.log(update);

