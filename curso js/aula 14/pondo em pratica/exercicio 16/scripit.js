function contar() {
  let iniciot = document.getElementById("n1")
  let fimt = document.getElementById("n2")
  let pulot = document.getElementById("n3")
  let res = document.getElementById("resultadotxt")
  if (iniciot.value.length == 0 && fimt.value.length == 0 && pulot.value.length == 0) {
    window.alert("[ERRO], preencha corretamente as informações")
    res.innerText = ("Contanto.....")
  }
  else if (iniciot.value.length == 0) {
    window.alert("[ERRO] preencha corretamente a informação de inicio")
    res.innerHTML = ("Contando.....")
  } else if (fimt.value.length == 0) {
    window.alert("[ERRO] preencha corretamente a informação de fim")
    res.innerHTML("Contanto.....")
  } else if (pulot.value.length == 0) {
    window.alert("[AVISO!] Como valor de pulo não foi encontrado, foi utilizado o valor 1")
    pulo = 1
    res.innerHTML("Contando.....<br>")
  }
  let i = Number(iniciot.value)
  let f = Number(fimt.value)
  let p = Number(pulot.value)
  if (i > f) {

    for (let c = i; c >= f; c -= p) {
      res.innerHTML += `${c} `
    }
  }
  for (let c = i; c <= f; c += p) {
    res.innerHTML += `${c}`
  }

}
