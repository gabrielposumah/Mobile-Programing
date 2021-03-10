// Multi-Thread : Paralel

// console.log("Proses 1");
// setTimeout(() => {
//     console.log("Proses 2");
// }, 3000);

// console.log("Proses 3");

//Single-Thread : Concurent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//         }, 3000);
//     }, 3000);
// }, 3000)

// const number = [1, 2, 3, 4, 5];

// number.forEach((item, i) => {
//     setTimeout(() => {
//         console.log(item);
//     },i * 1000);
// });

//Promise
 let condition = true;

// let newPromise = new Promise ((resolve, reject) => {
    
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// newPromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });
function newPromise(){
    return new Promise ((resolve, reject) => {
    
        if (condition) {
             resolve("Berhasil");
        } else {
             reject("Gagal");
         }
    });
 };
    // newPromise().then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //      console.log(error);
    // });



// Async - await
// const getPromise = async () => {
//     const res = await newPromise();
//     console.log(res);
// };

// const getPromise = async () => {
//     try {
//     const res = await newPromise();
//     console.log(res);
//     }catch (error) {
//         console.log(error);
//     }
// };
// getPromise();

//Fetch mengirimkan network request atau mengambil data
//Fetc dengan promise

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((json) => console.log(json))
// .catch((error) => console.log(erro));

const getJSONPlaceholder = async () => {
    try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
    } catch (error) {
        console.log(error);
    }
};

getJSONPlaceholder();