import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import {
  getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';// servicion de inicio  de sesion con google
import config from './config.js'; // config es la llave de firebase

// Creando una constante para cada servicio
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const singUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
const loginOut = signOut(auth);
const provider = new GoogleAuthProvider();
const singUserGoogle = () => signInWithPopup(auth, provider);//////***no testear
// Detectando el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Usuario Conectado');
  } else {
    console.log('No se encuentra el usuario');
  }
});

export {
  initializeApp, createUserWithEmailAndPassword, auth, createUser, singUser, singUserGoogle, signInWithPopup, GoogleAuthProvider, loginOut
};