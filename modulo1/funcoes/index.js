//Exercícios de interpretação de código

// 1.A) Ira imprir a função minhaFunção que é a variavel*5, ou seja ira multiplicar 5*2 e 5*10

//   B) Não ira acontecer nada, o código ira continuar funcionando porém não vai ser impresso na tela.

// 2)A) Ela ira diminuir o texto para minusculo e procurar a palavra cenoura no texto, caso tenha a palavra cenoura
//ele ira retornar true se não tiver retornara false.

//B) as 3 entradas serão true, porque as 3 contem cenoura e foram diminuidas para minuscula e foram encontradas.

//Exercícios de escrita de código

//1)a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
/*
const frase = ("Eu sou Jonathan, tenho 20 anos, moro em itu e sou estudante")

function informaçoesSobreMim() {
    console.log(frase)
  }  

informaçoesSobreMim("")

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

function receberInformaçoes (nome,idade,endereço,profissao){
    nome = prompt("Qual seu nome?")
    idade = prompt("Qual sua idade?")
    endereço = prompt("Qual seu endereço?")
    profissao = prompt("Qual sua profissão?")
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)
}

receberInformaçoes("")
*/

//2) Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado

/*function somaNumero1E2(numero1, numero2){
    
    numero1 = Number(prompt("Digite um Numero: "))
    numero2 = Number(prompt("Digite o Segundo Numero: "))   

    const soma = numero1 + numero2
    
    console.log(`O Resultado é: ${soma}`)

}

somaNumero1E2("")
*/

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o 
//primeiro número é maior ou igual ao segundo.
/*
function receber2Numeros(numero1, numero2){
    numero1 = Number(prompt("Digite um numero: "))
    numero2 = Number(prompt("Digite um segundo numero: "))

    const maiorOuMenor = numero1 >= numero2
    console.log(`O Primeiro numero é maior ou igual ao segundo numero?: ${maiorOuMenor}`);
}

receber2Numeros("")
*/
//C) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
/*
function parOuImpar(numero){
    numero = Number(prompt("Digite um numero: "))
    
    const resultado = numero % 2 ==0
    console.log(`O Numero é par?: ${resultado}`)

}

parOuImpar("")
*/

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.
/*
function mensagem(mensagem){
    
    mensagem = mensagem.toUpperCase()
    console.log(`Mensagem em letras maiúsculas e com seu tamanho: ${mensagem}`)
    console.log(mensagem.length)
    
    return mensagem
}

mensagem("Palmeiras")

*/

//3)Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
/*

function soma(numero1,numero2){
    numero1 = Number(prompt("Digite um numero: "))
    numero2 = Number(prompt("Digite o segundo numero: "))

    const soma = numero1 + numero2
    const subtracao = numero1 - numero2
    const multiplicacao = numero1 * numero2
    const divisao = numero1 / numero2
    
    console.log("Soma: ", soma)
    console.log("Substração: ", subtracao)
    console.log("Multiplicação: ", multiplicacao)
    console.log("Divisão: ",divisao)

    
}

soma("")
*/

//Desafio

//1a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
/*
const sejaBemVindo = pessoa => `Olá, Seja Bem Vindo!!! ${pessoa}!`

console.log(
    sejaBemVindo("Jonathan Ramos")
)
*/

//B)Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para 
//imprimi-lo
/*
const somaDosNumeros = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero

const numero1 = Number(prompt("Digite o primeiro Numero: "))
const numero2 = Number(prompt("Digite o segundo Numero: "))


 const resultado = somaDosNumeros(numero1, numero2)

 console.log(resultado)
*/
