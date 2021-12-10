/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
   //  const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   //  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   //  console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let novaRodada = true

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?:")) {
   novaRodada
} else {
   console.log("O Jogo Acabou!!")
}

const carta = comprarCarta(); 

const cartaComputador = comprarCarta();

const resultadoUsuario = carta.valor + carta.valor

const resultadoComputador = cartaComputador.valor + cartaComputador.valor

console.log(`Usuário - cartas: ${carta.texto} ${carta.texto} - pontuação ${resultadoUsuario} `)

console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador.texto} - pontuação ${resultadoComputador} `)

if(resultadoUsuario === resultadoComputador){
   console.log("Empate!")

}else if(resultadoUsuario > resultadoComputador ){
   console.log("O Usuário ganhou!")
   
}else if(resultadoUsuario < resultadoComputador){
   console.log("O computador ganhou!")
}


