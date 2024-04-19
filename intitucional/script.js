function showOptions(optionId) {
    var submenuToShow = document.getElementById(optionId);
    submenuToShow.style.display = 'block';

    var option = document.getElementById(optionId).parentElement;
    var optionRect = option.getBoundingClientRect();

    submenuToShow.style.display = 'block';
    submenuToShow.style.top = optionRect.bottom + 'px';
    submenuToShow.style.left = optionRect.left + 'px';
}

function hideOptions(optionId) {
    var submenuToHide = document.getElementById(optionId);
    submenuToHide.style.display = 'none';
}

document.getElementById('hamburguer').addEventListener('click', function() {
    var menuLista = document.querySelector('.menu-lista');
    menuLista.classList.toggle('menu-visivel');

    var cabecalho = document.querySelector('.menu-header');
    cabecalho.classList.toggle('expandido');

    var hamb = document.querySelector('#hamburguer');
    hamb.classList.toggle('clicado')

    var bott = document.querySelector('.bot');
    bott.classList.toggle('botao')
});