function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

document.querySelector('.menu-button').addEventListener('click', function() {
    openNav();
});

document.querySelector('.closebtn').addEventListener('click', function() {
    closeNav();
});
