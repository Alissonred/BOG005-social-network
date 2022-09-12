import { onNavigate } from '../main.js';

export const Register = () => {
  const containRegis = document.createElement('section');
  containRegis.classList.add("viewRegister");

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute("srcset", `./image/ladyCodeLogo.jpg`);
  imgLogo.classList.add("imgLogo")

  //Inputs de texto propiedades y el class
  const inputEmail = document.createElement('input');
  inputEmail.classList.add("input");
  inputEmail.setAttribute("placeholder", "Introducir Correo");
  const inputPass = document.createElement('input');
  inputPass.setAttribute("placeholder", "Introducir Contraseña");
  inputPass.setAttribute("type", "password");
  inputPass.classList.add("input");
  
  //Botones con su clase 
  const button = document.createElement('button');
  button.setAttribute("class", "btn registration");
  const buttonBack = document.createElement('button');
  buttonBack.classList.add("btn");
  button.textContent = 'Registrarse';
  buttonBack.textContent = 'Regresar';

  button.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  containRegis.append(imgLogo, inputEmail, inputPass, button, buttonBack);

  return containRegis;
};



