import { arrayProductos } from "./productos.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedorProductos =document.getElementById("contenedor-productos");
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    arrayProductos.forEach((producto) => {
        let tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("producto");

        let imagenProducto = document.createElement("img");
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.titulo;

        let tituloProducto = document.createElement("h2");
        tituloProducto.textContent = producto.titulo;

        let precioProducto= document.createElement("p");
        precioProducto.textContent = `Precio: $${producto.precio}`;

        let boton = document.createElement("button");
        boton.classList.add("boton-agregar");
        boton.textContent = "Agregar al carrito";
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });
        tarjetaProducto.appendChild(imagenProducto);
        tarjetaProducto.appendChild(tituloProducto);
        tarjetaProducto.appendChild(precioProducto);
        tarjetaProducto.appendChild(boton);
        contenedorProductos.appendChild(tarjetaProducto);
    });
});