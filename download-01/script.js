// script.js
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const btn = this;
    const message = document.getElementById('downloadMessage');
    
    // Simular descarga
    btn.classList.add('downloading');
    message.textContent = "Preparando descarga...";
    message.classList.add('show');
    
    // Simular progreso de descarga
    setTimeout(() => {
        message.textContent = "Descargando... 25% completado";
    }, 1000);
    
    setTimeout(() => {
        message.textContent = "Descargando... 50% completado";
    }, 2000);
    
    setTimeout(() => {
        message.textContent = "Descargando... 75% completado";
    }, 3000);
    
    setTimeout(() => {
        btn.classList.remove('downloading');
        message.textContent = "¡Descarga completada!";
        
        // Aquí puedes agregar la lógica real de descarga
        // window.location.href = 'ruta/al/archivo.ext';
        
        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            message.classList.remove('show');
        }, 3000);
    }, 4000);
});