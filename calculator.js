// Input (primeiro valor)
// Input (segundo valor)
// Estrutura de repetição (Escolher qual operação deseja realizar)
// Output (Resultado da operação)
// Return 


alert("Bem-Vindo a Mini Calculadora!")


let selectNumberOne = parseInt(prompt("Digite o primeiro numero"))
let selectNumberTwo = parseInt(prompt("Digite o segundo numero"))
let selectOperator = prompt("Qual operador deseja usar?")



let operatorAdd = function () {
    while (selectOperator === "+") {
        alert(`Você está somando ${selectNumberOne} e ${selectNumberTwo}`)
        let soma = selectNumberOne += selectNumberTwo
        alert(`Resultado: ${soma}`)
        break
    }
}
operatorAdd()

let operatorSub = function () {
    while (selectOperator === "-") {
        alert(`Você está subtraindo ${selectNumberOne} e ${selectNumberTwo}`)
        let subtração = selectNumberOne -= selectNumberTwo
        alert(`Resultado: ${subtração}`)
        break
    }
}
operatorSub()

let operatorMulti = function () {
    while (selectOperator === "*") {
        alert(`Você está multiplicando ${selectNumberOne} e ${selectNumberTwo}`)
        let multiplicação = selectNumberOne *= selectNumberTwo
        alert(`Resultado: ${multiplicação}`)
        break
    }
}
operatorMulti()

let operatorDiv = function () {
    while (selectOperator === "/") {
        alert(`Você está dividindo ${selectNumberOne} e ${selectNumberTwo}`)
        let divisão = selectNumberOne /= selectNumberTwo
        alert(`Resultado: ${divisão}`)
        break
    }
}
operatorDiv()

