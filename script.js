function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos 🌞⛅🌜`
if (hora >= 0 && hora < 12){

img.src = 'manha.jpg'
document.body.style.background = '#ADFF2F'
}else if (hora >= 12 && hora <= 18){
    img.src = 'tarde.jpg'
   
    document.body.style.background = '#DB7093'
} else {
   
    img.src = 'noite.jpg'
    document.body.style.background = '#4F4F4F'
}
}