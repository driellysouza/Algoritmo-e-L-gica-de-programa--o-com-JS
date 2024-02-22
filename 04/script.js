let name = prompt("Qual seu nome? ")

let n1 = prompt("Digite sua 1º nota: ")
let n2 = prompt("Digite a 2º nota: ")
let n3 = prompt("Digite a 3º nota: ")

n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)

const media = (n1 + n2 + n3) / 3

if (media > 6){

    alert("Parabéns " + name +"  vc passou! sua nota foi: " + media.toFixed(2))

}
else{
    alert("Que pena! " + name + " vc não conseguiu nota suficiente. Sua nota foi: " + media.toFixed(2))
}