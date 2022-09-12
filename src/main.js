import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,//clave y valor
  '/login': Login,
  '/register': Register,
  '/wall': Wall,
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