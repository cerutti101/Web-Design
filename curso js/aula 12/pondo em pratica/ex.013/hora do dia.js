function carregar(){
var msg=document.getElementById("msg")
var imagem=document.getElementById("imagem")
var boa=document.getElementById("boa")
var data= new Date()
var momento= data.getHours()
var momentom=data.getMinutes()
msg.innerText=(` Agora são ${momento}:${momentom} horas           `)
if (momento>= 0 && momento<12){
  boa.innerText+= " bom dia!"
  imagem.src="banco de imagem/manha.png"
  document.body.style.background= "#e2cd9f"
} 
  else if(momento>=12 && momento< 18){
boa.innerText+= " boa tarde!"
imagem.src="banco de imagem/tarde,n1.png"
document.body.style.background="#b9846f"
  }
  else if(momento>=18 && momento< 23){
    boa=document.innerText+= " boa noite!"
    imagem.src="banco de imagem/noite.png"
    document.body.style.background="#515154"  
  }
}
