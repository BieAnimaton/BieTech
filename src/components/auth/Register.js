import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import api from '../../services/api';

import './styles.css';

class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
        nome: '',
        email: '',
        senha: '',
        senha2: ''
    };
};
  
  changeHandler = e => {
    this.setState( { [e.target.name]: e.target.value } )
  }

  submitHandler = e => {
    e.preventDefault();
    api.post('/registrar', this.state);
    this.props.history.push("/entrar")
  }

  render() {

    const { nome, email, senha, senha2 } = this.state; 

    return (
      <div className="registrar">
          <div className="conatiner">
            <div className="auth-field">
              <div className="geral">
                <div className="inicio">
                  <div className="barra-voltar">
                    <Link to="/">
                      <span className="seta"><i class="fas fa-long-arrow-alt-left"></i> Voltar ao Início</span>
                    </Link>
                  </div>
                  <div>
                    <span className="aviso"><b>Registre</b> abaixo</span>
                    <p>
                      <span>Possui uma conta? <Link to="/entrar" className="auth">Entre</Link></span>
                    </p>
                  </div>
                </div>
                <form noValidate onSubmit={this.submitHandler}>
                  <div className="entradas">
                    <div>
                      <label htmlFor="nome">Nome</label>
                      <input
                        name="nome"
                        id="nome"
                        type="text"
                        value={nome}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div>
                      <label htmlFor="senha">Senha</label>
                      <input
                        name="senha"
                        id="senha"
                        type="password"
                        value={senha}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-confirme" htmlFor="senha2">Confirme a Senha</label>
                    <input
                      name="senha2"
                      id="senha2"
                      type="password"
                      value={senha2}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="botao-field">
                    <button type="submit">Registrar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
   }
  }

  export default Register;