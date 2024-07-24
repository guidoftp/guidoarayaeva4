// pages/login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
    //Estados para resguardar al usuario y contrasenia ADMIN
    const [usuario, setUsuario] = useState<string>("");
    const [contrasena, setContrasena] = useState<string>("");
    //hook para la navegacion
    const router = useRouter();

    //funcion q manejara el inicio sesion del usuario
    const handleLogin = () => {
        //verefica si el ususario y contrasenia son correctos
        if (usuario === "admin" && contrasena === "admin") {
            //si son correctos, guarda la autenticacion y envia al usuario a la pagina principal
            localStorage.setItem("isAuthenticated", "true");
            router.push("/");
        } else if (usuario === "" && contrasena === "") {
            //si el usuario y contrasenia estan vacios, da error
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    //lo q vera el usuario sera un usuario y contrasenia a ingresar
    return (
        <Form>
            <Form.Group>
                <Form.Label>Usuario: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.currentTarget.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña: </Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.currentTarget.value)}
                />
            </Form.Group>

            <Button type="button" variant="primary" onClick={handleLogin}>
                Iniciar sesion
            </Button>
        </Form>
    );
};

export default Login;