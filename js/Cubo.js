function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

function rotarCubo(evento) {
    const cubo = document.getElementById('cubo');
    const rectCubo = cubo.getBoundingClientRect();
    const centroX = rectCubo.left + rectCubo.width / 2;
    const centroY = rectCubo.top + rectCubo.height / 2;
    const deltaX = evento.clientX - centroX;
    const deltaY = evento.clientY - centroY;
    const rotacionX = deltaY / 20; 
    const rotacionY = deltaX / 20; 
  
    cubo.style.transform = `rotateX(${-40 + rotacionX}deg) rotateY(${rotacionY}deg)`; 
}
  
function alternarHora() {
    const elementoHoras = document.getElementById('horas');
    elementoHoras.classList.toggle('activo');
}
  
function alternarMinuto() {
    const elementoMinutos = document.getElementById('minutos');
    elementoMinutos.classList.toggle('activo');
}
  
function alternarSegundo() {
    const elementoSegundos = document.getElementById('segundos');
    elementoSegundos.classList.toggle('activo');
}
  
actualizarReloj();
setInterval(actualizarReloj, 1000);
