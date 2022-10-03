import { welcome } from "./components/login.js";
import { login } from "./components/login.js";
import { register } from "./components/register.js";
import { wall } from "./components/wall.js";

const routes = {
  "/": welcome, // clave y valor
  "/login": login,
  "/register": register,
  "/wall": wall,
};

// función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname) => {
  const root = document.getElementById("root");
  window.history.pushState(
    {}, // estado vacio
    pathname, // title
    window.location.origin + pathname // URL + (Ruta)
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

// onpopstate, se dispara realizando una acción en el navegador como volver
window.onpopstate = () => {
  const root = document.getElementById("root");
  const component = routes[window.location.pathname];
  root.removeChild(root.firstChild); // borrando el primer nodo
  root.append(component()); // insertando el nuevo nodo
};

window.addEventListener("load", () => {
  // Renderiza sólo ésta parte de la ruta
  const component = routes[window.location.pathname];
  const root = document.getElementById("root");
  root.appendChild(component());
});
