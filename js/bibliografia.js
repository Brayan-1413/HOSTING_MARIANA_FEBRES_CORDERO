function mostrarContenido(tipo) {
        const contenidos = document.querySelectorAll('#contenido-nosotros > div');
        contenidos.forEach(div => div.style.display = 'none');
        
        document.getElementById(tipo).style.display = 'block';
    }