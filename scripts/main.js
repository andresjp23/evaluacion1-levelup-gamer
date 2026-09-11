// Importar los datos de data.js
import { datosTienda } from "./data.js";


// ================== CATEGORIAS ======================
// Recuperar el elemento donde van a ir las cards de categorias destacadas
const featuredCategories = document.getElementById('featured-categories');

// Acumulador del html generado
let acumuladorCategorias = '';

// Filtrar las categorias que son destacadas y recorrerlas
// 1. Accedemos a las categorias de datosTienda
const categorias = datosTienda.categorias;
// 2. Filtro
const categoriasFiltradas = categorias.filter(c => c.isFeatured === true);
// 3. Recorrer
categoriasFiltradas.forEach(categoria => {
    acumuladorCategorias += `
        <a href="" class="col-6 col-md-4 col-lg card-categoria d-flex flex-column  border rounded p-2 text-decoration-none text-light align-items-center gap-2">
            <img src="${categoria.imgUrl}" alt="categorias-${categoria.nombre}" style="width: 72px;">
            <small>${categoria.nombre}</small>
        </a>
    `;
});

// 4. Agregar al html 
featuredCategories.innerHTML = acumuladorCategorias;

// ==================== PRODUCTOS ===========================
// Recuperar el contenedor de las cards
const featuredProducts = document.getElementById('featured-products');
let acumuladorProductos = '';

const productos = datosTienda.productos;
const productosFiltrados = productos.filter(p => p.isFeatured === true);
productosFiltrados.forEach(producto => {
    acumuladorProductos += `
        <div class="card-producto border border-muted border-opacity-25 rounded-4 p-3 position-relative text-white d-flex flex-column" style="width: 250px;">
            <!-- Botón de Favorito (Corazón) -->
            <button class="btn btn-sm position-absolute top-0 end-0 m-3 text-white border-0 bg-transparent p-0 shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
            </button>

            <!-- Imagen del Producto -->
            <div class="text-center my-3">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" style="height: 160px; object-fit: contain;">
            </div>

        <!-- Cuerpo de la Tarjeta -->
        <div class="card-body p-0 d-flex flex-column flex-grow-1">
            <!-- Nombre del Producto -->
            <h5 class="card-title fw-bold font-orbitron mb-2 fs-5">${producto.nombre}</h5>
            
            <!-- Precio -->
            <div class="fs-4 fw-bold mb-2 text-white">$${producto.precio}</div>
            
            <!-- Descuento Institucional -->
            <div class="d-flex align-items-center gap-2 mb-3 text-secondary small fw-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                </svg>
                <span>20% dcto. Duoc UC</span>
            </div>

            <!-- Botón Agregar al Carrito -->
            <button class="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <span>Agregar al Carrito</span>
            </button>
        </div>
    </div>
    `;
});

featuredProducts.innerHTML = acumuladorProductos;

