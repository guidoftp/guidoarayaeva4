// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // importacion para iniciar la app
import { firebaseConfig } from "./Credenciales" // configuracion y credenciales de la bd
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);