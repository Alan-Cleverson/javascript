
function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    // var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ){
        alert('[ERRO] Vereifique os dados e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = 'Se ainda não fez, vai fazer: '+ idade
    }

}