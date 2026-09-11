// Capturar los elementos input-email, input-password, btn-login y los alerts
const emailInput = document.getElementById('input-email');
const passwordInput = document.getElementById('input-password');
const loginButton = document.getElementById('btn-login');
const emailAlert = document.getElementById('alert-email');
const passwordAlert = document.getElementById('alert-password');

// Event listener (para saber cuando se hace click en el boton de incio de sesion)
loginButton.addEventListener('click', function() {
    // Valores de los inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    // Formulario correcto
    let formularioCorrecto = true;

    // Validaciones del correo (@duocuc.cl, @profesor.duoc.cl, @gmail.com)
    if (email.endsWith('@duocuc.cl') || email.endsWith('@profesor.duoc.cl') || email.endsWith('@gmail.com')){
        emailAlert.classList.add('d-none')
    }else{
        emailAlert.classList.remove('d-none');
        formularioCorrecto = false;
    }
    // Validaciones constraseña (entre 4 y 10 caracteres)
    if (password.length >= 4 && password.length <= 10){
        passwordAlert.classList.add('d-none')
    }else{
        passwordAlert.classList.remove('d-none');
        formularioCorrecto = false;
    }
    if (formularioCorrecto){
    // 1. Cambia el texto del boton y lo deshabilita
    loginButton.textContent = "Iniciando sesión...";
    loginButton.disabled = true;
    // 2. Esperas 2 segundos (2000 ms) antes de ejecutar la redirección
    setTimeout(function() {
        // CORREGIDO: Sintaxis correcta para redirigir en JavaScript
        window.location.href = '../index.html'; 
    }, 2000);
    }
})

