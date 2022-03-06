function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //Erro de Idade
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //Colocando IMAGEM Dinamicamente
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Se o radsex for Masc
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe_masc.jpg')
            }else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'jovem_masc.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_masc.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso_masc.jpg')
            }
        //Se o radsex for Fem
        }else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe_fem.jpg')
            }else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'jovem_fem.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_fem.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idoso_fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}