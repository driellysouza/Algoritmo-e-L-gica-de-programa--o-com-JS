

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10 )

let t = 1

while ( Number(result) != randomNumber){
    result = prompt('Erro, tente novamente:')
    
    t++
}
alert(`Parabéns! O número que eu pensei foi ${randomNumber} Você advinhou o número em ${t} tentativas`)