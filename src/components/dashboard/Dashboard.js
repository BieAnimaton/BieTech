import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import api from '../../services/api';

//{user.name.split(" ")[0]}

const Dashboard = ({ props }) => {

  const [dados, setDados] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
  
    const config = {
      headers: { "x-access-token": token }
    };
  
    api.get("obterUsuario", config).then(response => {
      setDados(response.data);
    });
  })

  function logout() {
    localStorage.removeItem("ACCESS_TOKEN");
  }

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Bem vindo(a), {dados && dados.nome.nome} </b> 
              <p className="flow-text grey-text text-darken-1">
                Você está logado no site!
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={logout}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;