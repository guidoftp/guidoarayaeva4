import { obtenerGuerreros, eliminarGuerrero } from "@/Firebase/Promesas";
import { Guerrero } from "@/Interfaces/Interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { AiOutlineUserDelete } from "react-icons/ai";

export const Datos = () => {
    const [guerreros, setGuerreros] = useState<Guerrero[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [guerreroAEliminar, setGuerreroAEliminar] = useState<Guerrero | undefined>(undefined);

    useEffect(() => {
        obtenerGuerreros().then((guerreros) => {
            console.log(guerreros);
            setGuerreros(guerreros);
        }).catch((e) => {
            alert("No se logro cargar los datos");
            console.log(e);
        });
    }, []);

    const handleShowModal = (guerrero: Guerrero) => {
        setGuerreroAEliminar(guerrero);
        setShowModal(true);
    };

    const handleDelete = async () => {
        if (guerreroAEliminar) {
            try {
                await eliminarGuerrero(g.key);
                setGuerreros(guerreros.filter(g => g.key !== guerreroAEliminar.key));
                alert("Se ha elimnado el Guerrero ");
            } catch (e) {
                console.log(e);
                alert("Hubo un problema al eliminar el guerrero");
            } finally {
                setShowModal(false);
                setGuerreroAEliminar(undefined);
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setGuerreroAEliminar(undefined); 
    };

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
