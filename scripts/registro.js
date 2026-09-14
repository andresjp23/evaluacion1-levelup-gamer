// Captura de elementos del DOM
const formRegistro = document.getElementById('form-registro');
const inputFecha = document.getElementById('reg-fecha');
const inputEmail = document.getElementById('reg-email');

// 1. Función matemática para calcular la edad exacta
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    // Restar 1 año si el mes actual es anterior al mes de nacimiento, 
    // o si es el mismo mes pero el día actual es anterior
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

// 2. Interceptar y validar el formulario al hacer submit
formRegistro.addEventListener('submit', (e) => {
    e.preventDefault(); // Detiene la recarga automática de la página

    let esValido = true;

    // Validación estricta: Edad mayor de 18 años
    if (inputFecha.value) {
        const edad = calcularEdad(inputFecha.value);
        if (edad < 18) {
            esValido = false;
            inputFecha.setCustomValidity("Debes ser mayor de 18 años."); // Activa el error nativo
        } else {
            inputFecha.setCustomValidity(""); // Limpia el error
        }
    } else {
        esValido = false;
        inputFecha.setCustomValidity("La fecha es obligatoria.");
    }

    // Validación estricta: Dominios de correo permitidos
    const email = inputEmail.value.trim();
    if (!email.endsWith('@duoc.cl') && !email.endsWith('@profesor.duoc.cl') && !email.endsWith('@gmail.com')) {
        esValido = false;
        inputEmail.setCustomValidity("Dominio no permitido.");
    } else {
        inputEmail.setCustomValidity("");
    }

    // Ejecutar validaciones nativas de HTML5 (Bootstrap was-validated)
    if (!formRegistro.checkValidity() || !esValido) {
        e.stopPropagation();
        formRegistro.classList.add('was-validated');
        return; // Frena la ejecución si hay fallos
    }

    // 3. Simulación de guardado exitoso
    formRegistro.classList.remove('was-validated');
    
    alert("✅ Registro exitoso. ¡Bienvenido a Level-Up!");
    formRegistro.reset();
    
    // Redirigir al inicio de sesión
    window.location.href = '/pages/login.html';
});