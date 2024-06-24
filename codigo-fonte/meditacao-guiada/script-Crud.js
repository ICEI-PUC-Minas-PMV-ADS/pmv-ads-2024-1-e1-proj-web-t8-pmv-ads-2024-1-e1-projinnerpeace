//Adiciona nova entrada do diário
function registraEntrada(diario) {
  console.log("registraEntrada")
    //calcula o próximo Id
    let ultimoId = parseInt(localStorage.getItem("ultimo_id_diario")) || 0;
    let novoId = ultimoId + 1;
    diario.id = novoId;
    localStorage.setItem("ultimo_id_diario", novoId);

    //Atualiza lista de entradas
    let entradas = readEntradas();
    entradas.push(diario);
    updateEntradas(entradas);
    //Limpa os campos
    CampoBem.value = ""
    CampoMal.value = ""
    var radios = document.getElementsByName("btnradio");
    for(var i = 0; i < radios.length; i++)
      radios[i].checked = false;
  }

  //Ler todas as entradas do LocalStorage
  function readEntradas() {
    return JSON.parse(localStorage.getItem("entradas")) || [];
  }

  //Grava lista de entradas no LocalStorage
  function updateEntradas(entradas) {
    localStorage.setItem("entradas", JSON.stringify(entradas));
  }

  //Atualiza uma entrada do diário
  function updateEntrada(diarioAtualizado) {
    console.log("updateEntrada")
    //Busca todas as entradas
    let entradas = readEntradas();
    //Localiza o índice do Id
    let indice = entradas.findIndex((diario) => diario.id == diarioAtualizado.id);
    //Atualiza (alteração) o índice com uma entrada do diário
    entradas[indice] = diarioAtualizado;
    //Grava a lista de entradas no LocalStorage
    updateEntradas(entradas);
  }

  //Exclui uma entrada da lista
  function deleteEntrada(idExcluida) {
    console.log("deleta", idExcluida);
    //Lê entradas
    let entradas = readEntradas();
    //Localiza o índice
    let indice = entradas.findIndex((entrada) => entrada.id == idExcluida);
    //Remove entrada (splice fatia um vetor e pula uma posição)
    entradas.splice(indice, 1);
    //Atualiza Lista de Entradas
    updateEntradas(entradas);
    //Redesenha na tela as listas de mensagens (Refresh)
    exibeEntradas(null);
  }

  //Localiza uma entrada na lista de entradas pelo Id
  function buscaEntrada(idEntrada) {
    entradas = readEntradas();
    let indice = entradas.findIndex((entrada) => entrada.id == idEntrada);
    return entradas[indice];
  }

  //Busca os dados da entrada pelo Id e atualiza o formulário
  function editaEntrada(idEntrada) {
    item = buscaEntrada(idEntrada);
    CampoBem.value = item.fezBem;
    CampoMal.value = item.fezMal;
    campoId.value = item.id;
    campoData.value = item.data;
    //Mapeia o nome dos sentimentos para a posição dele no radio
    //ATENÇÃO: Se mudar a ordem dos botões na tela, alterar a ordem abaixo
    sentimentos = ["laughing","smile","heart-eyes","neutral","frown","angry"]
    sentimento = sentimentos.findIndex(sentimento => sentimento == item.sentimento);
    var radiosSentimento = document.getElementsByName("btnradio");
    radiosSentimento[sentimento].checked = true;
  }

  dataFiltro.onchange = function() {
    dados= readEntradas();
    registros= dados.filter(item => item.data == dataFiltro.value.split('/').reverse().join('-'))
    exibeEntradas(registros)
  }

  // Confirma a criação da tarefa
  btnSalvar.onclick = function () {
    let sentimento;
    var radiosSentimento = document.getElementsByName("btnradio");
    for (var i = 0, length = radiosSentimento.length; i < length; i++) {
      if (radiosSentimento[i].checked) {
          sentimento = radiosSentimento[i].value
          break;
      }
    }

    //Data do dia do Input. Atualiza campos do diário
    data = new Date();
    let diario = {
      id: campoId.value,
      sentimento: sentimento,
      data: campoId.value != '' ? campoData.value : data.toISOString().split('T')[0],
      fezBem: CampoBem.value,
      fezMal: CampoMal.value,
    };
    //Define se atualiza ou insere o novo registro
    if(campoId.value == '')
      registraEntrada(diario);
    else
      updateEntrada(diario);
    //atualiza na tela a lista de entradas
    exibeEntradas(null);
    //Remove o Id anterior (serve para saber se vai adicionar ou altrrar um registro)
    campoId.value = '';
  };

//
function exibeEntradas(entradas) {
  let conteudo = "";
  let meses = ["","Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
  if(entradas == null)
    dados= readEntradas()
  else
    dados = entradas
  console.log(dados)
  dados.forEach((item) => {
    [ano, mes, dia] = item.data.split("-");
    conteudo += `
    <div class="row row-striped">
      <div class="col-2 text-right">
          <h7 class="display-4"><span class="badge badge-secondary text-dark">${dia}</span></h7>
          <h8>${meses[parseInt(mes)]}</h8>
      </div>
      <div class="col-1 d-flex flex-grow-1 align-items-center"><i class="bi bi-emoji-${item.sentimento}"></i></div>
      <div class="col-8">

          <p><span class= "text-secondary"> O que te fez bem? </span> <br> <span class="fst-italic">${item.fezBem}</span></p>
          <p><span class= "text-secondary"> O que te fez mal? </span> <br> <span class="fst-italic">${item.fezMal}</span></p>
      </div>
      <div class="col-1">
          <button class='btn btn' type='button' onclick='editaEntrada(${item.id})'>
          <i class="bi bi-pencil-square"></i></button>
          <button class='btn btn' type='button' onclick='deleteEntrada(${item.id})'>
          <i class="bi bi-trash3"></i></button>
      </div>
      
  </div> 
        `;
  });
  historicoEntradas.innerHTML = conteudo;
}

btnFechar.onclick= function() {
  window.location= "/home/index-home.html"
}

exibeEntradas(null)

