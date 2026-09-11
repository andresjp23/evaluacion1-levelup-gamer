
// Recuperar la informacion del carrito
let carrito = JSON.parse(localStorage.getItem('levelUpCart')) || [];

// Recuperamos el elemento contenedor de la lista de los productos
const productList = document.getElementById('product-list');



// Funcion para renderizar el carrito
function renderizarCarrito(){
    // Acumuladpr de html
    let acumuladorCarrito = ''
    // Recorre el carrito de localStorage
    carrito.forEach(product => {
        acumuladorCarrito += `
                <div class="row align-items-center border border-opacity-25 rounded p-3 mb-3 bg-dark">
                    <!-- Columna 1: Producto y Detalle -->
                    <div class="col-6 d-flex gap-3">
                        <div class="d-flex flex-column align-items-center gap-2">
                            <div class="bg-black border border-secondary border-opacity-25 rounded p-2 d-flex align-items-center justify-content-center" style="width: 72px; height: 72px;">
                                <img src="${product.imagen}" alt="product-image" class="img-fluid">
                            </div>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <div class="d-flex gap-2 align-items-center mb-1" style="font-size: 0.75rem;">
                                <span class="text-primary text-uppercase">SKU: ${product.sku}</span>
                                <span class="text-secondary fw-bold">+490 XP LevelUp</span>
                            </div>
                            <h6 class="mb-1 fw-bold text-white lh-sm">${product.nombre}</h6>
                            <small class="text-muted" style="font-size: 0.75rem; display: inline-block; max-width: 400px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${product.descripcion}
                            </small>
                        </div>
                    </div>
                    <!-- Columna 2: Selector de Cantidad -->
                    <div class="col-3 d-flex justify-content-center">
                        <div class="d-flex align-items-center border border-opacity-25 rounded bg-black px-3 py-1 gap-3">
                            <button class="btn-restar btn btn-sm text-white p-0 border-0 fw-bold" data-sku="${product.sku}">-</button>
                            <span class="text-white fw-bold">${product.cantidad}</span>
                            <button class="btn-sumar btn btn-sm text-white p-0 border-0 fw-bold" data-sku="${product.sku}">+</button>
                        </div>
                    </div>

                    <!-- Columna 3: Subtotal y Basurero -->
                    <div class="col-3 d-flex justify-content-between align-items-center ps-2">
                        <div class="d-flex flex-column text-end flex-grow-1 me-3">
                            <h5 class="mb-0 fw-bold text-white">$${(product.precio * product.cantidad).toLocaleString('es-CL')}</h5>
                            <small class="text-muted" style="font-size: 0.7rem;">$${product.precio.toLocaleString('es-CL')} CLP c/u</small>
                        </div>
                        <button class="btn-eliminar btn p-0 text-muted border-0" data-sku="${product.sku}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    productList.innerHTML = acumuladorCarrito;

// 1. Mueves las variables ADENTRO de la función
    const totalContenedor = document.getElementById('resumen-pago-detalle');
    
    // 2. El cálculo matemático se vuelve a ejecutar con las cantidades nuevas
    const totalCompra = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);

    // 3. Inyectas el HTML actualizado
    if (totalContenedor) {
        totalContenedor.innerHTML = `
            <div class="d-flex justify-content-between mb-4 fs-5 text-white">
                <span>Subtotal:</span>
                <span class="fw-bold">$${totalCompra.toLocaleString('es-CL')}</span>
            </div>
            <button class="btn btn-primary w-100 fw-bold py-2 fs-5 text-uppercase">Procesar Compra</button>
        `;
    }

}

renderizarCarrito();

productList.addEventListener('click', (e) => {
    const btnSumar = e.target.closest('.btn-sumar');
    const btnRestar = e.target.closest('.btn-restar');
    const btnEliminar = e.target.closest('.btn-eliminar');

    if (btnSumar) {
        const item = carrito.find(i => i.sku === btnSumar.dataset.sku);
        item.cantidad++;
    }
    
    if (btnRestar) {
        const item = carrito.find(i => i.sku === btnRestar.dataset.sku);
        if (item.cantidad > 1) item.cantidad--; // Impide bajar de 1 unidad
    }
    
    if (btnEliminar) {
        // Filtra dejando solo los productos que NO coinciden con el SKU eliminado
        carrito = carrito.filter(i => i.sku !== btnEliminar.dataset.sku);
    }

    // Si se interactuó con algún control, guardamos los datos y redibujamos la vista
    if (btnSumar || btnRestar || btnEliminar) {
        localStorage.setItem('levelUpCart', JSON.stringify(carrito));
        renderizarCarrito(); 
    }
});