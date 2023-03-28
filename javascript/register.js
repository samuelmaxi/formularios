const form = document.querySelector('.forms-main');
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#lastname');
const masculine = document.querySelector('#M');
const female = document.querySelector('#F');
const others = document.querySelector('#O');
const email = document.querySelector('#email');
const road = document.querySelector('#road');
const number = document.querySelector('#number');
const neighborhood = document.querySelector('#neighborhood');
const zip = document.querySelector('#zip');
const termsOfUse = document.querySelector('#checkbox');
const btnSubmit = document.querySelector('.btn-submit');

function validateEmail(email){
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (nameInput.value.trim() === '') {
        window.alert('Preencha o espaço de "Nome"')
    }

    if (lastNameInput.value.trim() === '') {
        window.alert('Preencha o espaço de "Sobrenome"')
    }

    // verificação dos campos de "Sexo"
    if (masculine.checked){
        console.log('É masculino');
    } else if (female.checked){
        console.log('É feminino');      
    } else if(others.checked){
        console.log('É outros');
    } else{
        window.alert('Marque um dos campos de "Sexo"')
    }

    if(email.value.trim() === ''){
        window.alert('Preencha o campo "Email"');
    }
    if(validateEmail(email.value)){
        console.log('Esse email é valido');
        
    } else{
        window.alert('Por favor insira um email valido (Exemplo: exemplo@dominio.com)');
    }

    if(road.value.trim() === ''){
        window.alert('Preencha o espaço de "Rua"');
    }

    if(number.value.trim() === ''){
        window.alert('Preencha o espaço de "Número"');
    }

    if(neighborhood.value.trim() === ''){
        window.alert('Preencha o espaço de "Bairro"');
    }

    if(zip.value.trim() === ''){
        window.alert('Preencha o espaço de "CEP"')
    }

    if(!termsOfUse.checked){
        window.alert('Por favor leia os termos e clique na caixinha para aceita-los');
    }
    // form.submit();
});

btnSubmit.addEventListener('click', function(){
    window.alert('Você fez o cadastro com sucesso!!'+ innetHtml)
})