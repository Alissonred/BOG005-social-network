import { onNavigate } from "../main.js";
export const login = () => {
    const contenedor = document.createElement('div');// creo nodos tipo div
    const title = document.createElement('h2');// creo nodo para titulo
    const inputemail = document.createElement('button');// creo nodos tipo boton
    const passw= document.createElement('input');// creo nodos tipo boton
    const buttonback = document.createElement('input');// creo nodos tipo boton
    const button= document.createElement('button');// creo nodos tipo boton
    // contenidos
    buttonback.textContent = 'regresa'; // contenido de etiqueta
    button.textContent = 'iniciar sesion texto';
    title.textContent = 'red social ';
    contenedor.append(title, inputemail, passw, buttonback, button);// anidar en contenedor los botones
    return contenedor;
};
