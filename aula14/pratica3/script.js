

function contagem() {
    var inicio = document.getElementById('inicio')
    var i = Number(inicio.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var passo = document.getElementById('passo')
    var p = Number(passo.value)
    var resultado = document.getElementById('res')
    // resultado.innerHTML = `A contagem se inicia em ${inicio.value} e vai até ${fim.value} de ${passo.value} em ${passo.value}!` 
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível contar!"
        // alert('[ERRO} Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: '
        if(p<=0) {
            alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }
        //Contagem Crescente
        if (i < f) {
            for (let c = i; c <= f; c+= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            } 
        //Contagem Regressiva
        }else {
            for (let c = i; c >= f; c-= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } resultado.innerHTML += `\u{1F3C1}`
       
    }
    
    
}