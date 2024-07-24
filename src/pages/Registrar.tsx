import React, { useState } from "react"
import Button  from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { initialstateGuerrero } from "@/EstadosIniciales/Guerrero";
import { Guerrero } from "@/Interfaces/Interfaces";
import { registrarGuerrero } from "@/Firebase/Promesas";

export const Registrar = () =>{
    const [guerrero, setGuerrero] = useState<Guerrero>(initialstateGuerrero)
    //aqui maneja los cambios en los campos del form
    const handleGuerrero = (name:string, value:string) =>{
        setGuerrero({...guerrero,[name]:value})
    }

    //aqui registra
    const handleRegistrar = () => {
        registrarGuerrero(guerrero).then(()=>{
            alert("Se ha registrado con exito")
        }).catch((e) => {
            alert("Hubo un problema")
            console.log(e)
        })
    }

    //aqui los campos q pedira el form para registrar al guerrero
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control type = "text" placeholder="Ingrese su nombre"
                        name="nombre"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Edad: </Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su edad"
                        name="edad"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                        <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo"
                        name="email"
                        onChange={(e) => (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                        <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rut: </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su RUT"
                        name="rut"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Personaje: </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su personaje favorito"
                        name="personaje"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Habilidad: </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su habilidad favorita"
                        name="habilidad"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>

                
                {/* CHECKBOX
                <Form.Group>
                    <Form.Label>Opening: </Form.Label>
                    <Form.Control type="check" placeholder="Ingrese su opening favorito"
                        name="opening"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>
                */}

                 {/* RADIO BUTTON
                <Form.Group>
                    <Form.Label>Raza: </Form.Label>
                    <Form.Control type="check" placeholder="Ingrese su raza favorita"
                        name="raza"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>
                */}

                <Form.Group>
                    <Form.Label>Saga: </Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su saga favorita"
                        name="saga"
                        onChange={(e)=> (handleGuerrero(e.currentTarget.name, e.currentTarget.value))}/>
                    <Form.Text></Form.Text>
                </Form.Group>
                <Button type="button" variant="primary" onClick={handleRegistrar}>Registrar Z</Button>
            </Form>
        </>
    )
}

export default Registrar