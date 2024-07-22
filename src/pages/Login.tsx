// pages/login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
    const [usuario, setUsuario] = useState<string>("");
    const [contrasena, setContrasena] = useState<string>("");
    const router = useRouter();

    const handleLogin = () => {
        if (usuario === "admin" && contrasena === "admin") {
            localStorage.setItem("isAuthenticated", "true");
            router.push("/");
        } else if (usuario === "" && contrasena === "") {
            router.push("/invitado");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

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