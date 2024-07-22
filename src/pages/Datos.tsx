import { obtenerGuerreros } from "@/Firebase/Promesas"
import { Guerrero } from "@/Interfaces/Interfaces"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Table, Button } from "react-bootstrap"
import { GrEdit } from "react-icons/gr";
import { AiOutlineUserDelete } from "react-icons/ai";


export const Datos = () => {
    const [guerreros, setGuerreros] = useState<Guerrero[]>([])
    useEffect(()=>{
        obtenerGuerreros().then((guerreros)=>{
            console.log(guerreros)
            setGuerreros(guerreros)
        }).catch((e)=>{
            alert("No se logro cargar los datos")
            console.log(e)
        })
    },[])
    return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                    <th>Rut</th>
                    <th>Personaje</th>
                    <th>Habilidad</th>
                    {/* <th>Opening</th>
                    <th>Raza</th> */}   
                    <th>Saga</th>
                </tr>
            </thead>
            <tbody>
                {
                    guerreros.map((g)=>{
                        return(
                            <tr>
                                <td>{g.nombre}</td>
                                <td>{g.edad}</td>
                                <td>{g.email}</td>
                                <td>{g.rut}</td>
                                <td>{g.personaje}</td>
                                <td>{g.habilidad}</td>
                                {/* <td>{g.opening}</td>
                                <td>{g.raza}</td> */}
                                <td>{g.saga}</td>
                                <Link href={{pathname:"Modificar",query:{key:g.key}}}>
                                    <Button variant="warning"><GrEdit /></Button>
                                    <Button variant="danger"><AiOutlineUserDelete /></Button>
                                </Link>

                            </tr>
                        )

                    })
                }

            </tbody>
        </Table>
    </>
  )
}
export default Datos