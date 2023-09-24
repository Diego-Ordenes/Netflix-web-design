// Funcion para mover el carrusel de series - peliculas parte 1 //

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 6);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});














// Funcion para mover el carrusel de series - peliculas parte 1 //

const fila_p2 = document.querySelector('.contenedor-carousel_p2');
const peliculas_p2 = document.querySelectorAll('.pelicula_p2');

const flechaIzquierda_p2 = document.getElementById('flecha-izquierda_p2');
const flechaDerecha_p2 = document.getElementById('flecha-derecha_p2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha_p2.addEventListener('click', () => {
    fila_p2.scrollLeft += fila_p2.offsetWidth;

    const indicadorActivo_p2 = document.querySelector('.indicadores_p2 .activo_p2');
    if (indicadorActivo_p2.nextSibling) {
        indicadorActivo_p2.nextSibling.classList.add('activo_p2');
        indicadorActivo_p2.classList.remove('activo_p2');
    }
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda_p2.addEventListener('click', () => {
    fila_p2.scrollLeft -= fila_p2.offsetWidth;

    const indicadorActivo_p2 = document.querySelector('.indicadores_p2 .activo_p2');
    if (indicadorActivo_p2.previousSibling) {
        indicadorActivo_p2.previousSibling.classList.add('activo_p2');
        indicadorActivo_p2.classList.remove('activo_p2');
    }
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas_p2 = Math.ceil(peliculas_p2.length / 6);
for (let i = 0; i < numeroPaginas_p2; i++) {
    const indicador_p2 = document.createElement('button');

    if (i === 0) {
        indicador_p2.classList.add('activo_p2');
    }

    document.querySelector('.indicadores_p2').appendChild(indicador_p2);
    indicador_p2.addEventListener('click', (e_p2) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores_p2 .activo_p2').classList.remove('activo_p2');
        e_p2.target.classList.add('activo_p2');
    });
}

// ? ----- ----- Hover ----- -----
peliculas_p2.forEach((pelicula__) => {
    pelicula__.addEventListener('mouseenter', (e) => {
        const elemento_p2 = e.currentTarget;
        setTimeout(() => {
            peliculas_p2.forEach(pelicula__ => pelicula__.classList.remove('hover'));
            elemento_p2.classList.add('hover');
        }, 300);
    });
});

fila_p2.addEventListener('mouseleave', () => {
    peliculas_p2.forEach(pelicula__ => pelicula__.classList.remove('hover'));
});


// ----------------- Mostrar pelicula - serie ------------------------//
function Mostrar_pelicula_serie() {
    document.getElementById('contenedor-peliculas-click-fondo').style.display = 'block';
}

function quitar_pelicula_serie() {
    document.getElementById('contenedor-peliculas-click-fondo').style.display = 'none';
}