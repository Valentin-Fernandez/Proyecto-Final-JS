/* ARRAY */

productos = [
    {
        id: 1,
        titulo: 'Yezzy',
        imagen:'img/Yezzy1.webp',
        precio: 250
    },
    {
        id: 2,
        titulo: 'Yezzy',
        imagen:'img/Yezzy2.webp',
        precio: 250
    },
    {
        id: 3,
        titulo: 'Jordan',
        imagen:'img/Jordan1.webp',
        precio: 300
    },
    {
        id: 4,
        titulo: 'Jordan',
        imagen:'img/Jordan2.webp',
        precio: 300
    },
    {
        id: 5,
        titulo: 'Yezzy',
        imagen:'img/Yezzy3.webp',
        precio: 250
    },
    {
        id: 6,
        titulo: 'Yezzy',
        imagen:'img/Yezzy4.webp',
        precio: 250
    },
    {
        id: 7,
        titulo: 'Jordan',
        imagen:'img/Jordan3.webp',
        precio: 300
    },
    {
        id: 8,
        titulo: 'Jordan',
        imagen:'img/Jordan4.webp',
        precio: 300
    },
]

/* CARGA DE PRODUCTOS AL HTML */

const contenedorproductos = document.querySelector('.contenedor-producto')

function cargar_productos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto-detalle')
        div.innerHTML = `
            <img src="${producto.imagen}" alt="" class="producto-img">
            <h2>${producto.titulo}</h2>
            <p>$${producto.precio}</p>
            <button id="${producto.id}" class="boton-agregar">Agregar</button>
        `
        contenedorproductos.append(div)

    })
}

cargar_productos()

// -------------------------------------------------------------------
// Carrito
let articulosCarrito = []
let contenedor = document.querySelector('.contenedor-producto')
let contenedorCarrito = document.querySelector('.compras')
let vaciarCarrito = document.querySelector('.vaciar-carrito')


function agregarProducto(evento) {
    evento.preventDefault();
    // Identifico el button AGREGAR
    if (evento.target.classList.contains('boton-agregar')) {
        // Obtengo la informacion de que boton estoy apretando
        const producto = evento.target.parentElement
        leerProducto(producto)
    }
}

function leerProducto(item){
    carrito = {
        img: item.querySelector('img').src,
        titulo: item.querySelector('h2').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').getAttribute('id'),
        cantidad: 1
    }

    // CANTIDAD
    if(articulosCarrito.some((prod) => prod.id === carrito.id)) {
        const productos = articulosCarrito.map((producto) => {
            if(producto.id === carrito.id){
                let cantidad = parseInt(producto.cantidad)
                cantidad += 1
                producto.cantidad = cantidad
                return producto
            } else {
                return producto
            }
        })
        articulosCarrito = [...productos]
    }else {
        articulosCarrito = [...articulosCarrito, carrito]
    }
    console.log(articulosCarrito)
    carritoHTML()
}


// Esta funcion agrega al carrito los items a comprar por el usuario
function carritoHTML() {
    limpiarCarrito()
    articulosCarrito.forEach((producto) => {
        const divCarrito = document.createElement('div');
        divCarrito.classList.add('menu-compra-div');
        divCarrito.innerHTML = `
            <img class="img-carrito" src="${producto.img}">
            <h3 class="titulo-carrito">${producto.titulo}</h3>
            <p class="precio-carrito">${producto.precio}</p>
            <p class="cantidad-carrito">${producto.cantidad}</p>
        `
        contenedorCarrito.appendChild(divCarrito);
    });
    guardarStorage()
}

// Limpiar el carrito
function limpiarCarrito() {
    while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Guardar en LocalStorage

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(articulosCarrito))
}

// Hacer click al agregar producto
contenedor.addEventListener('click', (evento) => {
    agregarProducto(evento)
    // Libreria
    Toastify({
        text: "Articulo agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #E0B36E, #DBC551)",
        },
        onClick: function(){}
      }).showToast();
})

// Hacer click al vaciar el carrito
vaciarCarrito.addEventListener('click', () => {
    // Vaciar el array
    articulosCarrito = []
    guardarStorage()
    limpiarCarrito()
    // Libreria
    Toastify({
        text: "Productos eliminado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #E0B36E, #DBC551)",
        },
        onClick: function(){}
      }).showToast();
})

// Cuando recargo la pagina que el carrito no este vacio en funcion del LocalStorage
window.addEventListener("DOMContentLoaded", () => {
    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoHTML();
});