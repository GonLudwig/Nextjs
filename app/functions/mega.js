export function mega(quantidade = 6, numeros = []) {
    quantidade = +quantidade
    if (quantidade < 6 && quantidade > 60) {
        throw "Quantidade invalida!"
    }

    if (numeros.length === quantidade) {
        return numeros.sort((a, b) => a - b)
    }

    const numerosAleatorios = parseInt(Math.random() * 60 ) +1
    if (!numeros.includes(numerosAleatorios)) {
        return mega(quantidade, [...numeros, numerosAleatorios])
    } else {
        return mega(quantidade, numeros)
    }
}