productos = [
    {
        id: 1,
        titulo: 'Heladera',
        imagen:'./img/heladera-1.jpg',
        precio: 400000
    },
    {
        id: 2,
        titulo: 'Lavarropas',
        imagen:'./img/lavarropa-1.png',
        precio: 250000
    },
    {
        id: 3,
        titulo: 'Televisor',
        imagen:'./img/televisor-1.png',
        precio: 400000
    },
    {
        id: 4,
        titulo: 'Microondas',
        imagen:'./img/microondas-1.png',
        precio: 150000
    },
    {
        id: 5,
        titulo: 'Cocina',
        imagen:'./img/cocina-1.jpg',
        precio: 300000
    },
    {
        id: 6,
        titulo: 'Batidora',
        imagen:'./img/batidora-1.png',
        precio: 230000
    },
    {
        id: 7,
        titulo: 'Sanguchera',
        imagen:'./img/sanguchera-1.jpg',
        precio: 80000
    },
    {
        id: 8,
        titulo: 'Licuadora',
        imagen:'./img/licuadora-1.jpg',
        precio: 280000
    }
]

/* CARGA DE PRODUCTOS AL HTML */

const contenedorproductos = document.querySelector('.contenedor-productos')

function cargar_productos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto-detalle')
        div.innerHTML = `
            <img src="${producto.imagen}" alt="">
            <h3>${producto.titulo}</h3>
            <p>$${producto.precio}</p>
            <button id="${producto.id}" class="boton-agregar">Agregar</button>
        `
        contenedorproductos.append(div)
    })
}

cargar_productos()

/* CARGAR LISTA EN EL CARRITO */
/* 
function actualizarboton() {
    BotonAgregar = document.querySelectorAll(".boton-agregar")
    BotonAgregar.forEach(boton => {
        boton.addEventListener('click', agregarcarrito)
        console.log('boton')
    })
}

actualizarboton()
const productocarrito = []

function agregarcarrito(e) {
    const idBoton = e.currenTarget.id
    const productoagregado = productos.find((producto => producto.id === idBoton))

    if(productoEn)
} */