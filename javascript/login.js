const form = document.querySelector('.form-main');
const btnLogin = document.querySelector('.btn-login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// Email cadastrado:
const registEmail = 'exemplo@dominio.com';
// senha valida:
const registPass = '12345678';

btnLogin.addEventListener('click', function(){
    event.preventDefault();
    //checagem dos dados
    var checkEmail = email.value.trim() === registEmail;
    var checkPass = password.value.trim() === registPass;

    if(checkEmail){
        console.log('Email correto');
    } else{
        console.log('Email incorreto');
    }

    if(checkPass){
        console.log('Senha correta');
    }else{
        console.log('Senha incorreta');
    }

    if (checkEmail && checkPass) {
        console.log('checkEmail:', checkEmail);
        console.log('checkPass:', checkPass);
        window.location.href = "/html/card.html";
    }else{
        window.alert('Email ou senha incorretos');
    }
})
