import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import './styles.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      senha: "",
      senha2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/tela_principal");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
      senha2: this.state.senha2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

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
              <form noValidate onSubmit={this.onSubmit}>
                <div className="entradas">
                  <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="nome"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    <span>{errors.name}</span>
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email
                      })}
                    />
                    <span>{errors.email}</span>
                  </div>
                  <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="senha"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                  <span>{errors.password}</span>
                </div>
                <div>
                  <label className="label-confirme" htmlFor="senha2">Confirme a Senha</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="senha2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2
                    })}
                  />
                  <span>{errors.password2}</span>
                </div>
                <div className="botao-field">
                  <button type="submit">Registrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
