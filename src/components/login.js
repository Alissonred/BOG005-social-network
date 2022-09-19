import { onNavigate } from '../main.js';
import { singUser } from '../lib/index.js';

export const login = () => {
  const containLogin = document.createElement('section');
  containLogin.classList.add('viewLogin'); // Preguntar?

  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('srcset', './image/ladyCodeLogo.jpg');
  imgLogo.classList.add('imgLogo');

  const formLogin = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input');
  inputEmail.setAttribute('type', 'email'); // para validar que sea un mail
  inputEmail.setAttribute('id', 'emailLogin');
  inputEmail.setAttribute('placeholder', 'Introduce tu correo');
  inputEmail.setAttribute('required', ''); // se obliga como requerimiento

  const inputPass = document.createElement('input');
  inputPass.classList.add('input');
  inputPass.setAttribute('id', 'passLogin');
  inputPass.setAttribute('placeholder', 'Introduce tu contraseña');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('required', ''); // se obliga como requerimiento
  // botones de registro y regresar
  const button = document.createElement('button');
  button.setAttribute('class', 'btn registration');
  button.textContent = 'Ingresar';

  const errorText = document.createElement('p'); // imprimir errores en pantalla
  errorText.setAttribute('id', 'errorText');

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value; // Guardamos los valores de mail y password de los inputs
    const password = inputPass.value;
    singUser(email, password)
      .then((userCredential) => { // Si el usuario se acredita, será dirigido al muro
        onNavigate('/wall');
      })
      .catch((error) => { // si hubo un error en el registro, retorna según el caso
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          errorText.textContent = '*El correo o la clave son incorrectas';
        } else if (errorCode === 'auth/weak-password') {
          errorText.textContent = '*El correo o la clave son incorrectas';
        } else if (errorCode === 'auth/invalid-email') {
          errorText.textContent = '*El usuario no se encuentra Registrado';
        }
      });
  });

  containLogin.append(imgLogo, formLogin);
  formLogin.append(inputEmail, inputPass, button, errorText);

  return containLogin;
};
