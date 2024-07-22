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
    const [guerreroToDelete, setGuerreroToDelete] = useState<string| null>(null);

    useEffect(() => {
        obtenerGuerreros().then((guerreros) => {
            console.log(guerreros);
            setGuerreros(guerreros);
        }).catch((e) => {
            alert("No se logra cargar los datos");
            console.log(e);
        });
    }, []);

    const handleShowModal = (key: string) => {
        setGuerreroToDelete(key);
        setShowModal(true);
    };

    const handleDelete = async () => {
        if (guerreroToDelete) {
            try {
                await eliminarGuerrero(guerreroToDelete);
                setGuerreros(guerreros.filter(g => g.key !== guerreroToDelete));
                alert("Guerrero eliminado con exito");
            } catch (e) {
                console.log(e);
                alert("Hubo un problema al eliminar el guerrero");
            } finally {
                setShowModal(false);
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
                        {/* <th>Opening</th>
                        <th>Raza</th> */}
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
                            {/* <td>{g.opening}</td>
                            <td>{g.raza}</td> */}
                            <td>{g.saga}</td>
                            <td>
                                <Link href={{ pathname: "Modificar", query: { key: g.key } }}>
                                    <Button variant="warning"><GrEdit /></Button>
                                </Link>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleShowModal(g.key)}
                                >
                                    <AiOutlineUserDelete />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal de Confirmación */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar a este guerrero?
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
