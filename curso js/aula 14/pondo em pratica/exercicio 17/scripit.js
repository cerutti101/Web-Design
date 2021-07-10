function calcular(){
let n1=document.getElementById("n1")
n2=document.getElementById("n2")
result=document.getElementById("result")
 nu1=Number(n1.value)
 nu2=Number(n2.value)
 z=1
if(n1.value.length==0||n2.value.lenght==0){
    alert("ta errado os numero, olha denovo")
}else{
result.innerHTML=""
for(c=nu1;z<=nu2;c+=nu1){
    z+=1
    let item= document.createElement("option")
    item.text=`${nu1} x ${z}= ${c}`
    result.append(item)
}
n1.value=""
n2.value=""
}
}