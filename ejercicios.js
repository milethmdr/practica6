// Ejercicio 1: Closure acumulador Crea una función que permita acumular un total numérico cada vez que se llama con un número diferente. (Ejemplo: suma(5), suma(2), suma(6) → el total interno se va acumulando y puedes mostrarlo).

// function crearAcumulador(){
//   let total = 0;
//   return function(numero) {
//     total += numero;
//     console.log(`Total acumulado: ${total}`);
//     return total;
//   };
// }

// const suma=crearAcumulador();
// suma(5); 
// suma(2); 
// suma(6);


// Ejercicio 2: Callback de operación Haz una función que reciba dos números y un callback. El callback decide si mostrar la suma, la resta o el producto de los números.

// function operar(a, b, callback){
//    return callback(a, b);
//  }

//  const suma2 = (x, y) => x + y;
//  const resta = (x, y) => x - y;
//  const producto = (x, y) => x * y;

//  console.log(operar(5, 3, suma2));      
//  console.log(operar(5, 3, resta));     
//  console.log(operar(5, 3, producto));  


// Ejercicio 3: Arrow function para transformar array Declara un array con varios números. Usa arrow function y el método map para crear un nuevo array con esos números elevados al cuadrado.

//  const numeros = [1, 2, 3, 4, 5];
//  const cuadrados = numeros.map(n=>n ** 2);

//  console.log(cuadrados)

// Ejercicio 4: Recursión de suma Escribe una función recursiva que sume todos los elementos de un arreglo.

//  function sumaRecursiva(arr){
//    if (arr.length === 0) return 0;
//    return arr[0] + sumaRecursiva(arr.slice(1));
//  }

//  console.log(sumaRecursiva([1, 2, 3, 4])); 

// Ejercicio 5: Buscar elemento con arrow y find Declara un array de objetos {nombre, edad}. Usa arrow function y el método find para buscar el primer objeto cuya edad sea mayor a 18.
 const personas =[
   {nombre: "Lester", edad: 22},
   {nombre: "Caro", edad: 38},
   {nombre: "Ely", edad: 15}
 ];

 const mayorEdad = personas.find(p => p.edad > 18);
 console.log(mayorEdad);