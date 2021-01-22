import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../services/api';

import "./styles.css";

const Client = () => {

    const [usuarios, setUsuarios] = useState([""]);

    useEffect(() => {
        api.get("/listar").then(response => {
            setUsuarios(response.data);
        })
    }, [])

    return (
        <div className="clientes">
            <div className="container">
                <h3>Principais clientes da Empresa</h3>
                <div className="lista-clientes">
                    {usuarios.map(usuario => (
                        <div>
                            <h5>Nome: <span>{usuario.nome}</span></h5>
                            <h5>Email: <span className="desc-cl">{usuario.email}</span></h5>
                            <h5>Senha: <span className="desc-cl">{usuario.senha}</span></h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Client;