function findMax(lista_de_numeros){
    let maximo = 0
    for (let i = 0; i < lista_de_numeros.length; i++){
        if(i === 0){
            maximo = lista_de_numeros[i]
        }else if(lista_de_numeros[i] > maximo){
            maximo = lista_de_numeros[i]
        }
    }
    return maximo;
}

function includes(lista_de_numeros, n){
    in_lista = false
    for(let i = 0; i < lista_de_numeros.length; i++){
        if(lista_de_numeros[i] === n){
            in_lista = true
        }
    }
    return in_lista
}

function sum(lista_de_numeros){
    let suma = 0
    for(let i = 0; i < lista_de_numeros.length; i++){
        suma += lista_de_numeros[i]
    }
    return suma
}

function missingNumbers(lista_de_numeros){
    let menor = 0
    let mayor = 0
    let numeros_visitados = []
    for(let i = 0; i < lista_de_numeros.length; i++){
        if(i===0){
            mayor = lista_de_numeros[i]
            menor = lista_de_numeros[i]
            numeros_visitados.push(lista_de_numeros[i])
        }else{
            if(lista_de_numeros[i] > mayor){
                mayor = lista_de_numeros[i]
            }
            if(lista_de_numeros[i] < menor){
                menor = lista_de_numeros[i]
            }
            numeros_visitados.push(lista_de_numeros[i])
        }
    }

    function _includes(_lista_de_numeros, n){
        in_lista = false
        for(let i = 0; i < lista_de_numeros.length; i++){
            if(lista_de_numeros[i] === n){
                in_lista = true
            }
        }
        return in_lista
    }
    let list_missingNumbers = []
    let missingNumber = menor
    if(mayor - menor >= 2){
        while (missingNumber < mayor){
            missingNumber += 1
            if(_includes(numeros_visitados, missingNumber) === false){
                list_missingNumbers.push(missingNumber)
            }
        }
    }
    return list_missingNumbers
}

module.exports = {findMax, includes, sum, missingNumbers}