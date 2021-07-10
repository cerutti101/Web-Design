function carregar() {
    var cli = new Date()
    var aninho = cli.getFullYear()
    var tnasc = document.getElementById("txtn1")
    var sexo = document.getElementsByName("radge")
    var result = document.getElementById("txtresultado")
    var resultimag = document.getElementById("imagem")
    var resultidade = aninho - Number(tnasc.value)
    var genero = ""
    var generotxt=""
    if (tnasc.value.length == 0 || tnasc.value > aninho) {
        window.alert("[ERRO] Verifique os dados")
    }
    if (sexo[0].checked) {
        genero = 0
        generotxt=" Homem"
    } else if (sexo[1].checked) {
        genero = 1
        generotxt="a Mulher"
    }
    switch (genero) {
        case 0:
            if(resultidade<=10){
               result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
               resultimag.src="banco de imagem . idade/menos que 10 mulher.jpg"
            } else if(resultidade>10 && resultidade<=20){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/"
            }else if(resultidade >20 && resultidade<=30){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/"
            }else if(resultidade>30 && resultidade<=40){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/"
            }else if(resultidade>40 && resultidade<=50){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/"
            }else if(resultidade>50 && resultidade<=60){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/"
            }else if(resultidade>60){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/"
            }
            break

        case 1:
            if(resultidade<=10){
                result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                resultimag.src="banco de imagem . idade/menos que 10 mulher.jpg"
             } else if(resultidade>10 && resultidade<=20){
                 result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                 resultimag.src="banco de imagem . idade/"
             }else if(resultidade >20 && resultidade<=30){
                 result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                 resultimag.src="banco de imagem . idade/"
             }else if(resultidade>30 && resultidade<=40){
                 result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                 resultimag.src="banco de imagem . idade/"
             }else if(resultidade>40 && resultidade<=50){
                 result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                 resultimag.src="banco de imagem . idade/"
             }else if(resultidade>50 && resultidade<=60){
                 result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                 resultimag.src="banco de imagem . idade/"
             }else if(resultidade>60){
                 result.innerText=(`detectamos um${generotxt} com ${resultidade}`)
                 resultimag.src="banco de imagem . idade/"
                }
            break
    }

}
