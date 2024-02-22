let n1 = prompt("Digite o primeiro número: ")
let n2 = prompt("Digite o segundo número: ")

n1 = Number(n1)
n2 = Number(n2)

const sum = n1 + n2
const sub = n1 - n2
const mult = n1 * n2
const div = n1 / n2 
const restDiv = n1 % n2
alert("A soma é: " + sum)
alert("A subtração é: " + sub)
alert("A multiplicação é: " + mult)
alert("A divisão é: " + div)
alert("O resto é: " + restDiv)

if(sum % 2 == 0){
    alert("A soma dois dois números são par: " + sum )

}else{
    alert("A soma soma dos dois numeros é ímpar:  " + sum)
}
if(n1 == n2){
    alert("Os dois números são iguais")
}
else{
    alert("Os dois números são diferentes")
}