//Array di JS boleh pake kurung siku [ ] atau menggunakan kata kunci New

//Index dari array itu selalu dimulai dari 0
//Arra dalam JS boleh memiliki type data yg berbeda

//Array Literals atau tanda siku [ ]
// let numbers = [1,2,3,4,5];
// console.log(numbers);

// let john = ['John','Doe',33,true];
// console.log(john);

//Mengakses index dari Array
// let numbers = new Array(1,2,3,4,5);
// let john = new Array("John","Doe",33,true);
// // console.log(numbers);
// // console.log(john[2]);

// //Array memiliki method length, jadi otomatis hitung panjang dari suatu Array
// console.log(numbers[numbers.length - 1]);
// console.log(john[john.length - 1]);

//Mengubah Array dalam satu Index

// namaArray [nomorIndex] = nilaiBaru;
// Contoh : let namaBuah ["Mangga", "Apel", "Jeruk"];
// namaBuah[1] = "Semangka";

//Object (JSON) Javascript Object Notation
let users = [
    {
      fullName: "Aldio Kaminang",
      age: 21,
      isMarried: false,
      GPA: "3.96",
      address: {
        //Object dalam object
        street: "Jalan Raras Tacasily",
        city: "Kota Bitung",
        province: "Sulawesi Utara",
        postCode: "95512",
      },
    },
    {
      fullName: "Anjelita Kaminang",
      age: 18,
      isMarried: false,
      GPA: "3.15",
      address: {
        //Object dalam object
        street: "Jalan Raras Tacasily",
        city: "Kota Manado",
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
  
  console.log("Nama : " + users[0].fullName + " GPA : " + users[0].GPA);
  console.log("GPA  : " + users[0]["GPA"]);
  console.log(users[0].address.street);
  
  //Conditional
  //if, else if dan else
  
  // if(kondisi){
  //   masukkan kode yg akan dijalankan
  // } else if (kondisi2){
  //   masukkan kode yg akan dijalankan
  // }
  
  //switch case itu di pakai jika dpe kondisi da banyak
  
  // switch(pernyataan){
  //   case kondisi1:
  //     keputusan yg dijalankan ketika kondisi1 tercapai
  //   break;
  //   case kondisi2:
  //     keputusan yg dijalankan ketika kondisi2 tercapai
  //   break;
  
  //    default:
  //keputusan yg dijalankan ketika semua kondisi tak tercapai
  // }
  
  //jika kondisi lebih dari 1 dan hasilnya sama maka pakai cari berikut
  
  // switch(hari){
  //   case "senin":
  //   case "selasa":
  //   case "rabu":
  //     seragamSekolah = "Kemeja putih bawahan merah";
  //     break;
  //   default:
  //     seragamSekolah = "Baju Bebas";
  // }
  
  //Looping Javascript yaitu :
  // for
  // while
  // do...while
  
  //for loop
  // for(pernyataan1; pernyataan2; pernyataan3){
  //    kode yg dijalankan ketika true
  // }
  
  for (let x = 1; x <= 10; x++) {
    console.log("Looping pake for " + x);
  }
  
  //while loop
  // let z = 1;
  // while (z <= 10) {
  //   console.log("Looping pake while " + z);
  //   z++;
  // }
  
  //do...while (dicek kondisi pada akhir)
  // let y = 1;
  // do {
  //   console.log(y);
  //   y++;
  // } while (y <= 10);
  
  //cara old school
  //let nomor = [1, 2, 3, 4, 5];
  //console.log(nomor);
  
  // for (let i = 0; i < nomor; i++) {
  //   console.log(nomor[i]);
  // }
  
  //Array Built-in method (Array ini sebenarnya object)
  //dan memiliki sebuah function/method
  
  let numbers = [1, 2, 3, 4, 5];
  
  //forEach tidak return nilai apapun.
  numbers.forEach(function (item, index) {
    if (item >= 3) {
      console.log(item);
    }
  });
  
  //Map pada dasarnya sama dengan forEach, klo Map dia mo se return Array yg baru.
  let output = numbers.map(function (item, index) {
    return item; //ini boleh return karna pke MAP  dng boleh pke lngsung ba olah nilai dri sini
  });
  console.log("Ini pake MAP", output);
  
  //Map
  let userNames = users.map(function (item) {
    return item.fullName;
  });
  console.log(userNames);
  
  //Filter : menyaring data di dalam Array (data spesifik & semua datanya)
  let filterNumber = numbers.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(filterNumber);
  
  //Filter 
  let filterUser = users.filter(function(item){
    return item.address.province === "Sulawesi Utara";
  });
  console.log(filterUser);
  
  //Find : hanya mengembalikan data tunggal (cuman elemen prtama)
  let findNumber = numbers.find(function(item){
    return item >= 3;
  });
  console.log(findNumber);