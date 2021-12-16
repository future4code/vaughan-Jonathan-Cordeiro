~~~javascript
function calculaNota(ex, p1, p2) {
    let media = ex + p1 + p2
    let resultado = media / 3
    if(resultado>=9){
        return "A"
    }else if(resultado<9&&resultado>=7.5){
        return "B"
    }else if(resultado<7.5&&resultado>=6){
        return "C"
    }else if(resultado<6){
        return "D"

    }
    return resultado
}
~~~