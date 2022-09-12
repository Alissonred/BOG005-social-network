import { onNavigate } from "../main.js";
export const welcome = () => {

  const contenedor = document.createElement('div');// creo nodos tipo div
  const title = document.createElement('h2');// creo nodo para titulo
  const buttonLogin = document.createElement('button');// creo nodos tipo boton
  const buttonReg = document.createElement('button');// creo nodos tipo boton
  // contenidos
  buttonLogin.textContent = 'iniciar sesion texto'; // contenido de etiqueta
  buttonReg.textContent = 'registrarse';
  title.textContent = 'bienvenida';
  buttonLogin.addEventListener('click',()=> onNavigate('/login'));// evento
  buttonReg.addEventListener('click',()=> onNavigate('/register'));// evento
  contenedor.append(title, buttonLogin, buttonReg);// anidar en contenedor los botones
  return contenedor;
};
