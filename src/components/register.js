import { onNavigate } from "../main.js";
export const register = () => {
    const containRegis = document.createElement('section');
    containRegis.classList.add("viewRegister");
  
    const imgLogo = document.createElement('img');
    imgLogo.setAttribute("srcset", `./image/ladyCodeLogo.jpg`);
    imgLogo.classList.add("imgLogo");

    const button = document.createElement('button');
    button.setAttribute("class", "btn registration");
    const buttonBack = document.createElement('button');
    buttonBack.classList.add("btn");

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute("placeholder", "Introducir correo");
    inputEmail.classList.add("input");

    const inputPass = document.createElement('input');
    inputPass.setAttribute("placeholder", "Introducir contraseña");
    inputPass.setAttribute("type", "password");
    inputPass.classList.add("input");

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

