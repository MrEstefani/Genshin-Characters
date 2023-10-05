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
                document.body.style.background = '#F20505'
                img.setAttribute('src','photo/bennett.png')
                name.innerHTML = `Bennett`
            }else if (fvisio[1].checked){
                visio = 'Anemo'
                document.body.style.background = '#3EA086'
                img.setAttribute('src','photo/venti.png')
                name.innerHTML = `Venti`
            }else if(fvisio[2].checked){
                visio = 'Cryo'
                document.body.style.background = '#639CBF'
                img.setAttribute('src','photo/chongyun.png')
                name.innerHTML = `Choungyun`
            }else if (fvisio[3].checked){
                visio = 'Geo'
                document.body.style.background = '#F2D857'
                img.setAttribute('src','photo/itto.png')
                name.innerHTML = `Itto`
            }else if (fvisio[4].checked){
                visio = 'Dendro'
                document.body.style.background = '#9CD9AB'
                img.setAttribute('src','photo/beizou.png')
                name.innerHTML = `Beizou`
            }else if (fvisio[5].checked){
                visio = 'Eletro'
                document.body.style.background = '#545ABF'
                img.setAttribute('src','photo/cyno.png')
                name.innerHTML = `Cyno`
            }else{
                visio = 'Hydro'
                document.body.style.background = '#3F3F81'
                img.setAttribute('src','photo/kamisatoayato.png')
                name.innerHTML = `Kamisato Ayato`
            }
        }else if(fgen[1].checked){
            gen = 'Girl'
            if(fvisio[0].checked){
                visio = 'Pyro'
                document.body.style.background = '#C13E2E'
                img.setAttribute('src','photo/yoimiya.png',)
                name.innerHTML = `Yoimiya`
            }else if (fvisio[1].checked){
                visio = 'Anemo'
                document.body.style.background = '#518C77'
                img.setAttribute('src','photo/sucrose.png')
                name.innerHTML = `Sucrose`
            }else if(fvisio[2].checked){
                visio = 'Cryo'
                document.body.style.background = '#659DBF'
                img.setAttribute('src','photo/ganyu.png')
                name.innerHTML = `Ganyu`
            }else if (fvisio[3].checked){
                visio = 'Geo'
                document.body.style.background = '#DBB65F'
                img.setAttribute('src','photo/ningguang.png')
                name.innerHTML = `Ningguang`
            }else if (fvisio[4].checked){
                visio = 'Dendro'
                document.body.style.background = '#9CBF4E'
                img.setAttribute('src','photo/nahida.png')
                name.innerHTML = `Nahida`
            }else if (fvisio[5].checked){
                visio = 'Eletro'
                document.body.style.background = '#731F26'
                img.setAttribute('src','photo/yae.png')
                name.innerHTML = `Yae Miko`
            }else{
                visio = 'Hydro'
                document.body.style.background = '#AD97D3x'
                img.setAttribute('src','photo/sangonomiya.png')
                name.innerHTML = `Sangonomiya Kokomi`
            }
        }
    limpar.remove()
    res.style.textAlign = 'center'
    res.innerHTML = ` It's a ${gen} with elemental vision ${visio}.`
    res.appendChild(img) 
}
    
