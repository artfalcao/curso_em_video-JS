function tabuada() {
    let numt = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let num = Number(numt.value)
    if (numt.value.length ==0) {
        alert('[ERRO] Insira um número!')
    }else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.value = `tab${c}`
            tab.appendChild(item)
    }
    }
    
}