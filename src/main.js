import { welcome } from './components/Welcome.js';
import { login } from './components/Login.js';
import { register } from './components/Register.js';
import { wall } from './components/Wall.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,//clave y valor
  '/login': login,
  '/register': register,
  '/wall': wall,
};

//función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},//estado vacio
    pathname,//title
    window.location.origin + pathname,// URL + (Ruta)
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
// Renderiza sólo ésta parte de la ruta
const component = routes[window.location.pathname];

//onpopstate, se dispara realizando una acción en el navegador como volver
window.onpopstate = () => {
  root.removeChild(root.firstChild);//borrando el primer nodo
  root.append(component());//insertando el nuevo nodo
};

root.appendChild(component());
