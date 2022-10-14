let listaPersonagens = ["Elminster", "Mordenkainen", "Tasha"]

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function cadastrarPersonagem(personagem) {

    if (listaPersonagens.includes(personagem)) {
        console.log("\nPersonagem já cadastrado!")
    } else {
        listaPersonagens.push(personagem)
        console.log(`\n${personagem} foi adicionado à sua party!`)
        return listaPersonagens
    }
    menu(readline)

}


function consultarIndice(personagem) {
    let indice = listaPersonagens.indexOf(personagem)
    if (indice >= 0) {
        console.log(`A posição de ${personagem} na lista é ${indice}`)
        return indice
    } else {
        console.log("Personagem não existente")
    }

}

function removerPersonagem(personagem) {
    indice = consultarIndice(personagem)
    if (listaPersonagens.includes(personagem)) {
        listaPersonagens.splice(indice, 1)
        console.log(`Infelizmente ${personagem} sucumbiu`)
        menu(readline)
    } else {
        menu(readline)
    }
}

function menu(readline) {
    readline.question(`
1 - Cadastrar novo personagem
2 - Consultar lista de personagens cadastrados
3 - Consultar índice do personagem
4 - Remover personagem
5 - Sair

`, escolha => {
        switch (escolha) {

            case "1":
                readline.question("\nQual personagem gostaria de cadastrar? ", personagem => {
                    cadastrarPersonagem(personagem)
                    menu(readline)
                })
                break
            case "2":
                console.log(`\nSua party é composta por ${listaPersonagens}`)
                menu(readline)
                break
            case "3":
                readline.question("\nQual personagem gostaria de consultar? ", personagem => {
                    consultarIndice(personagem)
                    menu(readline)
                })
                break
            case "4":
                readline.question("\nQual personagem gostaria de remover? ", personagem => {
                    removerPersonagem(personagem)
                    menu(readline)
                })
                break

            case "5":
                console.log("Até mais!")
                readline.close()
        }
    })
}

menu(readline)