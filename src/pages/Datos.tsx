import { obtenerGuerreros, eliminarGuerrero } from "@/Firebase/Promesas";
import { Guerrero } from "@/Interfaces/Interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { AiOutlineUserDelete } from "react-icons/ai";

export const Datos = () => {
    //Estado para almacenar la lista de gurerros
    const [guerreros, setGuerreros] = useState<Guerrero[]>([]);
    //estado para poder visualizar el modal de confirmacion en pantalla
    const [showModal, setShowModal] = useState<boolean>(false);
    //y estado para eliminar al guerrero
    const [guerreroAEliminar, setGuerreroAEliminar] = useState<Guerrero | undefined>(undefined);

    //useeffect cargara los datos de cada guerrero
    useEffect(() => {
        obtenerGuerreros().then((guerreros) => {
            console.log(guerreros);//imprime a los gerreros
            setGuerreros(guerreros); //actualizara los datos
        }).catch((e) => {
            alert("No se logro cargar los datos"); //se mostrara un mensaje de alerta en caso de algun probmena
            console.log(e);//imprime el error
        });
    }, []);

    //Funcion para mostrar el modal de eliminar
    const handleShowModal = (guerrero: Guerrero) => {
        setGuerreroAEliminar(guerrero); //se estable el guerrero que desea eliminar
        setShowModal(true); //se aprecia el modal
    };

    //Funcion para eliminar guerrero
    const handleDelete = async () => {
        if (guerreroAEliminar) {
            try {
                await eliminarGuerrero(g.key); //no m elimina el guerrero
                setGuerreros(guerreros.filter(g => g.key !== guerreroAEliminar.key)); //se deberia actualizar la lista de guerrero
                alert("Se ha elimnado el Guerrero "); //imprime un mensaje exitoso
            } catch (e) {
                console.log(e); //imprime un error en la pagina
                alert("Hubo un problema al eliminar el guerrero"); //se muestra un mensaje en pnatalla
            } finally {
                setShowModal(false); //aqui se cierra el modal
                setGuerreroAEliminar(undefined); //y se elimina el guerreo
            }
        }
    };

    //Funcion para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false); //cierra el modal
        setGuerreroAEliminar(undefined); 
    };

    //TABLA 
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
                        <th>Saga</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {guerreros.map((g) => (
                        <tr key={g.key}>
                            <td>{g.nombre}</td>
                            <td>{g.edad}</td>
                            <td>{g.email}</td>
                            <td>{g.rut}</td>
                            <td>{g.personaje}</td>
                            <td>{g.habilidad}</td>
                            <td>{g.saga}</td>
                            <td>
                                <Link href={{ pathname: "Modificar", query: { key: g.key } }}>
                                    <Button variant="warning"><GrEdit /></Button>
                                </Link>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleShowModal(g)}
                                >
                                    <AiOutlineUserDelete />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Eliminacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿seguro de que deseas eliminar a este guerrero?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Datos;
