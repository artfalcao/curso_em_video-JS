function carregar () {
    var msgm = document.getElementById('msgm')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msgm.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#f2d088'
    }else if(hora >= 12 && hora <18) {
        //BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = '#21214a'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#122127'
    }
}