import { Guerrero } from "@/Interfaces/Interfaces";
import { addDoc, collection } from "firebase/firestore"
import { db } from "./Firebase"


export const registrarGuerrero = async (guerrero:Guerrero) => { 
    const docRef = await addDoc (collection(db, 'guerrero'), guerrero);
}