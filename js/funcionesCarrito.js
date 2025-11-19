
import { guardarCarrito, obtenerCarrito, vaciarCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    const carrito =obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito");
}

export const eliminarProductoDelCarrito = (indice) => {
    const confirmar = confirm("¿Estás seguro de que deseas eliminar este producto del carrito?");
    if(confirmar) {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado del carrito");
    }
}

export const vaciarElCarrito = () => {
    const confirmar = confirm("¿Estás seguro de que deseas vaciar el carrito?");
    if(confirmar) {
    vaciarCarrito();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado");
    }
}