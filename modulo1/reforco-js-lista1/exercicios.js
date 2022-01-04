// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaRetangulo = Number(prompt("Qual a Altura do retangulo?"));
  const larguraRetangulo = Number(prompt("Qual a Largura do retangulo?"))
  const resultado = alturaRetangulo * larguraRetangulo
  console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  const resultado = anoAtual - anoNascimento
  console.log(resultado)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = []
  const coresFavorita1 = prompt("Qual sua primeira cor favorita?")
  const coresFavorita2 = prompt("Qual sua segunda cor favorita?")
  const coresFavorita3 = prompt("Qual sua terceira cor favorita?")
  coresFavoritas.push(coresFavorita1,coresFavorita2,coresFavorita3)
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  if(string1.length===string2.length){
    return true
  }else if(string1.length!=string2.length){
    return false

  }

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array){
  const primeiroNumero = retornaPrimeiroElemento(array)
  const ultimoNumero = retornaUltimoElemento(array)

  array[0] = ultimoNumero
  array[array.length - 1] = primeiroNumero

  return array
  
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Qual o ano atual? "))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?: "))
  const anoDeEmissaoDocumento = Number(prompt("Qual o ano de emissão do seu documento?: "))

  const idadeDoUsuario = anoAtual - anoNascimento
  const tempoDaCarteiraDeIdentidade = anoAtual - anoDeEmissaoDocumento

  const primeiroCriterio = idadeDoUsuario <= 20 && tempoDaCarteiraDeIdentidade >= 5
  const segundoCriterio = idadeDoUsuario > 20 && idadeDoUsuario <= 50 && tempoDaCarteiraDeIdentidade >= 10
  const terceiroCriterio = idadeDoUsuario > 50 && tempoDaCarteiraDeIdentidade >= 15

  console.log(primeiroCriterio || segundoCriterio || terceiroCriterio)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const primeiroCriterio = ano % 400 === 0
  const segundoCriterio = (ano % 4 === 0) && (ano % 100 !== 0)
  return primeiroCriterio || segundoCriterio

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("tem mais de 18 anos?")
  const escolaridadeCompleta = prompt("tem ensino médio completo?")
  const disponibilidadeDeHorarios = prompt("tem disponibilidade de horários?:")

  console.log(idade==="sim"&&escolaridadeCompleta==="sim"&&disponibilidadeDeHorarios==="sim")

}