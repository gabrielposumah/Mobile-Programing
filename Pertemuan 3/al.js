const person = {
    //const tidak bisa diubah langsung tapi bisa pake push
    firstName: "John",
    lastName: "Doe",
    age: 21,
  };
  
  person.address = "Bitung";
  console.log(person);
  
  //kalo pke var biar nama variable sama, jadi tidak disarankan
  
  //STRING LITERAL
  let kalimat =
    "Hallo, nama saya " +
    person.firstName +
    " " +
    person.lastName +
    " Umur saya " +
    person.age +
    " tahun";
  console.log(kalimat);
  
  //Pake tanda backtik `
  let kalimat2 = `Hello nama saya ${person.firstName} ${person.lastName} . Umur saya ${person.age}`;
  console.log(kalimat2);
  
  //ARROW FUNCTION
  
  function sayHello1() {
    //ini pake function expression
  }
  
  const sayHello2 = function () {
    // ini pake function declaration
  };
  
  const sayHello3 = (param1, param2 = "Ini DEFAULT") => { //DEFAULT PARAMETER 
    //ini pake Arrow function dg adaleh implicit return value (cmn 1 baris saja)
    return `Hello ${param1} ${param2}`; //INI PARAMETER
  };
  
  console.log(sayHello3("Aldio", "Kaminang")); //INI ARGUMEN
  
  
  //REST PARAMETER
  
  const display = (param1,param2,param3) => {
      console.log(param1,param2,param3);
  };
  
  display(1,2,3);