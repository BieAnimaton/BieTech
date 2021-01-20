import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import './styles.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      senha: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/tela_principal");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/tela_principal");
    }

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

    const userData = {
      email: this.state.email,
      senha: this.state.senha
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

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
              <form noValidate onSubmit={this.onSubmit}>
                <div className="entradas">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
                      })}
                    />
                    <span>
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
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
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <span>
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
