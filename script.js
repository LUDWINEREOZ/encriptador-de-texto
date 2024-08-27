document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector('.text-area');
    const mensaje = document.querySelector('.mensaje');
    const btnEncriptar = document.querySelector('.btn-encriptar');
    const btnDesencriptar = document.querySelector('.btn-desencriptar');
    const btnCopiar = document.querySelector('.copiar');
    const sectionRight = document.querySelector('.section-left');
    
    const mensajeVacio = "Ningún mensaje fue encontrado.\nIngresa el texto que desees encriptar o desencriptar.";

    // Función para inicializar la página con el mensaje por defecto
    const mostrarMensajeInicial = () => {
        mensaje.value = mensajeVacio;
        sectionRight.style.backgroundColor = "transparent";  // Fondo transparente al inicio
    };

    const encriptarTexto = (texto) => {
        if (!texto) return mensajeVacio;
        return texto.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
    };

    const desencriptarTexto = (texto) => {
        if (!texto) return mensajeVacio;
        return texto.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
    };

    btnEncriptar.addEventListener('click', () => {
        const texto = textArea.value.trim();
        const textoEncriptado = encriptarTexto(texto);
        mensaje.value = textoEncriptado;
        sectionRight.style.backgroundColor = "white";  // Cambiar el fondo a blanco
        textArea.value = '';  // Limpiar el área de texto original
    });

    btnDesencriptar.addEventListener('click', () => {
        const texto = textArea.value.trim();
        const textoDesencriptado = desencriptarTexto(texto);
        mensaje.value = textoDesencriptado;
        sectionRight.style.backgroundColor = "white";  // Cambiar el fondo a blanco
        textArea.value = '';  // Limpiar el área de texto original
    });

    btnCopiar.addEventListener('click', () => {
        if (mensaje.value !== mensajeVacio) {
            mensaje.select();
            document.execCommand('copy');
            alert('Texto ecnriptado copiado al portapapeles');
        }
    });

    // Inicializar con el mensaje por defecto
    mostrarMensajeInicial();
});


