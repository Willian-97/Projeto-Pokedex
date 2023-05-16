const btn = document.getElementById('botao-alterar-tema')
const modoEscuro = document.body
const imgModoEscuro = document.getElementById('imagem-botao')

btn.addEventListener('click',() =>{
    if(modoEscuro.classList.contains('modo-escuro') ){
        modoEscuro.classList.remove('modo-escuro')
        imgModoEscuro.setAttribute('src', './src/img/sun.png')
    }else{
        modoEscuro.classList.add('modo-escuro')
        imgModoEscuro.setAttribute('src', './src/img/moon.png')
    }

})
