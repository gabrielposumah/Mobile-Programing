// Pertemuan 10 Februari 2021
//Chapter 3

// let vs const vs var
//let bisa di ganti nilanya const tidak bisa
//object dan array bisa di ganti valuenya (const)
//isinya bisa kita ubah tapi objectnya tidak bisa

//Object
const person = {
    firstName : "John",
    lastName : "Posumah",
    age : 33,
};

person.firstName = "Gabriel";
person.address = "Kanonang";

console.log(person);

//String Literal
//Menggabungkan 

let kalimat = "Hello, nama saya " + person.firstName + " " + person.lastName + ". Umur saya " + person.age ;

let kalimat2 = `Hello, nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age}`;


console.log(kalimat);
console.log(kalimat2);

//Arrow Function

//function declaration
function sayHello(){

};
//function Expression
const sayHello2 = function(){

};

//Arrow function
const sayHello3 = () => {
    return `Hello World!!!`;
};

const sayHello4 = () => `Hello World!!!`;
const halo = (param1, param2) => `Hello ${param1} ${param2}`;

console.log(sayHello3());
console.log(sayHello4());
console.log(halo("Gabriel", "Posumah"));

//Rest Parameter  & spread operator
//keduany menggunakan operator yang sama tanda 3 buah titik ...
//tetapi caranya / fungsinya berbeda

//cara lama
const display = (param1, param2, param3) => {
    const numbers = [param1, param2, param3];
    //console.log(param1, param2, param3);
    console.log(numbers);
};

display(1, 2, 3);

//Argumen akan di kirim ke array
//param tidak bisa di taruh di tengah" harus di akhir
const display1 = (param1, param2, ...rest) => {
    console.log(param1, param2, rest);
};

display1(1, 2, 3, 4, 5, 6);

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = [...arr1];
const combineArr = arr1.concat(arr2);
const combineArray = [...arr1, ...arr2];


console.log(combineArr);
console.log(newArray);
console.log(combineArray);

let person1 = {
    firstName : "John",
    lastName : "Doe",
    age : 33,
};

person1 = {
    ...person1,
    address : "Amerika",
    job : "Dosen",
};

console.log(person1);

//combine object

const obj1 = {a : 1, b : 2};
const obj2 = {c : 3, d : 4};
const combineObj = {...obj1, ...obj2};

console.log(combineObj);

//rest 
//spread mencopy dan menggabungkan