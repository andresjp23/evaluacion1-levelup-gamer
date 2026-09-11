import { datosTienda } from "./data.js";

// 1. Obtener el SKU de la URL
const parametrosURL = new URLSearchParams(window.location.search);
const idProducto = parametrosURL.get('sku');

// 2. Capturar el contenedor
const contenedorDetalle = document.getElementById('product-detail-container');

if (idProducto && contenedorDetalle) {
    // 3. Buscar el producto exacto
    const producto = datosTienda.productos.find(p => p.sku === idProducto);

    if (producto) {
        // 4. Inyectar la plantilla si el producto existe
        contenedorDetalle.innerHTML = `
            <!-- Columna Izquierda: Imagen -->
            <div class="col-12 col-md-6 text-center">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid rounded" style="max-height: 400px; object-fit: contain;">
            </div>

            <!-- Columna Derecha: Información -->
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
                <span class="text-primary text-uppercase small fw-bold mb-2">SKU: ${producto.sku}</span>
                <h1 class="font-orbitron fw-bold text-white mb-3">${producto.nombre}</h1>
                <p class="text-muted mb-4">${producto.descripcion}</p>
                <h3 class="fw-bold text-white mb-4">$${producto.precio.toLocaleString('es-CL')}</h3>
                
                <button class="btn-agregar btn btn-primary py-2 fw-semibold w-50" data-sku="${producto.sku}">
                    Agregar al Carrito
                </button>
            </div>
        `;
    } else {
        // Manejo de error si alguien escribe un SKU falso
        contenedorDetalle.innerHTML = `<h3 class="text-white text-center">Producto no encontrado.</h3>`;
    }
}