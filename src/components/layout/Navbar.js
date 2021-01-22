import React, { Component } from "react";

import "./styles.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>

          <label className="logo"><a href="/">BieTech</a></label>
          <ul>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/galeria">Galeria</a></li>
            <li><a href="/clientes">Clientes</a></li>
            <li><a href="/historia">História</a></li>
            <li><a href="/tela_principal">Conta</a></li>
            <li><a href="/mensagens">Conversas</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
