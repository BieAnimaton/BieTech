import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../services/api';

import "./styles.css";

const Client = () => {

    const[usuarios, setUsuarios] = useState([""]);
    const[pesquisa, setPesquisa] = useState("");
    const[skip, setSkipped] = useState();
    
    useEffect(() => {
        setSkipped(0);
    }, [])

    useEffect(() => {
        api.get(`/listar?pesquisa=${pesquisa}`).then(response => {
            setUsuarios(response.data);
        })
    }, [usuarios]);

    function proximaPagina() {
    };

    function paginaAnterior() {
    };

    return (
        <div className="clientes">
            <div className="container">
                <h3>Principais clientes da Empresa</h3>
                <div className="pesquisa-field">
                    <p className="paragrafo">Pesquise por um usuário:</p>
                    <input className="pesquisa" name="pesquisa" type="text" onChange={(e) => {setPesquisa(e.target.value)}}/>
                </div>
                <div className="lista-clientes">
                    {usuarios.map(usuario => (
                        <div key={usuario._id}>
                            <h5>Nome: <span>{usuario.nome}</span></h5>
                            <h5>Email: <span className="desc-cl">{usuario.email}</span></h5>
                            <h5>Senha: <span className="desc-cl">{usuario.senha}</span></h5>
                        </div>
                    ))}
                </div>
                <div className="botoes-pagina">
                    <button onClick={() => {paginaAnterior()}}>Página anterior</button>
                    <button onClick={() => {proximaPagina()}}>Próxima página</button>
                </div>
            </div>
        </div>
    )
}

export default Client;