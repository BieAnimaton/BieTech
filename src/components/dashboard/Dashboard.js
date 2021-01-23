import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../services/api';
import { isAuthenticated } from "../../auth";

//{user.name.split(" ")[0]}

function mostrarToken() {
  try {
    var cookieArr = document.cookie.split(";");
  
    for(var i = 0; i < cookieArr.length; i++)
        var cookiePair = cookieArr[i].split("=");
        
    cookiePair[1].trim();
    document.querySelector(".token").innerHTML = decodeURIComponent(cookiePair[1]);
  } catch {
    document.location.reload(true);
  }
}

function sair() {
  var now = new Date();

  document.cookie = "ACCESS_TOKEN=; expires=" + now.toUTCString() + "; path=''";

  document.location.reload(true);
}

function obterCookie(name) {
  // Separa em array
  var cookieArr = document.cookie.split(";");
  
  // Da um loop
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
      
    //Remove espações e compara
    if(name == cookiePair[0].trim()) {
      // Decodifica e retorna
      return decodeURIComponent(cookiePair[1]);
    }
  }
    // Caso falhe, retorna nada
    return null;
  }

  setInterval(() => {
    if (obterCookie("ACCESS_TOKEN")) {
      return false
    } else {
      document.location.reload(true);
    }
  }, 5000);

class Dashboard extends Component {

    state = {
      dados: "",
      auth: "",
      token: "",
      nome: "",
      id: ""
    }

    componentDidMount() {

      const config = {
        headers: { "x-access-token": this.props.location.state.token }
      };
    
      api.get("obterDados", config).then(response => {
        console.log(response.data)

        this.state.dados = response.data;

        this.setState({ auth: this.props.location.state.auth,
                        token: this.props.location.state.token,
                        nome: this.state.dados.decodificado.nome,
                        id: this.state.dados.decodificado.id })
      });
    }

    render() {

      const token = "";

      return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Bem vindo(a), {this.state.nome} </b> 
                <p className="flow-text grey-text text-darken-1">
                  Você está logado no site!
                </p>
              </h4>
              <button onClick={sair}>Sair</button> <br/>
              <button onClick={mostrarToken}>Mostrar Token</button> <br/>
              <span className="token"></span> <br/>
              <button onClick={() => {console.log(this.props)}}>Mostrar props</button> <br/>
              <button onClick={() => {console.log(this.state.dados)}}>Mostrar dados</button> <br/>
              <button onClick={() => {console.log(this.state.token, this.state.auth, this.state.id, this.state.nome)}}>Mostrar dados no State</button> <br/>
              <button>Mostrar cadastro do Usuário</button> <br/>
              <span className="cadastro"></span> <br />
            </div>
          </div>
        </div>
    );
  }
}

export default Dashboard;