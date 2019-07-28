document.write("<h1>Hola Mundo!</h1>");

// // Tipos de datos

// // Tipo String
// "Hola Mundo"
// 'Adios Mundo'

// // number
// 1
// 2.3
// -2

// // boolean
// true
// false

// // array

// ['Omar', 'Celis', 'Torres', 28, true]

// // objeto

// {
//     "nombre": 'Omar',
//     "apellido": 'Celis',
//     "edad": 28,
//     "vivo": true
// }


console.log("Esto es una cadena");
console.log(
    {
        "nombre": 'Omar',
        "apellido": 'Celis',
        "edad": 28,
        "vivo": true
    }
);

// Variables

var nombre = "Omar";
let apellido = "Celis";     // let es de las ultias versiones de js
const PI = 14.15;


var omarct = {
    "name": nombre,
    "lastname": apellido
};

console.log(omarct);

// Operadores

var num1 = 10;
var num2 = 33.5;
var resultado = num1 + num2 * num1;
console.log("El resultado de " +  num1 + "+" + num2 + "*" + num1 + " es igual a " + resultado);

var hola = "Hola ";
var mundo = "mundo";
var saludo = hola + mundo;

console.log(saludo);

var menor = num1 < num2;

console.log(menor);

if (menor){
    console.log(num1 + " es menor que " + num2);
} else {
    console.log(num1 + " es mayor que " + num2);
}

var switchVar = "julio";

switch(switchVar){
    case 'marzo':
        console.log("MARZO");
        break;
    case 'enero':
        console.log("ENERO");
        break;
    case 'julio':
        console.log("JULIO");
        break;
    default:
        console.log("default");
}

// Ciclos

var contador = 10;

while(contador > 0){
    console.log("Hola mundo" + contador);
    contador -= 1;
}


var usuarios = ['<h1>omar</h1>', '<h1>emir</h1>', '<h1>axel</h1>', '<h1>wili</h1>'];

for (var index = 0; index < usuarios.length; index++) {
    var element = usuarios[index];
    console.log(element);   
    //document.writeln(element);
}

// Funciones

function saluda(nombre) {
    console.log("Hola " + nombre);
}

saluda(omarct.name);