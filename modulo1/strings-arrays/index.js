// Exercicios de interpretação de código

/*
 1. a) ira apresentar uma mensagem de A no console e undefinido por que o valor da variavel "array", não foi definida.
    b) ira imprir b no console e null porque null foi colocado como valor.
    c) ira imprir c no console e o tamanho da string que no caso é uma lista e contem 11.
    d) ira dar erro de indefinido por que não temos nenhuma variavel chamado array.
    e) novamente ira dar erro, eles está tentando utilizar o splace porém dessa forma não é a correta.
    f) ira dar erro indeifinido novamente, array não é um comando então não foi guardado nenhuma lista dentro de valor e acabou dando erro.
    */

/*
2. Irá mudar tudo para maiusculo, trocar toda a letra A para I e medir o o length ira falar o tamanho da string,
Subi num onibus em mirrocos ira ficar.
*/

// Exercicios de escrita de código

/* 1)Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

const nomeUsuario = prompt("Qual seu nome?");
const emailUsuario = prompt("Qual seu e-mail?");

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`);
*/

//2)Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
/*
const comidasFavoritas = ['Sushi','Pizza','Lasanha','Strogonoff','Lanche']

console.log("Array de comidas", comidasFavoritas); // A)

console.log("Essas são minhas comidas preferidas: ", comidasFavoritas); // B)

const comidaUsuario = prompt("Olá, qual a sua comida favorita?.");

comidasFavoritas.splice(1,1, comidaUsuario)

console.log("substituindo minha segunda comida pela comida do usuário", comidasFavoritas)
*/

//3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
/*

const listaDeTarefas = []

const tarefa1 = prompt("Digite 1 de 3 tarefas que precise realizar no dia: ");
const tarefa2 = prompt("Digite 2 de 3 tarefas que precise realizar no dia: ");
const tarefa3 = prompt("Digite 3 de 3 tarefas que precise realizar no dia: ");

listaDeTarefas.push(tarefa1,tarefa2,tarefa3);

console.log ("Sua lista de tarefas é: ", listaDeTarefas)

const tarefaRealizada = prompt  ("Digite a tarefa que já realizou: 1, 2 ou 3:");

const listaRealizadas = listaDeTarefas.splice(Number(tarefaRealizada, -1));

console.log (`A Tarefa ${tarefaRealizada} foi retirada da sua lista.`);

console.log ("Lista de tarefa atualizada", listaRealizadas);

*/