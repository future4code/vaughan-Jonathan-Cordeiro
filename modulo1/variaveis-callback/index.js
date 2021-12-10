//Exercicios de interpretação de Código

//1)A) Ele criou uma nova array e vai imprimir a nova array com os nomes e apelido de cada um em 3 arrays diferentes.

//2)A) Ele vai imprimir uma nova array apenas com os nomes das pessoas sem o apelido.

//3)A) Ele vai filtrar em uma nova array apenas aqueles que tem o apelido diferente de chijo e imprimir.

//Exercicio de escrita de código.

// 1.)Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
 

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

// const arrayNomeDoguinhos = pets.map((item, index, array)=> {
    
//     return item.nome

// })

// console.log(arrayNomeDoguinhos)

// b) Crie um novo array apenas com os [cachorros salsicha]

// const arrayCachorrosSalsichas = pets.filter((item,index,array)=>{
//     return item.raca === "Salsicha"
// })

// console.log(arrayCachorrosSalsichas)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


// const arrayRacaPoodle = pets.filter((item,index,array)=>{
//     return item.raca === "Poodle"
// })

// const arrayNomePoodle = arrayRacaPoodle.map((item,index,array)=>{
//     return item.nome

// })

// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayNomePoodle[0]}!`)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${arrayNomePoodle[1]}!`)

//2)Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as 
//funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const novoArrayNomesProdutos = produtos.map((item) => {
//     return item.nome
// })

// console.log(novoArrayNomesProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em 
//todos eles

//NÃO CONSEGUI FINALIZAR ESSE EXERCICIO, VOU TERMINAR MAIS TARDE.

// const arrayComPreco = produtos.map((item)=>{
//     return item.preco
// })



// const arrayComNome = produtos.map((item)=>{
//     return item.nome
// })

// function arraysDivididosPor10 (){
//     for(let i = 0; i < 10; i++){
//         const numeros = arrayComPreco[i] * 0.5 /5%
//         console.log(numeros)
//     }
// }

// arraysDivididosPor10()

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const arrayComBebidas = produtos.filter((item)=>{
//     return item.categoria === "Bebidas"
// })

// console.log(arrayComBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const arrayComBebidas = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })

// console.log(arrayComBebidas)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const arrayOriginalNome = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })

// // console.log(arrayComBebidas)

// const arrayComYpe = arrayOriginalNome.map((item,index,array)=>{
//     return item.nome
// })

// const arrayComPreco = arrayOriginalNome.map((item,index,array)=>{
//     return item.preco
// })

// const produtosDois = [
//     { nome: `${arrayComYpe[0]}`, preco: arrayComPreco[0] },
//     { nome: `${arrayComYpe[1]}`, preco: arrayComPreco[1] }, 

//  ]

// console.log(`Compre ${arrayComYpe[0]} por ${arrayComPreco[0]}`)
// console.log(`Compre ${arrayComYpe[1]} por ${arrayComPreco[1]}`)




