// Exercicios de Interpretação de Código

//1)A) Ele verifica se o número é par ou impar.

//B) para números par

//C) para números impar

//2)A) Para a pessoa digitar uma fruta e retornar o preço dessa fruta

//B) Sera impresso o valor 2.25

//C) Ira imprimir o valor 5 porque ele não parou na case Pêra e passou reto.

//3)A)Está pedindo para a pessoa digitar um numero e guardando na variavel "numero"

//B)Se fosse 10 seria maior que zero e o numero passario no teste, se fosse menor igual -10 pela lógica seria menor
//mas não temos nenhum else definindo isso

//C) ira dar erro, porque mensagem não foi definida.

//Exercicios de escrita de código

//Exercicio 1
/*
const idadeUsuario = Number(prompt("Digite sua idade: "))

if(idadeUsuario >= 18){
    console.log("O Usuário está liberado para dirigir.")
} else {
  console.log("O Usuário não tem idade suficiente para dirigir.")
}
*/

//Exercicio 2
/*
const periodoEstudo = prompt("Digite 'M' para Matutino, 'V' para vespertino ou 'N' para Noturno: ")

if(periodoEstudo==='M'){
    console.log("Bom dia")
}   else if(periodoEstudo==='V'){
    console.log("Boa tarde")
}   else if(periodoEstudo==='N'){
    console.log("Boa noite")
}   else{
    console.log('Periodo não encontrado, verifique se digitou M,V, e/ou N')
}
*/

//Exercicio 3
/*
const periodoEstudo = prompt("Digite 'M' para Matutino, 'V' para vespertino ou 'N' para Noturno: ")

switch (periodoEstudo){
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
    default:
        console.log("Periodo não encontrado, verifique se digitou M,V, e/ou N")
        break
}
*/
//Exercicio 4
/*
const generoFilme = prompt("Qual o genero do filme?");
const valorIngresso = Number(prompt("Qual o valor do ingresso? "))

if(generoFilme==="fantasia" && valorIngresso<15){
    console.log("Bom filme!")
}   else{
    console.log("Escolha outro filme")

}
*/

//Desafios 1)
/*
const generoFilme = prompt("Qual o genero do filme?");
const valorIngresso = Number(prompt("Qual o valor do ingresso? "))
const lanche = prompt("Qual lanche você vai levar?")

if(generoFilme==="fantasia" && valorIngresso<15){
    console.log(`Bom filme e aproveite seu ${lanche}`)
}   else{
    console.log("Escolha outro filme")

}
*/
