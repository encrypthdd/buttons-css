document.getElementById('downloadBtn').addEventListener('click', function() {
    const btn = this;
    const statusMessage = document.querySelector('.status-message');
    
    // Deshabilitar el botón durante la descarga
    btn.disabled = true;
    btn.classList.add('downloading');
    
    // Mostrar mensaje de estado
    statusMessage.textContent = "Preparando archivo para descarga...";
    statusMessage.classList.add('show');
    
    // Simular progreso de descarga
    const progressSteps = [
        {progress: 25, message: "Conectando con el servidor..."},
        {progress: 50, message: "Descargando datos..."},
        {progress: 75, message: "Procesando archivo..."},
        {progress: 100, message: "¡Descarga completada!"}
    ];
    
    let currentStep = 0;
    const progressInterval = setInterval(() => {
        if (currentStep < progressSteps.length) {
            const step = progressSteps[currentStep];
            statusMessage.textContent = step.message;
            
            // Actualizar barra de progreso
            document.querySelector('.progress-bar').style.width = `${step.progress}%`;
            
            currentStep++;
        } else {
            clearInterval(progressInterval);
            
            // Efecto de finalización
            btn.classList.remove('downloading');
            createConfetti();
            
            // Habilitar el botón después de 3 segundos
            setTimeout(() => {
                btn.disabled = false;
                document.querySelector('.progress-bar').style.width = '0';
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    statusMessage.classList.remove('show');
                }, 5000);
            }, 3000);
        }
    }, 1000);
});

// Función para crear efecto de confeti
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Posición aleatoria
        const posX = Math.random() * 200 - 100;
        
        // Color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Tamaño aleatorio
        const size = Math.random() * 8 + 4;
        
        // Estilos del confeti
        confetti.style.left = `calc(50% + ${posX}px)`;
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = color;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        // Duración aleatoria de la animación
        const duration = Math.random() * 2 + 2;
        confetti.style.animationDuration = `${duration}s`;
        
        // Añadir al DOM
        container.appendChild(confetti);
        
        // Eliminar después de la animación
        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}