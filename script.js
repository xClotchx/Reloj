function updateClock() {
    const now = new Date();
    
    // Extraer horas, minutos y segundos
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formatear para que siempre tengan dos dígitos (ej: 05 en lugar de 5)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Construir el string de tiempo
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Insertar en el HTML
    document.getElementById('clock').textContent = timeString;

    // Opcional: Actualizar la fecha
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('es-ES', options);
}

// Ejecutar la función cada segundo (1000 milisegundos)
setInterval(updateClock, 1000);

// Llamar una vez al inicio para que no aparezca en 00:00:00 al cargar
updateClock();