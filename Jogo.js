var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMosquitoTempo = 1500
var nivel = window.location.search;
nivel = nivel.replace('?','');

if(nivel== 'normal'){
    criaMosquitoTempo = 1500;
}
else if(nivel === 'dificil'){
criaMosquitoTempo = 1000;
}
else if(nivel === 'chuckNorris'){
    criaMosquitoTempo = 750
}
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo()
/* início cronometro */
var cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href= 'vitoria.html'
    }
    else{
        document.getElementById('cronometro').innerHTML = tempo
    }

},1000)
/* Fim cronometro */

/* início posição randômica */
function posicaoRandomica(){
      if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++

        }
    }
    var posicaox = Math.floor(Math.random()* largura) - 90;
    var posicaoy = Math.floor(Math.random()* altura) - 90;
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    var mosquito = document.createElement ('img');
    mosquito.src = './imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaox + 'px';
    mosquito.style.top = posicaoy + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove();
    }
    document.body.appendChild(mosquito)
}
var criaMosquito = setInterval(function(){
    posicaoRandomica()

}, criaMosquitoTempo)
/* fim posiçao randômica */
/* início tamnaho randômico */
function tamanhoAleatorio(){
var classe = Math.floor(Math.random()* 3)

switch(classe){
    case 0:
        return 'mosquito1'
    case 1:
        return 'mosquito2';
    case 2: ;
        return 'mosquito3';
}
}
/* Fim tamanho randômico */
/* Início lados aleatórios */
function ladoAleatorio(){
    var classe = Math.floor(Math.random()* 2)
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:  
            return'ladoB';
    }
}