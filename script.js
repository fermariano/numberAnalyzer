let numeros = document.getElementById('tela')
let local = document.getElementById('valores')
let resultado = document.getElementById("resultado")
let valor = document.getElementById('numero')
let valorConj = []

function add () {
    if (isNumber(valor.value) && !inLista(valor.value, valorConj)) {
        valorConj.push(Number(valor.value)) 
        local.innerHTML = ""
        local.innerHTML += `O valor ${valor.value} foi adicionado! ` 
        resultado.innerHTML = ""
        numeros.innerHTML += `  ${valor.value} - `
        

    } else {
        window.alert('[ERRO] Número inválido ou já adicionado!')
    }
    valor.value = ""
    valor.focus()
    
}

function isNumber(price) { //diz se é um número entre 1 e 100
    if (Number(price) >= 1 && Number(price) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(price, list) {
    if (list.indexOf(Number(price)) != -1 || price == list.indexOf(Number(price))) { //procura na lista o valor -1
        return true 
    }  else {
        return false
    }
}
    


function finalizar() {
    if (valorConj.length == 0) {
        window.alert('[ERRO] Adicione um valor!')
    } else {
        
        let maior = valorConj[0]
        let menor = valorConj[0]
        let soma = 0
        let media = 0
        for (let pos in valorConj) {
            soma += valorConj[pos]
            media += valorConj[pos] / valorConj.length
            if (valorConj[pos] > maior) 
            maior = valorConj[pos]
            if (valorConj[pos] < menor)
            menor = valorConj[pos]
        } 

        resultado.innerHTML = ""
        resultado.innerHTML += ` <p> Ao todo, temos ${valorConj.length} números cadastrados. </p>`
        resultado.innerHTML += `<p> O maior valor informado é ${maior} </p>`
        resultado.innerHTML += `<p> O menor valor informado é ${menor} </p>`
        resultado.innerHTML += `<p> A soma desses valores é ${soma} </p>`
        resultado.innerHTML += `<p> A média desses valores é ${media} </p>`
    } 
    
    
    
}


