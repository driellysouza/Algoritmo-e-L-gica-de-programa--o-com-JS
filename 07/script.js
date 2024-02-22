
let option
let itens = []

while (option != 3) {

    let option = Number(prompt(`Olá usuário! Digite a opção desejada
        1.Cadastrar um item na lista
        2.Mostar itens cadastrados
        3.Sair do programa.`))

    switch (option) {
        case 1:
            let item = prompt('Digite o item: ')
            itens.push(item)
            break;
        case 2:
            if (itens.length == 0) {
                alert('Não existem itens cadastrados')
            } else {
                alert(itens)
            }
            break;
        case 3:
            alert("tchau")
            break;
        default:
            alert('Opção inválida. Tente novamente.')
            
    }
}