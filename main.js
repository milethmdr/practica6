import { stdin, stdout } from 'process';
import readline from 'readline'
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})
//METODOS DE ARRYS
//USO DE FOREACH
let estudiantes = [
    {nombre: "Isaac Medrano", nota: 95},
    {nombre: "Luis", nota: 75},
    {nombre: "Kevin", nota: 85},
    {nombre: "William", nota: 65},
    {nombre: "Ismael", nota: 45}
]

const numeros = [1,2,3,4,5,6,7,8,9]


estudiantes.forEach(estudiante => {
    if(estudiante.nota < 80){
        console.log(estudiante)
        
    }else{
        console.log("aprobado ",estudiante)
    }
});

//Map
let impares = numeros.map((num, index)=>{
    let par = num % 2 ===0
    if(par){
       console.log("numeor par:", num)
    }
})

//filter
let excelente = estudiantes.filter((estudiante) => estudiante.nota > 90)
console.log(excelente)
// rl.question("nombre del estudiante que quieres buscar ", (estudiante)=>{
//     let estudianteBuscado = estudiantes.filter((student)=> student.nombre == estudiante)

//     if(estudianteBuscado){
//         console.log(estudianteBuscado)
//     }else{
//         console.log("No se encontro el estudiante")
//     }
// })

//Usar readline para: 
//ingresar nombre de estudiantes seguidos por coma, ejemplo input: Jose, Isaac, Smith
//ingresar notas de esos estuddiantes, input: 7,8.6, 10,
//crear un objeto o almacenamiento para guardar la informacion
//mostrar la informacion
// const almacenamiento = []
// rl.question("nombre de estudiantes seguidos por coma", (alumnos)=>{
//     rl.question("nota de los estudiantes en ese orden", (notas)=>{
//         const arrAlumnos = alumnos.split(",")
//         const arrNotas = notas.split(",")
         
//         arrAlumnos.map((alumno, index)=>{
//             almacenamiento.push({estudiante: alumno, nota: parseFloat(arrNotas[index])})
//         })
//         console.log(almacenamiento)
//         rl.close()
//     })

// })
// console.log(almacenamiento)

let notaTotal = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0)
console.log("Promedio", notaTotal/estudiantes.length)

const grupos = estudiantes.reduce((acc, estudiante)=>{
    if(estudiante.nota>= 90){
        acc.excelente.push(estudiante)
    }else if(estudiante.nota >= 70){
        acc.bueno.push(estudiante)
    }else{
        acc.mejorar.push(estudiante)
    }
    return acc
}, {excelente: [], bueno: [], mejorar: []})

console.log(grupos)

const index = estudiantes.findIndex((estudiante) => estudiante.nombre == "Kevin")
console.log("index: ", index, "data : " , estudiantes[index] )