import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');//input de mail
  const inputPass = document.createElement('input');//input de password

  button.textContent = 'entrar';
  buttonBack.textContent = 'Regresa';
  title.textContent = 'Inicia Sesion';

  button.addEventListener('click', () => {
    console.log(inputEmail.value);
    onNavigate('/wall');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, button, buttonBack);

  return div;
};