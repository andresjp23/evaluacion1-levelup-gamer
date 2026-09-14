import { datosTienda } from "./data.js";

// 1. Obtener los contenedores del HTML
const areaContenido = document.getElementById('admin-content-area');


// 2. Calcular las métricas usando la propiedad .length
const totalProductos = datosTienda.productos.length;
const totalUsuarios = datosTienda.usuarios.length;
const totalCategorias = datosTienda.categorias.length;

// Calcular cuántos productos están actualmente en stock crítico
const productosCriticos = datosTienda.productos.filter(p => p.stock <= p.stockCritico).length;

// 3. Crear el diseño en HTML 
const htmlCardsMetricas = `
    <div class="row g-4 mb-4">
        <!-- Tarjeta: Total Productos -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card bg-dark text-white border-secondary border-opacity-25 h-100 shadow-sm">
                <div class="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                        <h6 class="text-muted text-uppercase fw-bold font-orbitron mb-2" style="font-size: 0.8rem; letter-spacing: 1px;">Productos</h6>
                        <h2 class="display-5 fw-bold m-0">${totalProductos}</h2>
                    </div>
                    <div class="text-primary mt-3 small">Unidades en catálogo</div>
                </div>
            </div>
        </div>

        <!-- Tarjeta: Total Usuarios -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card bg-dark text-white border-secondary border-opacity-25 h-100 shadow-sm">
                <div class="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                        <h6 class="text-muted text-uppercase fw-bold font-orbitron mb-2" style="font-size: 0.8rem; letter-spacing: 1px;">Usuarios</h6>
                        <h2 class="display-5 fw-bold m-0">${totalUsuarios}</h2>
                    </div>
                    <div class="text-success mt-3 small">Cuentas registradas</div>
                </div>
            </div>
        </div>

        <!-- Tarjeta: Total Categorías -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card bg-dark text-white border-secondary border-opacity-25 h-100 shadow-sm">
                <div class="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                        <h6 class="text-muted text-uppercase fw-bold font-orbitron mb-2" style="font-size: 0.8rem; letter-spacing: 1px;">Categorías</h6>
                        <h2 class="display-5 fw-bold m-0">${totalCategorias}</h2>
                    </div>
                    <div class="text-info mt-3 small">Secciones activas</div>
                </div>
            </div>
        </div>

        <!-- Tarjeta: Productos en Stock Crítico -->
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card bg-dark text-white border-secondary border-opacity-25 h-100 shadow-sm">
                <div class="card-body d-flex flex-column justify-content-between p-4">
                    <div>
                        <h6 class="text-muted text-uppercase fw-bold font-orbitron mb-2" style="font-size: 0.8rem; letter-spacing: 1px;">Stock Crítico</h6>
                        <h2 class="display-5 fw-bold ${productosCriticos > 0 ? 'text-danger' : 'text-white'} m-0">${productosCriticos}</h2>
                    </div>
                    <div class="${productosCriticos > 0 ? 'text-danger' : 'text-muted'} mt-3 small fw-medium">
                        ${productosCriticos > 0 ? 'Requiere reabastecimiento' : 'Inventario estable'}
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// 4. Inyectar el bloque de tarjetas en el contenedor central
if (areaContenido) {
    areaContenido.innerHTML = htmlCardsMetricas;
}


// === CERRAR SESIÓN ===
const botonLogout = document.getElementById('btn-logout');

// Verificamos que el botón exista en la página antes de asignarle el evento
if (botonLogout) {
    botonLogout.addEventListener('click', () => {
        // 1. Vaciar el usuario activo del localStorage
        localStorage.removeItem('usuarioActivo');
        

        // 2. Redirigir al archivo de login 
        window.location.href = '/pages/login.html'; 
    });
}
