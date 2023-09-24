/* Funcion para Editar perfil de usuarios */

function Editar_Perfil_User() {
    document.getElementById('Button-Administrar').style.display = 'none';
    document.getElementById('Button-listo').style.display = 'inline';

    document.getElementsByClassName('icon-MO').style.display = 'block';
    document.getElementsByClassName('img-profile').style.opacity = '0.5';
}

function Editar_Perfil_User_Listo() {
    document.getElementById('Button-Administrar').style.display = 'inline';
    document.getElementById('Button-listo').style.display = 'none';

    document.getElementsByClassName('icon-MO').style.display = 'none';
    document.getElementsByClassName('img-profile').style.opacity = '1';
}