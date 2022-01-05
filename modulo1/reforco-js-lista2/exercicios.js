// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort((a,b)=>{
        return a-b
    })

    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = array.filter(indice => indice % 2===0)
    return arrayPares
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []

    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          arrayPares.push(array[i]**2)
        }
      }
    return arrayPares
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply( Math, array );
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
    let maiorDivisivelPorMenor;

    if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
    } else {
    maiorNumero = num2;
    menorNumero = num1;
    }

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPrimeirosNumerosPares = [];
       for (let number = 0; arrayPrimeirosNumerosPares.length < n; number++) {
         if (number % 2 === 0) {
            arrayPrimeirosNumerosPares.push(number);
          }
        }
    return arrayPrimeirosNumerosPares;
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA=== ladoB && ladoB===ladoC && ladoC===ladoA){
        return "Equilátero"
    }else if(ladoA!==ladoB&&ladoB!==ladoC&&ladoC!==ladoA){
        return "Escaleno"
    }else if(ladoA!==ladoB||ladoB!==ladoC||ladoC!==ladoA)
        return "Isósceles"
return classificaTriangulo()

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let menor = Infinity;
    let maior = -Infinity;
    let segundoMenor = Infinity;
    let segundoMaior = -Infinity;
    let novoArray = [];

    for (let i of array) {
    if (i < menor) {
      menor = i;
    }
    if (i > maior) {
      maior = i;
        }
    }

    for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i;
        }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i;
        }
    }
    novoArray.push(segundoMaior);
    novoArray.push(segundoMenor);

  return novoArray;
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    }
    return(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`)

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const objetoPessoaAnonima = {
         ...pessoa,
         nome: "ANÔNIMO"
     }
    return objetoPessoaAnonima
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}