function convertidorTemp(C) {
    return C * (9/5) + 32
}

function resolvedor(a, b, c, is_positive_root) {
    if (is_positive_root === true){
        return (-b + Math.sqrt(b**2 - 4*a*c)) / (2 * a)
    } else if (is_positive_root === false){
        return (-b - Math.sqrt(b**2 - 4*a*c)) / (2 * a)
    }
}

function mejorParidad(n){
    return n % 2 == 0
}

let peorParidad = function(n){
    if (n === 1){
        return false
    }
    else if (n === 2){
        return true
    }
    else if (n === 3){
        return false
    }
    else if (n === 4){
        return true
    }
    else if (n === 5){
        return false
    }
    else if (n === 6){
        return true
    }
    else if (n === 7){
        return false
    }
    else if (n === 8){
        return true
    }
    else if (n === 9){
        return false
    }
    else if (n === 10){
        return true
    }
}

console.log(convertidorTemp(-30))
console.log(mejorParidad(9))
console.log(peorParidad(10))
console.log(resolvedor(1,5,4, false))