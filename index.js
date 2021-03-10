// 1. Callback
function mandi(){
    console.log("Mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}
mandi();
sarapan(berangkatSekolah);

//Promise
function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};
let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()

//Fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
  });

function ambilDataUser() {

}
ambilDataUser()