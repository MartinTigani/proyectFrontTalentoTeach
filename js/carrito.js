import { obtenerCarrito } from "./storage.js";

import { actualizarContador } from "./ui.js"; 
import { eliminarProductoDelCarrito, vaciarElCarrito } from "./funcionesCarrito.js";

const renderizarCarrito = () => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const divAccionesCarrito = document.getElementById("acciones-carrito");
    contenedorCarrito.innerHTML = "";
    divAccionesCarrito.innerHTML = "";
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    if (carrito.length === 0) {
        let textoNoProductos = document.createElement("p");
        textoNoProductos.classList.add("texto-parpadeante");
        textoNoProductos.textContent = "No hay productos en el carrito.";
        contenedorCarrito.appendChild(textoNoProductos);
        return;
    }
    carrito.forEach((producto) => {
        const tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("producto");

        const imagenProducto = document.createElement("img");
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.titulo;

        const tituloProducto = document.createElement("h2");
        tituloProducto.textContent = producto.titulo;

        const precioProducto= document.createElement("p");
        precioProducto.textContent = `Precio: $${producto.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.textContent = "Eliminar del carrito";
        botonEliminar.addEventListener("click", () => {
            eliminarProductoDelCarrito(carrito.indexOf(producto));
            renderizarCarrito();
        });
        tarjetaProducto.appendChild(imagenProducto);
        tarjetaProducto.appendChild(tituloProducto);
        tarjetaProducto.appendChild(precioProducto);
        tarjetaProducto.appendChild(botonEliminar);
        contenedorCarrito.appendChild(tarjetaProducto);

    });
    const botonVaciarCarrito = document.createElement("button");
    botonVaciarCarrito.id = "boton-vaciar-carrito";
    botonVaciarCarrito.textContent = "Vaciar carrito";
    botonVaciarCarrito.addEventListener("click", () => {
        vaciarElCarrito();
        renderizarCarrito();
    });
    const montoTotal = document.createElement("p");
    montoTotal.classList.add("texto-parpadeante");
    montoTotal.textContent = `Monto total: $${carrito.reduce((total,producto) => total + producto.precio,0)}`;
    divAccionesCarrito.appendChild(montoTotal);
    divAccionesCarrito.appendChild(botonVaciarCarrito);
};
document.addEventListener("DOMContentLoaded", renderizarCarrito);