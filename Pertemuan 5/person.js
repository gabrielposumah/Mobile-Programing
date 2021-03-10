 const fullName = "John Doe";

 const person = {
    firstName : "John",
    lastName : "Doe",
    age : 33,
};

const display = ({firstName, lastName}) => {
    console.log(`Hello ${firstName} ${lastName}` );
};  

//export ( fullName, person, display);

//export as and import as
//Apabila kita ingin mengekspor tapi variable panjang kita bisa beri alias

export {fullName as namaLengkap, person as orang, display};

//export default
//export itu akan lebih special hanya satu saja yang bisa default export
//export fungsi
