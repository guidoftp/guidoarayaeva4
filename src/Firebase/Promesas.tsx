import { Guerrero } from "@/Interfaces/Interfaces";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "./Firebase"


export const registrarGuerrero = async (guerrero:Guerrero) => { 
    const docRef = await addDoc (collection(db, 'guerrero'), guerrero);
}

export const obtenerGuerreros = async() => {
    const querySnapshot = await getDocs(collection(db, "guerrero"));
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
return guerreros
}

export const obtenerGuerrero = async (key:string) => {
    const docRef = doc (db, "guerrero", key);
    const docSnap = await getDoc (docRef);
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
        return guerrero
    }
    else {
        return undefined
    }
}

export const modificarGuerrero = async(guerrero:Guerrero)=>{
    const ref = doc(collection(db,"guerrero"),guerrero.key)
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
