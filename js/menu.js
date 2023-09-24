var toggle = false;

function MostrarRecomendaciones() {
    if (toggle) {
        document.getElementById('recomendation').style.display = 'none';
        toggle = false;

    } else {
        document.getElementById('recomendation').style.display = 'block';
        toggle = true;

    }
}
var perfil__user = false;

function MostrarPerfilUser() {
    if (perfil__user) {
        document.getElementById('perfil-user').style.display = 'none';
        document.getElementById('icon-perfil-user').style.transform = 'rotate(0deg)';
        perfil__user = false;

    } else {
        document.getElementById('perfil-user').style.display = 'block';
        document.getElementById('icon-perfil-user').style.transform = 'rotate(180deg)';
        document.getElementById('icon-perfil-user').style.marginleft = '10px';
        perfil__user = true;

    }
}

var menu_responsive = false;

function MostrarMenuResponsivo() {
    if (menu_responsive) {
        document.getElementById('menu-responsive-all').style.display = 'none';
        menu_responsive = false;

    } else {
        document.getElementById('menu-responsive-all').style.display = 'block';
        menu_responsive = true;
    }
}

// Scroll Widows //

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var recomendation = this.document.querySelector("#recomendation");
    recomendation.classList.toggle("abajo", window.scrollY) > 0;
    header.classList.toggle("abajo", window.scrollY) > 0;
})