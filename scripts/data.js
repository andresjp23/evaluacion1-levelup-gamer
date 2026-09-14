// Datos de categorias y de productos

export const datosTienda = {
  categorias: [
    { id: 1, nombre: "Juegos de Mesa", isFeatured: true, imgUrl: "assets/categories/dados.png" },
    { id: 2, nombre: "Accesorios", isFeatured: true, imgUrl: "assets/categories/audifonos.png" },
    { id: 3, nombre: "Consolas", isFeatured: true, imgUrl: "assets/categories/control.png" },
    { id: 4, nombre: "Computadores Gamers", isFeatured: true, imgUrl: "assets/categories/pc-gamer.png" },
    { id: 5, nombre: "Sillas Gamers", isFeatured: true, imgUrl: "assets/categories/silla-gamer.png" },
    { id: 6, nombre: "Mouse", isFeatured: false, imgUrl: "assets/categories/mouse.png"},
    { id: 7, nombre: "Mousepad", isFeatured: false, imgUrl: "assets/categories/mouse-pad.png" },
    { id: 8, nombre: "Poleras Personalizadas", isFeatured: false, imgUrl: "assets/categories/polera.png" }
  ],
  productos: [
  {
    sku: "JM001",
    categoria: 1,
    nombre: "Catan",
    precio: 29990,
    descripcion: "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    isFeatured: false,
    stock: 9,
    stockCritico: 10,
    imagen: "/assets/categories/dados.png"
  },
  {
    sku: "JM002",
    categoria: 1,
    nombre: "Carcassonne",
    precio: 24990,
    descripcion: "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.",
    isFeatured: false,
    stock: 89,
    stockCritico: 8,
    imagen: "/assets/categories/dados.png"
  },
  {
    sku: "AC001",
    categoria: 2,
    nombre: "Control Xbox Series X",
    precio: 59990,
    descripcion: "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.",
    isFeatured: true,
    stock: 50,
    stockCritico: 5,
    imagen: "/assets/products/mando-xbox.png"
  },
  {
    sku: "AC002",
    categoria: 2,
    nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 79990,
    descripcion: "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.",
    isFeatured: true,
    stock: 77,
    stockCritico: 8,
    imagen: "/assets/products/audifonos-gamer.png"
  },
  {
    sku: "CO001",
    categoria: 3,
    nombre: "PlayStation 5",
    precio: 549990,
    descripcion: "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.",
    isFeatured: true,
    stock: 10,
    stockCritico: 2,
    imagen: "/assets/products/ps5.png"
  },
  {
    sku: "CG001",
    categoria: 4,
    nombre: "PC Gamer ASUS ROG Strix",
    precio: 1299990,
    descripcion: "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.",
    isFeatured: false,
    stock: 8,
    stockCritico: 2,
    imagen: "/assets/categories/pc-gamer.png"
  },
  {
    sku: "SG001",
    categoria: 5,
    nombre: "Silla Gamer Secretlab Titan",
    precio: 349990,
    descripcion: "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalizable ajustable para sesiones de juego prolongadas.",
    isFeatured: true,
    stock: 24,
    stockCritico: 3,
    imagen: "/assets/products/silla-gamer.png"
  },
  {
    sku: "MS001",
    categoria: 6,
    nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 49990,
    descripcion: "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.",
    isFeatured: true,
    stock: 60,
    stockCritico: 5,
    imagen: "/assets/products/mouse-gamer.png"
  },
  {
    sku: "MP001",
    categoria: 7,
    nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 29990,
    descripcion: "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
    isFeatured: false,
    stock: 150,
    stockCritico: 15,
    imagen: "/assets/categories/mouse-pad.png"
  },
  {
    sku: "PP001",
    categoria: 8,
    nombre: "Polera Gamer Personalizada 'Level-Up'",
    precio: 14990,
    descripcion: "Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.",
    isFeatured: false,
    stock: 250,
    stockCritico: 20,
    imagen: "/assets/categories/polera.png"
  }
  ],
  usuarios: [
  {
    run: "19011022K",
    nombre: "Juan",
    apellidos: "Pérez",
    correo: "juan.perez@profesor.duoc.cl",
    fechaNacimiento: "1985-05-15",
    rol: "Administrador",
    ubicacion: {
      region: "Región Metropolitana",
      comuna: "Santiago",
      direccion: "Av. Siempre Viva 123"
    }
  },
  {
    run: "201234568",
    nombre: "María",
    apellidos: "Gómez",
    correo: "maria.gomez@gmail.com",
    fechaNacimiento: "1998-10-20",
    rol: "Cliente",
    ubicacion: {
      region: "Valparaíso",
      comuna: "Viña del Mar",
      direccion: "Av. Libertad 456, Depto 21"
    }
  },
  {
    run: "159876543",
    nombre: "Carlos",
    apellidos: "López",
    correo: "carlos.lopez@duocuc.cl",
    fechaNacimiento: "1992-02-10",
    rol: "Vendedor",
    ubicacion: {
      region: "Región Metropolitana",
      comuna: "Providencia",
      direccion: "Av. Los Leones 789"
    }
  },
  {
    run: "214567891",
    nombre: "Ana",
    apellidos: "Silva",
    correo: "ana.silva@gmail.com",
    fechaNacimiento: "2001-08-30",
    rol: "Cliente",
    ubicacion: {
      region: "Biobío",
      comuna: "Concepción",
      direccion: "Calle O'Higgins 1010"
    }
  }
  ]
};