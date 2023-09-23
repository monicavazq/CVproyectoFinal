
const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir_menu');
const cerrar = document.querySelector('#cerrar_menu');
const menu_link = document.querySelectorAll('.menu_link');
const seccion = document.querySelectorAll('.section');

abrir.addEventListener('click', () => {
    nav.classList.add('nav-visible');
});

cerrar.addEventListener('click', () => {
    nav.classList.remove('nav-visible');
});

for (i = 0; i < menu_link.length; i++) {

    menu_link[i].addEventListener('click', () => {
        nav.classList.remove('nav-visible');
    });
}



let seccionActual = 'inicio';

window.addEventListener('scroll', () => {
    seccion.forEach(seccionElem => {
        if (window.scrollY >= (seccionElem.offsetTop - 200)) {
            seccionActual = seccionElem.id;
        }
    });

    menu_link.forEach(link => {
        if (link.href.includes(seccionActual)) {
            document.querySelector('.active').classList.remove('active');
            link.classList.add('active');
        }
    })

});



const verTexto = document.getElementsByClassName('verTexto');
const btn_verTexto = document.getElementsByClassName('btn-verTexto');

for (let j = 0; j < btn_verTexto.length; j++) {

    btn_verTexto[j].addEventListener('click', () => {

        for (let i = 0; i < verTexto.length; i++) {

            if (i == j) {

                verTexto[i].classList.toggle('mostrarTexto');

                if (verTexto[i].classList.contains('mostrarTexto')) {
                    btn_verTexto[i].innerHTML = 'Ver menos';
                }
                else {
                    btn_verTexto[i].innerHTML = 'Ver más';
                }
            }
        }
    });
}



const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const formulario = document.getElementById('form');
const textArea = document.getElementById('textarea');
const mensajeAlerta = document.getElementById('mensajeAlerta');

formulario.addEventListener('submit', validar);

function validar(event) {

    event.preventDefault();

    let expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let mensaje = '';
    let enviar = false;

    if (nombre.value.length < 6) {
        mensaje += `El nombre debe contener mas de 6 caracteres. <br>`;
        enviar = true;
    }
    if (nombre.value.length > 30) {
        mensaje += `El nombre no debe contener mas de 30 caracteres. <br>`;
        enviar = true;
    }
    if (!expresion.test(email.value)) {
        mensaje += `Ingrese un correo válido. <br>`;
        enviar = true;
    }
    if (enviar == true) {
        mensajeAlerta.innerHTML = mensaje;
    }
    else {
        mensajeAlerta.innerHTML = 'Su mensaje fue enviado.'
        nombre.value = '';
        email.value = '';
        textArea.value = '';
    }
}





