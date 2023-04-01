const form = document.querySelector('form');
const numbInput = document.querySelector('input[name=numb]');
const nameInput = document.querySelector('input[name=name]');
const expiryInput = document.querySelector('input[name=expiry]');
const cvcInput = document.querySelector('input[name=cvc]');
const cardDetails = document.querySelector('.card-details');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // previne o envio do formulário

    // Adicionando os valores de entrada
    const numbValue = numbInput.value;
    const nameValue = nameInput.value;
    const expiryValue = expiryInput.value;
    const cvcValue = cvcInput.value;

    // Formata a data de validade
    const expiryFormatted = expiryValue.toLocaleString('pt-BR', {month: '2-digit', year: '4-digit'}).replace('/', '/');

    // Formata o número do cartão
    const numbFormatted = numbValue.replace(/\D/g, '').match(/.{1,4}/g).join(' ');

    // Insere os valores na div .card-details
    cardDetails.innerHTML = `
        <p>Número do Cartão: ${numbFormatted}</p>
        <p>Nome: ${nameValue}</p>
        <p>Validade: ${expiryFormatted.substr(0, 2)}/${expiryValue.substr(2)}</p>
        <p>CVC: ${cvcValue}</p>
    `;
});
