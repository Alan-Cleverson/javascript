
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = 'agora são '+ horas +':'+ min +' horas'

    if (horas >= 0 && horas < 12){
        //Bom dia
        msg.innerHTML = 'Bom dia, agora são <strong>'+ horas +':'+ min +'</strong>'
        img.src = 'manha.png'
        document.body.style.background = '#c0b182'
        } else if (horas >= 12 && horas < 18){
            //boa tarde
            msg.innerHTML = 'Boa tarde, agora são <strong>'+ horas +':'+ min +'</strong>'
            img.src = 'tarde.png'
            document.body.style.background = '#ba6d4c'
        } else {
            //Boa noite
            msg.innerHTML = 'Boa noite, agora são  <strong>'+ horas +':'+ min +'</strong>'
            img.src = 'noite.png'
            document.body.style.background = '#162b36'
        }

}
