//entrada - genero
var fgen = document.getElementsByName('radgen')
var gen = ''
//entrada - visão elemental
var fvisio = document.getElementsByName('radvis')
var visio = ''
//saida
var res = document.getElementById("res")
var limpar = document.getElementById("enter")

//saida - imagem
var img = document.createElement('img')
img.setAttribute('id','picture')
//function - botão verificar
function verificar(){
var name = document.getElementById('name')
    if(fgen[0].checked){
            gen = 'Boy'
            if(fvisio[0].checked){
                visio = 'Pyro'
                img.setAttribute('src','../assets/imagens/bennett.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#F20505'
                name.innerHTML = `Bennett`
            }else if (fvisio[1].checked){
                visio = 'Anemo'
                img.setAttribute('src','../assets/imagens/venti.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#3EA086'
                name.innerHTML = `Venti`
            }else if(fvisio[2].checked){
                visio = 'Cryo'
                img.setAttribute('src','../assets/imagens/chongyun.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#639CBF'
                name.innerHTML = `Choungyun`
            }else if (fvisio[3].checked){
                visio = 'Geo'
                img.setAttribute('src','../assets/imagens/itto.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#F2D857'
                name.innerHTML = `Itto`
            }else if (fvisio[4].checked){
                visio = 'Dendro'
                img.setAttribute('src','../assets/imagens/beizou.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#9CD9AB'
                name.innerHTML = `Beizou`
            }else if (fvisio[5].checked){
                visio = 'Eletro'
                img.setAttribute('src','../assets/imagens/cyno.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#545ABF'
                name.innerHTML = `Cyno`
            }else{
                visio = 'Hydro'
                img.setAttribute('src','../assets/imagens/kamisatoayato.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#3F3F81'
                name.innerHTML = `Kamisato Ayato`
            }
        }else if(fgen[1].checked){
            gen = 'Girl'
            if(fvisio[0].checked){
                visio = 'Pyro'
                img.setAttribute('src','../assets/imagens/yoimiya.png',)
                document.body.style.transition = '1s'
                document.body.style.background = '#C13E2E'
                name.innerHTML = `Yoimiya`
            }else if (fvisio[1].checked){
                visio = 'Anemo'
                img.setAttribute('src','../assets/imagens/sucrose.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#518C77'
                name.innerHTML = `Sucrose`
            }else if(fvisio[2].checked){
                visio = 'Cryo'
                img.setAttribute('src','../assets/imagens/ganyu.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#659DBF'
                name.innerHTML = `Ganyu`
            }else if (fvisio[3].checked){
                visio = 'Geo'
                img.setAttribute('src','../assets/imagens/ningguang.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#DBB65F'
                name.innerHTML = `Ningguang`
            }else if (fvisio[4].checked){
                visio = 'Dendro'
                img.setAttribute('src','../assets/imagens/nahida.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#9CBF4E'
                name.innerHTML = `Nahida`
            }else if (fvisio[5].checked){
                visio = 'Eletro'
                img.setAttribute('src','../assets/imagens/yae.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#731F26'
                name.innerHTML = `Yae Miko`
            }else{
                visio = 'Hydro'
                img.setAttribute('src','../assets/imagens/sangonomiya.png')
                document.body.style.transition = '1s'
                document.body.style.background = '#AD97D3x'
                name.innerHTML = `Sangonomiya Kokomi`
            }
        }
    limpar.remove()
    res.style.textAlign = 'center'
    res.innerHTML = ` It's a ${gen} with elemental vision ${visio}.`
    res.appendChild(img) 
    
}
    
