import { initialstateGuerrero } from "@/EstadosIniciales/Guerrero";
import { modificarGuerrero, obtenerGuerrero } from "@/Firebase/Promesas";
import { Guerrero } from "@/Interfaces/Interfaces";
import { useRouter } from "next/router";
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Modificar = () => {
    const [guerrero, setGuerrero] = useState<Guerrero>(initialstateGuerrero);
    const handleGuerrero = (name: string, value: string) => {
        setGuerrero({ ...guerrero, [name]: value });
    };
    const router = useRouter();

    useEffect(() => {
        const key = router.query.key;
        if (typeof key == "string") {
            obtenerGuerrero(key).then((g) => {
                if (g != undefined) {
                    setGuerrero(g);
                } else {
                    // Deberías manejar el caso donde no se encuentra el guerrero
                    console.log("Guerrero no encontrado");
                }
            }).catch((e) => {
                console.log(e);
                alert("Hubo un problema al obtener el guerrero");
            });
        }
    }, [router.query.key]); // Asegúrate de pasar las dependencias correctas al useEffect

    const handleModificar = () => {
        modificarGuerrero(guerrero).then(() => {
            alert("Se ha modificado con éxito");
        }).catch((e) => {
            console.log(e);
            alert("Hubo un problema");
        });
    };

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
