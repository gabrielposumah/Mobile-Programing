// Destructuring
// Membongkar isi dari array atau objek dan menyimpan hasilny ke dalam
// variabel lain

// Array(caranya, ambil sebagian item, deklarasi & assigment terpisah, 
// default value, Rest operator)


const arrPerson = ['John', 'Doe', 33, true];

//cara lama
//const firstName = arrPerson[0];
//const lastName = arrPerson[1];
//const age = arrPerson[2];
//const isMarried = arrPerson[3];

//cara destructruing
//const [firstName, ,age] = arrPerson;
//console.log(firstName, age);

//deklarasi & assigment terpisah
//[, , age] = arrPerson;

//console.log(age);

//deafult value
//let [, , age, isMarried, address = "Manado"] = arrPerson;
 
//console.log(age, isMarried, address);

//rest operator

//let [firstName, lastName, ...rest] = arrPerson;

//console.log(firstName, lastName);
//console.log(rest);

//Object (caranya, ambil sebagian item, dekalrasi & assigment terpisah, default value
// rest operator, penerapan)

const objPerson = {
    firstName : "John",
    lastName : "Doe",
    age : 33,
    isMarried : true,
    address : 'Minahasa Utara'
};

//cara lama
//const firstName = objPerson.firstName;
//const lastName = objPerson.lastName;
//const age = obj.age;
//const isMarried = obj.isMarried;

//
//const { firstName, age : umur} = objPerson;

//console.log(firstName, umur);

//deklarasi
//({firstName, lastName} = objPerson);

//console.log(firstName, lastName);

//default value
//let ({firstName, lastName, address} = objPerson);

//console.log(firstName, lastName, address = "Manado");

//rest operator
//let {firstName, lastName, ...rest} = objPerson;

//console.log(firstName, lastName, rest);

//penerapan
//const display = (obj) => `Halo Nama saya ${props.firstName} ${props.lastName}` ;

//console.log(display(objPerson));

const display = ({ firstName, lastName}) => 
    `Halo Nama saya ${firstName} ${lastName}` ;

console.log(display(objPerson));