import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyktuJ5c9tozIxHh7pdhYlfTMS1CCfKH0",
  authDomain: "dhakatopi-93761.firebaseapp.com",
  projectId: "dhakatopi-93761",
  storageBucket: "dhakatopi-93761.appspot.com",
  messagingSenderId: "311921414803",
  appId: "1:311921414803:web:0d34692dca849614243366",
  measurementId: "G-18491SHLJ3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error));




/*
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyktuJ5c9tozIxHh7pdhYlfTMS1CCfKH0",
    authDomain: "dhakatopi-93761.firebaseapp.com",    
    projectId: "dhakatopi-93761",
    storageBucket: "dhakatopi-93761.appspot.com",
    messagingSenderId: "311921414803",
    appId: "1:311921414803:web:0d34692dca849614243366",
    measurementId: "G-18491SHLJ3"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

*/


