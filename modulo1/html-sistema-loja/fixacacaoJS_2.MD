~~~Javascript
function calculaPrecoTotal(quantidade) {
  const precoMacaMenorQueDoze = 1.30
  const precoMacaUmaDuzia = 1.00
  let soma
  if(quantidade<12){
    soma = quantidade * precoMacaMenorQueDoze
  }else if(quantidade>=12){
    soma = quantidade * precoMacaUmaDuzia
  }
  return soma
}
~~~