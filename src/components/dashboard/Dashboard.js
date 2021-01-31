import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../services/api';
import axios from 'axios';
import { mostrarToken, obterCookie, decodificarCookie } from '../../utils/cookieFunctions';

import './styles.css'

export default function Dashboard() {

    const [auth, setAuth] = useState();
    const [token, setToken] = useState("");
    const [nome, setNome] = useState("");
    const [id, setId] = useState();
    const [dadosId, setDadosId] = useState([]);
    const [editarDados, setEditarDados] = useState();

    useEffect(() => {
      const config = {
        headers: { "x-access-token": obterCookie("ACCESS_TOKEN") }
      };
    
      const decodificado = decodificarCookie(obterCookie("ACCESS_TOKEN"));

      setAuth(true);
      setToken(obterCookie("ACCESS_TOKEN"))
      setNome(decodificado.nome)
      setId(decodificado.id)
      
    }, []);

    useEffect(() => {
      api.get(`/listar/${id}`).then(response => {
        setDadosId(response.data);
      })
    }, [id]);

    function sair() {
      var now = new Date();
    
      document.cookie = "ACCESS_TOKEN=; expires=" + now.toUTCString() + "; path=''";
    
      document.location.reload(true);
    }

    function apagarConta() {
      api.delete(`/deletar/${id}`).then(response => {
        console.log(response.data);
        sair();
      })
    }

    return (
      <div>
        <div className="container">
          <h4>
            <b>Bem vindo(a), {nome} </b> 
            <p className="paragrafo">Você está logado no site!</p>
          </h4>
          <button onClick={sair}>Sair</button> <br/>
          <div className="botoes-iniciais">
            <button onClick={mostrarToken}>Mostrar Cookie</button> <br/>
            <span className="token"></span> <br/>
            <button onClick={() => {console.log(decodificarCookie(obterCookie("ACCESS_TOKEN")))}}>Decodificar Cookie</button> <br/>
          </div>
          {editarDados ? <EditarDados /> : <Dados />}
          <div className="botoes-finais">
            <button className="editar" onClick={() => {setEditarDados(!editarDados)}}>Editar Conta</button>
            <button className="apagar" onClick={() => {apagarConta()}}>Apagar Conta</button>
          </div>
        </div>
      </div>
  );

  //{dadosId.fotoPerfil && <h5>Foto de Perfil: <span className="desc-cl">{dadosId.fotoPerfil}</span></h5>}

  function Dados() {
    return (
      <div className="dados-conta-id">
        <div>
          <h5>Nome: <span>{dadosId.nome}</span></h5>
          {dadosId.sobrenome && <h5>Sobrenome: <span className="desc-cl">{dadosId.sobrenome}</span></h5>}
          <h5>ID: <span className="desc-cl">{dadosId._id}</span></h5>
          <h5>Email: <span className="desc-cl">{dadosId.email}</span></h5>
          <h5>Senha: <span className="desc-cl">{dadosId.senha}</span></h5>
          {dadosId.sexo && <h5>Sexo: <span className="desc-cl">{dadosId.sexo}</span></h5>}
          {dadosId.dataNascimento && <h5>Data de Nascimento: <span className="desc-cl">{dadosId.dataNascimento}</span></h5>}
          {dadosId.paisAtual && <h5>País atual: <span className="desc-cl">{dadosId.paisAtual}</span></h5>}
          <h5>Data da Criação: <span className="desc-cl">{dadosId.dataCriacao}</span></h5>
        </div>
      </div>
    );
  };

  function EditarDados() {

    const[nome, setNome] = useState("");
    const[sobrenome, setSobrenome] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[sexo, setSexo] = useState("");
    const[dataNascimento, setDataNascimento] = useState("");
    const[paisAtual, setPaisAtual] = useState("");
    const[mensagensUsu, setMensagensUsu] = useState("");
    const[amigosUsu, setAmigosUsu] = useState("");
    const[fotoPerfil, setFotoPerfil] = useState("");

    const[nomePais, setNomePais] = useState(null);

    useEffect(() => {
      api.get(`/listar/${id}`).then(response => {
        const { nome, sobrenome, email, senha, sexo, dataNascimento, paisAtual, mensagensUsuaruio, amigosUsuario, fotoPerfil  } = response.data;

        setNome(nome);
        setSobrenome(sobrenome);
        setEmail(email);
        setSenha(senha);
        setSexo(sexo);
        setDataNascimento(dataNascimento);
        setPaisAtual(paisAtual);
        setMensagensUsu(mensagensUsuaruio);
        setAmigosUsu(amigosUsuario);
        setFotoPerfil(fotoPerfil);
      });
    }, []);

    useEffect(() => {
      axios.get("https://restcountries.eu/rest/v2/all").then(response => {
        setNomePais(response.data);
      });
    }, []);

    function atualizarDados(e) {
      e.preventDefault();
      api.put(`/alterar/${id}`, {nome, sobrenome, email, senha, sexo, dataNascimento, paisAtual}).then(response => {
        const dados = (response.data);
      });

      setEditarDados(0);
      document.location.reload(true);
    }
    
    return (
      <div className="dados-conta-id">
        <div>
          <form noValidate onSubmit={atualizarDados}>
            <label htmlFor="foto-perfil">Foto de Perfil: </label>
            <input name="foto-perfil" type="file"/><br />
            <label htmlFor="nome">Nome: </label>
            <input name="nome" type="text" onChange={(e) => {setNome(e.target.value)}}/><br />
            <label htmlFor="sobrenome">Sobrenome: </label>
            <input name="sobrenome" type="text" onChange={(e) => {setSobrenome(e.target.value)}}/><br />
            <label htmlFor="senha">Senha: </label>
            <input name="senha" type="password" disabled/><br />
            <label htmlFor="email">Email: </label>
            <input name="email" type="email" onChange={(e) => {setEmail(e.target.value)}}/><br />
            <label htmlFor="sexo">Sexo: </label><br />
            <i class="fas fa-mars icon"></i><input className="radio" name="sexo" type="radio" value="Masculino" onChange={(e) => {setSexo(e.target.value)}}/><br />
            <i class="fas fa-venus icon"></i><input className="radio" name="sexo" type="radio" value="Feminino" onChange={(e) => {setSexo(e.target.value)}}/><br />
            <label htmlFor="data-nascimento">Data de Nascimento: </label>
            <input name="data-nascimento" type="date" onChange={(e) => {setDataNascimento(e.target.value)}}/><br />
            <label htmlFor="pais-atual">País Atual: </label>
            <select name="pais-atual" onChange={(e) => {setPaisAtual(e.target.value)}}>
              {nomePais && nomePais.map(nome => (
                <option key={nomePais.id}>{nomePais[12].translations.pt}</option>
              ))}
            </select>
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    );
  };
};