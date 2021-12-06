// Exercicio de interpretação de código

//1) O Filme, o elenco na posição zero que é Matheus Nachtergaele
// Virginia cavendish e o canal de transmissões que é na globo as 14hrs

//2)A) Ira imprir o objeto cachorro que foi alterado o nome para
//Juba e criado a variavel gato, que virou a variavel tartaruga e trocado as letra "A" e "O"
//que virou jubo.

//B)Ela Copia ou altera o que contem em um objeto.

//3)A)ira imprimir que backender é false pois foi declarado ser false no objeto
//B)e ira ser indefinido a altura, pois não tinha nada definido na altura e não era possivel imprimir pois não contem nada.

// Exercicios de escrita de código

/*1)A) e B)

const pessoa = {
    nome: "Jonathan",
    apelidos: ["Jhow","Jhonny","John",]
}

function apelidos(){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)
}

console.log(apelidos(pessoa))

const novosApelidos = {
    ...pessoa, 
    Novos_apelidos: ["Jo","Jojo","Jon"]

}

function novaFuncaoApelido(){
    console.log(`Eu sou ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.Novos_apelidos[0]}, ${novosApelidos.Novos_apelidos[1]} ou ${novosApelidos.Novos_apelidos[2]} `)
}

console.log(novaFuncaoApelido(novosApelidos))
*/

//Exercicio 2)
/*

const pessoa1 = {
    nome: "Joaquin",
    idade: 32,
    profissao: "Arquiteto",

}

const pessoa2 = {
    nome: "Jefferson",
    idade: 60,
    profissao: "Empresario",

}

function funcaoPessoa1(){
    const novaLista = [`${pessoa1.nome},${pessoa1.nome.length},${pessoa1.idade},${pessoa1.profissao},${pessoa1.profissao.length}`]
    const segundaLista = [`${pessoa2.nome},${pessoa2.nome.length},${pessoa2.idade},${pessoa2.profissao},${pessoa2.profissao.length}`]
    return console.log(novaLista,
        segundaLista)
}

funcaoPessoa1(pessoa1,pessoa2)
*/

//Exercício 3
/*
const carrinho = []

const frutasDoSacolao1 = {
    nome: "Abacate", Disponibilidade: true,
}
const frutasDoSacolao2 = {
    nome: "Morango", Disponibilidade: true,
}
const frutasDoSacolao3 = {
    nome: "Melão", Disponibilidade: true,
}

function preencherCarrinho(fruta1,fruta2,fruta3){
    fruta1 = frutasDoSacolao1
    fruta2 = frutasDoSacolao2
    fruta3 = frutasDoSacolao3
    carrinho.push(fruta1,fruta2,fruta3)
    console.log(carrinho)
}

preencherCarrinho("")
*/
