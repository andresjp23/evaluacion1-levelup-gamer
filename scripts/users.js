import { datosTienda } from "./data.js";

// Recuperamos la tabla de products y los datos de datosTienda
const tablaUsuarios = document.getElementById('tabla-usuarios');
const usuarios = datosTienda.usuarios;




// Inyeccion de datos dinamicos a la tabla.
let acumuladorTablaUsuarios = '';
usuarios.forEach(usuario => {

    acumuladorTablaUsuarios += `
        <tr>
            <td class="ps-3 fw-bold">${usuario.run}</td>
            <td class="fw-medium">${usuario.nombre}</td>
            <td>${usuario.apellidos} </td>
            <td>${usuario.correo} </td>
            <td>${usuario.fechaNacimiento} </td>
            <td>${usuario.ubicacion.comuna} </td>
            <td>${usuario.ubicacion.direccion} </td>
            <td><span class="badge bg-dark text-muted border border-secondary">${usuario.rol}</span></td>
            <td class="text-end pe-3">
                <button class="btn btn-sm btn-outline-light me-1">Editar</button>
                <button class="btn btn-sm btn-outline-danger">Eliminar</button>
            </td>
        </tr>
    `;
});

tablaUsuarios.innerHTML = acumuladorTablaUsuarios;

// === VALIDACIONES ===
// Capturar el formulario de Nuevo Usuario
const formUsuario = document.getElementById('form-nuevo-usuario');

formUsuario.addEventListener('submit', (e) => {
    e.preventDefault(); // Detiene la recarga de la página

    let esValido = true;
    const emailInput = document.getElementById('input-email');
    const email = emailInput.value.trim();

    // 1. Regla de negocio: Validar dominios de correo permitidos
    if (!email.endsWith('@duoc.cl') && !email.endsWith('@profesor.duoc.cl') && !email.endsWith('@gmail.com')) {
        esValido = false;
        emailInput.setCustomValidity("Dominio no permitido"); // Fuerza el estado inválido en Bootstrap
    } else {
        emailInput.setCustomValidity(""); // Restablece el estado
    }

    // 2. Ejecutar validaciones generales de HTML5/Bootstrap
    if (!formUsuario.checkValidity() || !esValido) {
        e.stopPropagation();
        formUsuario.classList.add('was-validated'); // Pinta los bordes y muestra los textos de error
        return; 
    }

    // 3. Simulación de guardado
    formUsuario.classList.add('was-validated');
    alert("✅ Usuario validado y guardado correctamente.");

    // Cerramos el modal de forma nativa
    bootstrap.Modal.getInstance(document.getElementById('modalNuevoUsuario')).hide();
    
    // Limpiamos los campos para la próxima vez
    formUsuario.reset();
}); 