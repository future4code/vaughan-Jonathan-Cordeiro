/*Exercicios de interpretação de Código

Exercicio 1 

 resultado = bool1 && bool2
console.log("a. ", false) aqui temos uma mensagem de false, pois uma é true e a outra é false

resultado = bool1 && bool2 && bool3 
console.log("b. ", false) Aqui também temos uma mensagem de false, seria true se todas fossem true mas apenas 2 são.

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", true) Aqui temos o resultado true, porque !false que seria o resultado da primeira vira true e bool1 ou bool2
temos o operador ou que consequentemente tem um true e acaba sendo true.

console.log("d. ", typeof boolean) aqui temos o typeof boolean que foi o que utilizamos
*/

/* Exercicio 2

O código vai dar erro porque estamos tentando concatenar duas strings, temos que transformar as strings em number.


/* Exercicio 3

let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

let primeiroNumeroEmNumber = Number(primeiroNumero)
let segundoNumeroEmNumber = Number(segundoNumero)

const soma = primeiroNumeroEmNumber + segundoNumeroEmNumber

console.log(soma)
*/

// Exercicio de escrita de código

//Exercicio 1

/*
const idadeDoUsuario = prompt("Qual a sua idade?: ");
const idadeDoMelhorAmigo = prompt("Qual a idade do seu melhor amigo(a)?: ");

const idadeDoUsuarioEmNumber = Number(idadeDoUsuario);
const idadeDoMelhorAmigoEmNumber = Number(idadeDoMelhorAmigo);

const idade = idadeDoUsuarioEmNumber > idadeDoMelhorAmigo;

const diferençaDeIdade = idadeDoUsuarioEmNumber - idadeDoMelhorAmigo;

console.log("Sua idade é maior que a do seu amigo? ", idade);

console.log("A diferença de idade é de", diferençaDeIdade, "anos") 
*/

/*Exercicio 2

const numeroPar = prompt("Digite um Número PAR:");

const numeroParEmNumber = Number(numeroPar);

const restoDivisao = (numeroParEmNumber % 2);

console.log("O Resto da divisão desse numero é: ",restoDivisao);
*/
// c) Apareceu o numero zero toda vez porque zero é par e porque todo número inteiro que pode ser escrito na forma 2n (n inteiro) é par.
// d) Foi impresso o numero 1, podemos identificar dessa forma que o número é impar já que é  contrario de zero que é par.

//Exercicio 3
/*

const idadeEmAnos = prompt("Digite sua idade em Anos:");

const idadeEmAnosEmNumber = Number(idadeEmAnos);

const idadeEmMeses = idadeEmAnosEmNumber * 12 // Um Ano tem 12 meses
const idadeEmDias = idadeEmAnosEmNumber * 365 // Um ano tem 365 dias
const idadeEmHoras= idadeEmAnosEmNumber * 8766 //Um ano tem 8766 horas

console.log("Sua idade em anos é: ", idadeEmAnosEmNumber);
console.log("Sua idade em anos é: ", idadeEmMeses);
console.log("Sua idade em anos é: ", idadeEmDias);
console.log("Sua idade em anos é: ", idadeEmHoras);
*/

//Exercicio 4
/*
const numero1 = prompt("Digite o Primeiro Número: ");
const numero2 = prompt("Digite o Segundo Número: ");

const numero1EmNumber = Number(numero1);
const numero2EmNumber = Number(numero2);

const resultado1 = numero1EmNumber > numero2EmNumber;
const resultado2 = numero1EmNumber === numero2EmNumber;
const resultado3 = (numero1EmNumber % numero2EmNumber)==0;
const resultado4 = (numero2EmNumber % numero1EmNumber)==0;

console.log("O primeiro numero é maior que segundo? ", resultado1)
console.log("O primeiro numero é igual ao segundo? ", resultado2)
console.log("O primeiro numero é divisível pelo segundo?", resultado3)
console.log("O segundo numero é divisível pelo primeiro?", resultado4)
*/

//Desafios

//Exercicio 1 A)
/*
const grausFahrenheit = 77

const Kelvin = (grausFahrenheit - 32)*(5/9) + 273.15;

console.log("O Resultado da conversão de unidade é:",Kelvin,"K");
*/

//Exercicio B)
/*
const grausCelsius = 80;

const grausFahrenheit = (grausCelsius)*(9/5) + 32;

console.log("O Resultado da conversão de unidade é:",grausFahrenheit,"°F");
*/

//EXERCICIO C)
/*
const grausCelsius = 30;

const grausFahrenheit = (grausCelsius)*(9/5) + 32;
const kelvin = (grausFahrenheit - 32)*(5/9) + 273.15;

console.log("O Valor em Fahrenheit é:", grausFahrenheit,"°F");
console.log("O Valor em Kelvin é:", kelvin,"K");
*/
//Exercicio D)
/*
const grausCelsius = prompt("Digite a quantidade de Graus Celsius a converter: ");

const grausCelsiusEmNumber = Number(grausCelsius)

const grausFahrenheit = (grausCelsiusEmNumber)*(9/5) + 32;
const kelvin = (grausFahrenheit - 32)*(5/9) + 273.15;

console.log("O Valor em Fahrenheit é:", grausFahrenheit,"°F");
console.log("O Valor em Kelvin é:", kelvin,"K");
*/

//Exercicio 2 A)
/*
const quillowat = 280;

const valorTotal = (quillowat * 0.05);

console.log("O valor a ser pago por uma residência que consume 280kwh é de: R$",valorTotal)
*/

//Exercicio B
/*
const quillowat = 280;

const valorTotal = (quillowat * 0.05);
const valorComDesconto = valorTotal * 0.15;
const valorTotalComDesconto = valorComDesconto - valorTotal


console.log("O valor a ser pago por uma residência que consume 280kwh é de: R$",valorTotal)
console.log("O valor a ser pago por uma residência que consume 280kwh com 15% de desconto é de: R$",valorTotalComDesconto)

Infelizmente ficou negativo não soube alterar. */








