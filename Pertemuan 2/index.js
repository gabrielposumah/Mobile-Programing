//let scores = [90, 95, 100];
//let arrJohn = ["John", "Doe", 33, true, scores];

//console.log(arrJohn[4][1]);

/*
let obJohn = {
    firstName : 'John',
    lastName : 'Doe',
    age : 33,
    scores : [85, 90, 100],
};

console.log(obJohn.firstName); //dot notation
console.log(obJohn["scores"]); //bracket notarion
*/


let users = [
    {
      fullName: "Gabriel Posumah",
      age: 21,
      isMarried: false,
      GPA: "3.96",
      address: {
        //Object dalam object
        street: "Jalan Raras Tacasily",
        city: "Bitung",
        province: "Sulawesi Utara",
        postCode: "95512",
      },
    },
    {
      fullName: "Aldio Kaminang",
      age: 18,
      isMarried: false,
      GPA: "3.15",
      address: {
        //Object dalam object
        street: "Jalan Raras Tacasily",
        city: "Manado",
        province: "Sulawesi Utara",
        postCode: "95512",
      },
    },
    {
      fullName: "John Doe",
      age: 10,
      isMarried: false,
      GPA: "3.25",
      address: {
        //Object dalam object
        street: "Jalan Raras Tacasily",
        city: "Kota Tomohon",
        province: "Sulawesi Utara",
        postCode: "95512",
      },
    },
  ];

/*
let orang = new Array[
{
    namaLengkap : 'John Doe',
    age : 32,
},
{
    namaLengkap : 'Ando',
    age : 30,
},
{
    namaLengkap : 'Naldo',
    age : 27,
}
];

console.log(orang.namaLengkap);
*/

// Condition

/*
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//cara lama
for (let i = 0; i<= numbers.length; i++) {
    console.log(numbers[i]);
}
*/

let numbers = [1, 2, 3, 4, 5];


// forEach array tidak return niali apa1pun
numbers.forEach(function(number) {
    console.log("Array numbers, ", number * 2 )
});

//map ada array baru yang direturn
let output = numbers.map(function(number){
    return (number *=2);
})

console.log("Array numbers, ", numbers)
console.log("Array output", output);

//filter menyaring data atau hanya menampilkan yang kita mau
users.map(function (item) {
    console.log(item.fullName);
});

let filterUser = users.filter(function (item) {
    return item.address.city === 'Manado';
});

// Find hampir sama dengan filter, data yang diberikan itu cuma satu
let findUser = users.find(function (item) {
    return item.address.city === 'Manado';
});

console.log("Filter ", filterUser);
console.log("Finde ", findUser);