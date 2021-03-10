//callBack
// Posumah, Gabriel Janes

function mandi (){
    console.log("Mandi");
};

function sarapan (callback){
    setTimeout(() => {
        console.log("sarapan tertunda 3 detik");
        callback();
    }, 3000);
};

function berangkatSekolah(){
    console.log("Berangkat sekolah");
};

mandi();
sarapan(berangkatSekolah);
//berangkatSekolah();


//Promise

function helloWorld() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
}

const messages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        })
    } catch(error) {
        console.log(error);
    }
} ;

messages();

//fetch
function ambilDataUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (user) {
        console.log(user);
    })
};

ambilDataUser();