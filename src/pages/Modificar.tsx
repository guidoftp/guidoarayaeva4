import { initialstateGuerrero } from "@/EstadosIniciales/Guerrero";
import { modificarGuerrero, obtenerGuerrero } from "@/Firebase/Promesas";
import { Guerrero } from "@/Interfaces/Interfaces";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Modificar = () => {
    const [guerrero, setGuerrero] = useState<Guerrero>(initialstateGuerrero); //estado inicial de la colecion guerrero
    //funcion para cambiar los datos del formulario
    const handleGuerrero = (name: string, value: string) => {
        setGuerrero({ ...guerrero, [name]: value }); //actualozara el estado del guerero
    };
    const router = useRouter(); //hook para la navegacion

    //el useeffect obtendra los datos del guerrero cuando se carge 
    useEffect(() => {
        const key = router.query.key; //obtendra la clave del guerrero desde la URL
        if (typeof key == "string") {
            obtenerGuerrero(key).then((g) => {
                if (g != undefined) {
                    setGuerrero(g); //si se encuentra, actualiza el estado
                } else {
                    console.log("Guerrero no encontrado");
                }
            }).catch((e) => {
                console.log(e);
                alert("Hubo un problema");
            });
        }
    }, [router.query.key]); 

    //funcion para modificar al guerrero
    const handleModificar = () => {
        modificarGuerrero(guerrero).then(() => {
            alert("Se ha modificado con exito");
        }).catch((e) => {
            console.log(e);
            alert("Hubo un problema");
        });
    };

    //tabla q vera el usuario, y dependiendo de lo q qiera modificar salgra la respuesta q estaba obteniedno
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        value={guerrero.nombre}
                        name='nombre'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Edad: </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Edad"
                        value={guerrero.edad}
                        name='edad'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        value={guerrero.email}
                        name='email'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Rut: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Rut"
                        value={guerrero.rut}
                        name='rut'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Personaje: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Personaje"
                        value={guerrero.personaje}
                        name='personaje'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Habilidad: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Habilidad"
                        value={guerrero.habilidad}
                        name='habilidad'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                {/* 
                Eliminar los comentarios si no son necesarios 
                <Form.Group>
                    <Form.Label>Opening: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Opening"
                        value={guerrero.opening}
                        name='opening'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Raza: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Raza"
                        value={guerrero.raza}
                        name='raza'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>
                */}

                <Form.Group>
                    <Form.Label>Saga: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Saga"
                        value={guerrero.saga}
                        name='saga'
                        onChange={(e) => handleGuerrero(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Text></Form.Text>
                </Form.Group>

                <Button type="button" variant="danger" onClick={handleModificar}>Modificar Guerrero Z</Button>
            </Form>
        </>
    );
};

export default Modificar;
