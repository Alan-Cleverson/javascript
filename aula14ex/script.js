function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (ini.Value.length == 0 || fim.value.length == 0 ||passo.value.length == 0){
        window.alert('[ERRO] faltam dados!')     
    } else {
       res.innerHTML = 'contando: '
       let i = number(ini.value) 
       let f = number(fim.value)
       let p = number(passo.value)

       for(let c = i, c u<= f, c +=p) {
        res.innerHTML += '${c}'
       }
    }
     
   
}