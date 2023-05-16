let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = '100%'
email.style.width = '100%'

// validação do nome
function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

// validação de email
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

//validando e ajustando o assunto: 
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 500) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 500 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

assunto.style.width = '100%'

//validando e ajustando o email: 
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        email.style.color = 'red'
        email.style.border = '3px solid red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        email.style.color = 'green'
        email.style.border = '3px solid green'
        emailOk = true
    }
}

email.style.width = '100%'


//enviando alert ao clicar no botão enviar
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Mensagem recebida com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar')
    }
}

