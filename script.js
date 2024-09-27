//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

// Función genérica para redireccionar a una URL
function navegarA(url) {
    window.location.href = url; // Mejor usar 'window.location.href' en lugar de 'location'
}

// Funciones para ver demos y repositorios, usando la función genérica
function verDemoEncriptador() {
    navegarA('https://texto-encriptado-1-0.vercel.app/');
}

function verRepoEncriptador() {
    navegarA('https://github.com/Jfonseca122/Texto-Encriptado-1.0');
}

function verDemoAdivinaSecreto() {
    navegarA('https://adivina-secreto.vercel.app/');
}

function verRepoAdivinaSecreto() {
    navegarA('https://github.com/Jfonseca122/AdivinaSecreto');
}

function verDemoMiBlog() {
    navegarA('https://mi-blog-sigma.vercel.app/');
}

function verRepoMiBlog() {
    navegarA('https://github.com/Jfonseca122/MiBlog');
}

// Función para limpiar el formulario
function limpiar() {
    document.querySelector('.contacto__formulario').reset(); // Reiniciar el formulario
}
