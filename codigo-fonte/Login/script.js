if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "http://127.0.0.1:5502/login.html";
  }
  
  let userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  let logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
  
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })
  function entrar(){
    let usuario = document.querySelector('#usuario')
    let userSpan = document.querySelector('#userSpan')
  
    let senha = document.querySelector('#senha')
    let senhaSpan = document.querySelector('#senhaSpan')
  }
    let msgError = document.querySelector('#msgError')
    let listaUser = []
  
    let userValid = {
      nome: 'null',
      user: 'null',
      senha: 'null'
    }
  
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
    listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senha){
  
        userValid = {
           nome: item.nome,
           user: item.user,
           senha: item.senha
         }
  
      }
    })
  
    if(usuario.value == userValid.user && senha.value == userValid.senha){
      window.location.href = 'http://127.0.0.1:5502/login.html'
  
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom
  
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
      userLabel.setAttribute('style', 'color: red')
      usuario.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuário ou senha incorretos'
      usuario.focus()
    }
    