console.log("Hello World !!!");

/*
Deklarasi Variabel

let namaVariabel = "hello";
const namaVariabel = "hello";

bedanya kalau let nialinya bisa kita ubah"
const nilainya tidak bisa di ubah dan haru sekaligus dengan nilainya ketika
di deklarasi
*/

let hello = "Hello World !!!";
hello = "welcome";

const age = 33;

console.log(hello);
console.log(age);

/*
    Aturan dalam deklarasi
    -camelCase, huruf kecil pada permulaan,kata kedua dan seterusnya capital
    -Nama variabel boleh diawali dengan underscore_ huruf besar jika di haruskan,$
    -Tidak boleh di awali dengan angka
    -Tidak boleh menggunakan kata kunci js sperti boolean

*/

// Tipe data JavaScript
let nama = "Gabriel";
const fullName = "Gabriel Janes Posumah";
let apakahSudahMenikah = true;

console.log(apakahSudahMenikah);

// ** eksponen, % modulus, ++ increment, --decrement

let umur = 19;
umur += 2;

console.log(umur);

let namaDepan = "Gab";
let namaBelakang = "riel";

let namaLengkap = namaDepan + namaBelakang + " " +"usia sayah adalah = " + age;

console.log(namaLengkap);

console.log(10 == "10"); //loose equality
console.log(10 === "10"); //strict equality

let angka = 10;
let hasil;
//let hasil = angka % 2 === 0 ? "Genap" : "Ganjil";
if(angka % 2 === 0 ) {
    hasil = "Genap";
} else {
    hasil = "Ganjil";
}

console.log(hasil);

// Function
/*
    function declaration mengantu function hoisting
*/
function ucapkanSalam(){
    console.log("selamat Sore");

}
function ucapkanSalam3(){
    return("selamat Sore yaaa");

}

ucapkanSalam();
const salam = ucapkanSalam3();
console.log(salam);

//function expression
const ucapkanSalam2 = function () {
    console.log("selamat sore ini function expression");
}

ucapkanSalam2();

//parameter itu berada dalam variabel deklarasi

function waktu(siang){
    return siang;
}

const siang = waktu("sudah siang");
console.log(siang);

//lingkup global

const olahraga = 'basketball';

