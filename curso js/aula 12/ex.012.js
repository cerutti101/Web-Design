var agora= new Date()//reforcou o aninhamento das condições, e aprendeu a tirar a hora do sistema
var horas = agora.getHours()
console.log(`agora são exatamente ${horas} Horas`)
if(horas <12)
{console.log('bom dia')
 }else if(horas>=12 && horas<18)
  {console.log("boa tarde")
  }else if(horas>=18 && horas<=24)
   {console.log("boa noite")
 }