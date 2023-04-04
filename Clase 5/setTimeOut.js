// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

const temporizador = (functionCallBack) => {
    setTimeout(() => {
        functionCallBack()
    }, 5000)
}

let operacion = () => console.log('Realizar una operacion')

console.log('Inicio la tarea')
temporizador(operacion)
console.log('Fin de la tarea')