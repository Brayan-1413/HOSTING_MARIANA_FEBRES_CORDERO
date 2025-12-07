let indice = 0;
const imagenes = document.querySelectorAll('#carrusel img');  
    
function cambiarImagen(direccion) {

    imagenes[indice].style.display = 'none';
    indice = (indice + direccion + imagenes.length) % imagenes.length;
        
    imagenes[indice].style.display = 'block';
}
    
setInterval(() => cambiarImagen(1), 5000);