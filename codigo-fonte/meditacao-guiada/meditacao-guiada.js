function mostraMeditacoes(meditacoes){
    let conteudo="";
    meditacoes.forEach(item => {
        conteudo+=`
        <div class="col border rounded m-0 ">
            <img src="${item.imagem}" class="filter mx-auto d-block" alt="meditação foco"/>
            <h5 class="d-flex justify-content-center">${item.nome}</h5>
            <p  class="d-flex justify-content-center">${item.descricao}</P>
            <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-default btn-circle icon"><i class="bi-play-circle"></i></button>
            </div>
            <!--
            <div class="card bg-card-1">
                <img src="${item.imagem}" class="card-img-top" width="50" height="50">
                <div class="card-body">
                    <h5 class="card-title text-center">${item.nome}</h5>
                    <p class="card-text">${item.descricao}</p>
                    <p class="text-center">
                    <button type="button" class="btn btn-default btn-circle"><i class="bi-play-circle"></i></button>
                    </p>
                </div>
            </div>
            -->
        </div>
        `   
    });
    console.log("mostraMeditacoes")
    listagem.innerHTML=conteudo;

}

function filtraMeditacoes(filtro){
    if(filtro == "")
        return listaMeditacoes;
    else
        return listaMeditacoes.filter(item => item.nome.toUpperCase().startsWith(filtro.toUpperCase()))
}

pesquisa.onchange = function(){
    resultado = filtraMeditacoes(pesquisa.value);
    mostraMeditacoes(resultado);
}

listaMeditacoes=[
    {
        id:1,
        nome:"Foco",
        descricao:"Exercite sua capacidade de manter o foco",
        imagem:"Imagens/lotus.png"
    },

    {
        id:2,
        nome:"Durma Bem",
        descricao:"Exercite sua capacidade de manter o foco",
        imagem:"Imagens/moon.png"
    },

    {
        id:3,
        nome:"Acalmar a Mente",
        descricao:"Acalmar a mente e equilibrar os pensamentos",
        imagem:"Imagens/mind.png"
    },

        {
        id:4,
        nome:"O Propósito da Meditação",
        descricao:"Ouça sua voz interna através desta meditação para encontre as respostas em seu coração",
        imagem:"Imagens/meditation.png"
    },

    {
        id:5,
        nome:"Pianoterapia",
        descricao:"Melhore sua concentração com esta meditação",
        imagem:"Imagens/music-note.png"
    },


]

mostraMeditacoes(listaMeditacoes)