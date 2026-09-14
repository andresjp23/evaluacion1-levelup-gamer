import { datosTienda } from "./data.js";

const emailInput = document.getElementById('input-email');
const passwordInput = document.getElementById('input-password');
const loginButton = document.getElementById('btn-login');
const emailAlert = document.getElementById('alert-email');
const passwordAlert = document.getElementById('alert-password');

loginButton.addEventListener('click', function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let formularioCorrecto = true;

    // 1. Validar dominios de correo permitidos
    if (email.endsWith('@duoc.cl') || email.endsWith('@duocuc.cl') || email.endsWith('@profesor.duoc.cl') || email.endsWith('@gmail.com')) {
        emailAlert.classList.add('d-none');
    } else {
        emailAlert.textContent = "Error: Use un correo válido (@duoc.cl, @profesor.duoc.cl, @gmail.com)";
        emailAlert.classList.remove('d-none');
        formularioCorrecto = false;
    }

    // 2. Validar longitud de contraseña (4 a 10 caracteres)
    if (password.length >= 4 && password.length <= 10) {
        passwordAlert.classList.add('d-none');
    } else {
        passwordAlert.textContent = "Error: Contraseña debe tener entre 4 y 10 caracteres.";
        passwordAlert.classList.remove('d-none');
        formularioCorrecto = false;
    }

    if (formularioCorrecto) {
        // 3. Buscar si el correo existe en la base de datos simulada
        const usuarioEncontrado = datosTienda.usuarios.find(u => u.correo === email);

        if (usuarioEncontrado) {
            // Guardar la sesión para que admin.js la detecte
            localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));

            loginButton.textContent = "Iniciando sesión...";
            loginButton.disabled = true;

            // 4. Redirigir dependiendo del rol del usuario
            setTimeout(function() {
                if (usuarioEncontrado.rol === 'Administrador' || usuarioEncontrado.rol === 'Vendedor') {
                    window.location.href = '/pages/admin/admin.html';
                } else {
                    window.location.href = '/index.html'; 
                }
            }, 2000);
        } else {
            // Rechazar si el correo tiene buen formato pero no está registrado
            emailAlert.textContent = "Error: Usuario no registrado en el sistema.";
            emailAlert.classList.remove('d-none');
        }
    }
});