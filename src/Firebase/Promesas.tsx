import { Guerrero } from "@/Interfaces/Interfaces";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "./Firebase"

//Funcion para registrar un gerrero con la coleccion "gerrero"
export const registrarGuerrero = async (guerrero:Guerrero) => { 
    const docRef = await addDoc (collection(db, 'guerrero'), guerrero);
}

//Funcion para obtener todos los guerreros de la coleccion
export const obtenerGuerreros = async() => {
    const querySnapshot = await getDocs(collection(db, "guerrero")); //obtenemos todos los doc de la coleccion
    let guerreros:Guerrero[] = []
    querySnapshot.forEach((doc)=>{

    let guerrero:Guerrero = {
        nombre: doc.data().nombre,
        edad: doc.data().edad,
        email: doc.data().email,
        rut: doc.data().rut,
        personaje: doc.data().personaje,
        habilidad: doc.data().habilidad,
        //opening
        //raza
        saga: doc.data().saga,
        key: doc.id,
    }
    guerreros.push(guerrero)
});
return guerreros //retornara la lista completa de los registrados
}

//Funcion para obtener un guerrero en especifico por su ID (KEY)
export const obtenerGuerrero = async (key:string) => {
    const docRef = doc (db, "guerrero", key); //KEY especifica
    const docSnap = await getDoc (docRef); //se obtiene al doc
    if (docSnap.exists()){
        let guerrero:Guerrero = {
            nombre: docSnap.data().nombre,
            edad: docSnap.data().edad,
            email: docSnap.data().email,
            rut: docSnap.data().rut,
            personaje: docSnap.data().personaje,
            habilidad: docSnap.data().habilidad,
            //opening:
            //raza:
            saga: docSnap.data().saga,
            key:docSnap.id
        }
        return guerrero //retornara el guerrero con su key
    }
    else {
        return undefined // retornara indefinido si el doc no existe
    }
}

//Funcion para modoficar un guerrero
export const modificarGuerrero = async(guerrero:Guerrero)=>{
    const ref = doc(collection(db,"guerrero"),guerrero.key) // encontrar al doc en especifico
    await updateDoc(ref,{
        nombre:guerrero.nombre,
        edad: guerrero.edad,
        email: guerrero.email,
        rut: guerrero.rut,
        personaje: guerrero.personaje,
        habilidad: guerrero.habilidad,
        //opening: guerrero.opening,
        //raza: guerrero.raza,
        saga:guerrero.saga,
    })
}

//Funcion para eliminar un guerrero por su key
export const eliminarGuerrero = async(key:string) => {
    await deleteDoc(doc(db, "persona", key)); //deberia eliminar el doc con su key
}