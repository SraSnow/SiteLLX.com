// Função para abrir o menu lateral
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

// Função para fechar o menu lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Adicionando evento de clique ao botão do menu
document.querySelector('.menu-button').addEventListener('click', function() {
    openNav();
});

// Adicionando evento de clique ao botão para fechar o menu lateral
document.querySelector('.closebtn').addEventListener('click', function() {
    closeNav();
});
