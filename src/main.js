import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { register} from './components/register.js';
const root = document.getElementById('root'); // me traigo el contenedor ppal
const routes = {
  '/': welcome,
  '/login': login,
  '/register': register,
  
};

export const onNavigate = (pathname) => {
  window.history.pushState({},pathname,window.location.origin + pathname,);
  root.removeChild(root.firstChild);// elimina lo que habpia
  root.appendChild(routes[pathname]()); // inserta lo nuevo
};

const component = routes[window.location.pathname];
window.onpopstate = ()=> {
  root.removeChild(root.firstChild);// elimina lo que habpia
  root.append(component());
}
root.appendChild(component());// invoc
//root.appendChild(welcome());// escribo en contenedor ppal lo que tiene la funcion wlecome// renderiz
