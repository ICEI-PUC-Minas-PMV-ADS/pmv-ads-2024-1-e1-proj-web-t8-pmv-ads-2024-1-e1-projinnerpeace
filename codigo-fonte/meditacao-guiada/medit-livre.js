var temporizador;
var bell = new Audio("/meditacao-guiada/Sounds/sound-bell.wav");
var tocaMusica;
modalMeditacao.addEventListener('shown.bs.modal', () => {
    var inicio = new Date();
    var tempoTotal = parseInt(tempoMeditacao.value)*60;
    
    tocaMusica = new Audio(document.querySelector('input[name="musica"]:checked').value);
    bell.play();
    tocaMusica.play();
    temporizador = setInterval(function (){
        var tempoDecorrido = (new Date() - inicio)/1000;                
        var minutes = Math.floor((tempoDecorrido % 3600) / 60);
        var seconds = Math.floor(tempoDecorrido % 60);
        contador.innerHTML = `${minutes}m ${seconds}s`;
        if(tempoDecorrido > tempoTotal)
            {
                console.log("timeout")
                clearInterval (temporizador);
                bell.play();
                contador.innerHTML = "Fim Meditação"
                tocaMusica.currentTime = 0;    
                tocaMusica.src = '';
            }

     })    
});
modalMeditacao.addEventListener('hide.bs.modal', () => {
    console.log("stopModal");
    clearInterval(temporizador);
    tocaMusica.currentTime = 0;    
    tocaMusica.src = '';
})
tempoMeditacao.onchange = function(){
    mostraTempo.innerHTML = `${tempoMeditacao.value} minuto(s)`
}