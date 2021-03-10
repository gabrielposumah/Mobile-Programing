// Asycronous javaScript

//sycronous
//console.log("satu");
//console.log("dua");
//console.log("tiga");

//Callback
//sebuah fungsi yang ada di dlm parameter
//function greetings(fullName){
//    console.log(`hi ${fullName}`);
//};

//function introduction(firstName, lastName, callback){
//    const fullName = `${firstName} ${lastName}`;
//    callback(fullName);
//};

//introduction('John', 'Doe', greetings);

//introduction("John", "Doe", (fullName) =>{
//    console.log(`Hi ${fullName}`);
//});

//penerapana 3 cara asyncronous: callback, promis, asyncawait

//console.log("satu");

//Method setTimeout
//setTimeout(() =>{
//    console.log("dua");
//}, 2000);

//console.log("tiga");



// function proses1(){
//     console.log("Proses 1 selesasi di jalankan");
// };

// function proses2(callback){
//     setTimeout(() =>{
//         console.log("Proses 2 selesai di jalankan")
//         callback();
//     },2000);
// };

// function proses3(){
//     console.log("Proses 3 selesai di jalankan")
// };

// proses1();
// proses2(proses3);

//calback hell

 setTimeout(() =>{
     console.log("Proses 1");
     setTimeout(() =>{
         console.log("Proses 2");
         setTimeout(() =>{
             console.log("Proses 3");
             setTimeout(() => {
                 console.log("Proses 4");
             }, 2000);
         }, 2000);
     }, 2000);
 }, 2000);

//Promise muncul untuk menyelesaikan masalah callback hell
//Konsepnya sebuah object dari js mana hasil dari output 3 macam : pending, fullfilled, rejecteed

let condition = true;

// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Error");
//     }
// });

// newPromise
//     .then((result) =>{
//     console.log(result);
//     })
//     .catch((error) => {
//     console.log(error);
//     });

// function newPromise() {
//     return new Promise((resolve, reject) => {
//        if (condition) {
//            resolve("Berhasil");
//        } else {
//            reject("Error");
//        }
//    });
// }

//  newPromise ()
//      .then((result) =>{
//         return result;
//      })
//      .then((result2) => {
//          console.log(`${result2} !!!`);
//      })
//      .catch((error) => {
//      console.log(error);
//      });

function getIdStudent(){
    return new Promise((resolve, reject) => {
        resolve("12345");
    });
}

function getNameById (id){
    return new Promise((resolve, reject) => {
        if(id == '12345') {
            resolve("John Doe");
        } else {
            reject("Uknown ID Student");
        }
    });
}

//model chaining

//cara pertama mengkonsumsi promise dengan then and catch
// getIdStudent().then((id) => {
//      return getNameById(id);
//      })
//      .then((name) => {
//      console.log(name);
//      })
//      .catch((error) => {
//      console.log(error);
//      });

// getIdStudent().then((id) => {
//     getNameById(id)
//         .then((name) => {
//             console.log(name);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// });


// cara Asycn/Await
// Asycn menguba syncronous menjadi asycnronous
// Await menunda eksekusi hingga proses asyncronous selesai

const getNameByIdAsync = async () => {
    try {
        const id = await getIdStudent();
        const name = await getNameById(id);
        console.log(name);
    } catch (error) {
        console.log(error);
    }
    
};

getNameByIdAsync();