// se vai aprender a condição multipla (o leque de opcoes)
var agora=new Date()
var diasem= agora.getDay()
console.log(diasem)
switch(diasem){
    case 0:
         console.log("Domingo")
         break// break é o que faz o comando terminar, senao ele vai fazer tudo abaixo, ate o proximo break
    case 1:
         console.log("Segunda")
         break
    case 2: 
         console.log("Terça")
         break
    case 3:
         console.log("Quarta")
         break
    case 4:
         console.log("Quinta")
         break
    case 5:
         console.log("Sexta")
         break
    case 6:
         console.log("Sabado")
         break
    default: 
         console.log("[deu pau amiguinho]")
         break
}/* os dias da semana são
0=Domingo
1=Segunda
2=Terca
3=Quarta
4=Quinta
5=Sexta
6=Sabado
*/
