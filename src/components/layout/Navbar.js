import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { obterCookie } from '../../utils/cookieFunctions';

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

          <label className="logo"><a><Link to="/">BieTech</Link></a></label>
          <ul>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/clientes">Clientes</Link></li>
            <li><Link to="/historia">História</Link></li>
            <li><Link to="/tela_principal">Conta</Link></li>
            <li><Link to="/chat-menu">Chats</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
