import { datosTienda } from "./data.js";

// Recuperamos la tabla de products y los datos de datosTienda
const tablaProductos = document.getElementById('tabla-productos');
const productos = datosTienda.productos;
// Recuperamos las categorias para mostrar los nombres
const categorias = datosTienda.categorias;



// Inyeccion de datos dinamicos a la tabla.
let acumuladorTablaProductos = '';
productos.forEach(producto => {
    // Las recorremos para obtener los nombres
    const categoria = categorias.find(
        categoria => categoria.id === producto.categoria
    );

    // === EVALUACIÓN DE STOCK CRÍTICO AL CARGAR LA PÁGINA ===
    // Validamos que el producto tenga un stock crítico definido y que el stock actual sea igual o menor
    if (producto.stockCritico !== undefined && producto.stockCritico !== null) {
        if (producto.stock <= producto.stockCritico) {
            alert(`⚠️ ¡ATENCIÓN CRÍTICA EN INVENTARIO!\nEl producto "${producto.nombre}" (SKU: ${producto.sku}) tiene un stock actual de ${producto.stock} unidades, lo cual alcanza o es inferior a su stock crítico configurado (${producto.stockCritico} unidades).`);
        }
    }
    acumuladorTablaProductos += `
        <tr>
            <td class="ps-3 fw-bold">${producto.sku}</td>
            <td class="fw-medium">${producto.nombre}</td>
            <td>${producto.stock} </td>
            <td>$${producto.precio.toLocaleString('es-CL')}</td>
            <td><span class="badge bg-dark text-muted border border-secondary">${categoria.nombre}</span></td>
            <td class="text-end pe-3">
                <button class="btn btn-sm btn-outline-light me-1">Editar</button>
                <button class="btn btn-sm btn-outline-danger">Eliminar</button>
            </td>
        </tr>
    `;
});

tablaProductos.innerHTML = acumuladorTablaProductos;


// === VALIDACIONES ===
// === VALIDACIONES DEL FORMULARIO ===
const formulario = document.getElementById('form-nuevo-producto');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evitamos recarga de página obligatoriamente

    // 1. Validar reglas nativas con Bootstrap
    if (!formulario.checkValidity()) {
        evento.stopPropagation();
        formulario.classList.add('was-validated'); // Muestra los errores en pantalla
        return; // Frena el proceso
    }

    // Si el formulario es totalmente válido:
    formulario.classList.remove('was-validated');
    
    // Cerramos el modal de forma nativa
    bootstrap.Modal.getInstance(document.getElementById('modalNuevoProducto')).hide();
    
    // Limpiamos los campos para la próxima vez
    formulario.reset();
});


