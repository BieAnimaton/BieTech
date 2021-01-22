import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import api from '../../services/api';

import './styles.css';

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
        email: '',
        senha: '',
    };
};
  
  changeHandler = e => {
    this.setState( { [e.target.name]: e.target.value } )
  }

  submitHandler = e => {
    e.preventDefault();
    const enter = api.post('/entrar', this.state).then(res => {
      const { token } = res.data;
      localStorage.setItem("ACCESS_TOKEN", token);
      this.props.history.push("/tela_principal")
    })
  }

  render() {

    const { email, senha } = this.state; 

    return (
      <div className="login">
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
                    <span className="aviso"><b>Entre</b> abaixo</span>
                    <p>
                      <span>Não possui conta?<Link to="/registrar" className="auth">Registre</Link></span>
                    </p>
                  </div>
                </div>
                <form noValidate onSubmit={this.submitHandler}>
                  <div className="entradas">
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div>
                      <label htmlFor="senha">Senha</label>
                      <input
                        name="senha"
                        id="senha"
                        type="password"
                        onChange={this.changeHandler}
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
}

export default Login;