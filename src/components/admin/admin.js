import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

export default function Admin() {

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    function enviarDados(e) {
        e.preventDefault();

        console.log(nome, senha);
        (nome == "admin" && senha == "admin") ? console.log("Logado como ADM") : console.log("Nome ou senha errados")
    }

    return (
        <div className="admin">
            <div className="container">
                <div className="auth-field">
                    <div className="geral">
                        <div className="inicio">
                        <div className="barra-voltar">
                            <Link to="/">
                            <span className="seta"><i class="fas fa-long-arrow-alt-left"></i> Voltar ao Início</span>
                            </Link>             
                        </div>
                        <div>
                            <span className="aviso">Página <b>Administrativa</b></span>
                        </div>
                        </div>
                        <form className="admin-form" noValidate onSubmit={enviarDados}>
                        <div className="entradas">
                            <div>
                            <label htmlFor="nome">Nome</label>
                            <input
                                autoComplete="off"
                                name="nome"
                                id="nome"
                                type="text"
                                onChange={e => setNome(e.target.value)}
                            />
                            </div>
                            <div>
                            <label htmlFor="senha">Senha</label>
                            <input
                                autoComplete="off"
                                name="senha"
                                id="senha"
                                type="password"
                                onChange={e => setSenha(e.target.value)}
                            />
                            </div>
                        </div>
                        <div className="botao-field">
                            <button type="submit">Entrar</button>
                        </div>
                        </form>
                    </div>
                    </div>
            </div>
        </div>  
    );
}