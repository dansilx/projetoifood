function showOptions(optionId) {
    let submenuToShow = document.getElementById(optionId);
    submenuToShow.style.display = 'block';

    let option = document.getElementById(optionId).parentElement;
    let optionRect = option.getBoundingClientRect();

    submenuToShow.style.display = 'block';
    submenuToShow.style.top = optionRect.bottom + 'px';
    submenuToShow.style.left = optionRect.left + 'px';
}

function hideOptions(optionId) {
    let submenuToHide = document.getElementById(optionId);
    submenuToHide.style.display = 'none';
}

document.getElementById('hamburguer').addEventListener('click', function() {
    let menuLista = document.querySelector('.menu-lista');
    menuLista.classList.toggle('menu-visivel');

    let cabecalho = document.querySelector('.menu-header');
    cabecalho.classList.toggle('expandido');

    let hamb = document.querySelector('#hamburguer');
    hamb.classList.toggle('clicado')

    let bott = document.querySelector('.bot');
    bott.classList.toggle('botao')
});