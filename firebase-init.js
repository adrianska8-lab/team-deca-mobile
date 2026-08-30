// Firebase (Auth + Firestore) — inicialização isolada em módulo ES para não
// interferir no restante do app (app.js continua um script clássico, com
// todas as funções em window para os onclick="" do HTML).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, setDoc, onSnapshot, enableIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaOJwhSQ1iLJ_QE9HDzkOKHa3HXYoXmMw",
  authDomain: "consultorias-1c02e.firebaseapp.com",
  projectId: "consultorias-1c02e",
  storageBucket: "consultorias-1c02e.firebasestorage.app",
  messagingSenderId: "1015205681978",
  appId: "1:1015205681978:web:b0b65bce8063e00bcace03",
  measurementId: "G-WJ89DWDWWT"
};

const fbApp = initializeApp(firebaseConfig);
const auth  = getAuth(fbApp);
const db    = getFirestore(fbApp);

enableIndexedDbPersistence(db).catch(()=>{ /* múltiplas abas abertas ou navegador sem suporte — segue só online */ });

let currentUser = null;
const activeListeners = {}; // path -> unsubscribe

function docRefFor(path){
  return doc(db, 'users', currentUser.uid, ...path.split('/'));
}

window.fbSignIn = function(){
  return signInWithPopup(auth, new GoogleAuthProvider()).catch(err=>{
    console.error('Erro login Google (Firebase):', err);
    alert('Não foi possível entrar com Google: ' + (err.message || err.code || 'erro desconhecido'));
  });
};

window.fbSignOut = function(){
  Object.values(activeListeners).forEach(unsub=>unsub());
  for(const k in activeListeners) delete activeListeners[k];
  return signOut(auth);
};

window.fbSaveDoc = function(path, data){
  if(!currentUser) return Promise.resolve();
  return setDoc(docRefFor(path), data).catch(err=>{
    console.error('Erro ao salvar no Firestore ('+path+'):', err);
  });
};

window.fbWatchDoc = function(path, cb){
  if(!currentUser) return;
  if(activeListeners[path]) activeListeners[path]();
  activeListeners[path] = onSnapshot(docRefFor(path), snap=>{
    cb(snap.exists() ? snap.data() : null, snap.metadata.hasPendingWrites);
  }, err=>{
    console.error('Erro ao observar Firestore ('+path+'):', err);
  });
};

onAuthStateChanged(auth, user=>{
  currentUser = user;
  window.dispatchEvent(new CustomEvent('fbAuthChanged', {
    detail: { user: user ? { uid:user.uid, email:user.email, name:user.displayName||user.email } : null }
  }));
});
