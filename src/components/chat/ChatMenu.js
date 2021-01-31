import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import './styles.css';

const ChatPage = () => {
    return (
      <div className="chat-page">
        <div className="container">
          <div>
              <h3>Chats para trocar informações e conhecimentos!</h3>
            </div>
          <div className="chats-feild">
            <div>
              <h1>Computação</h1>
              <span>Sala sobre Hardwares (melhores peças) e Softwares (melhores programas)</span>
              <Link to="/chat-computacao">Entrar</Link>
            </div>
            <div>
              <h1>Programação</h1>
              <span>Sala sobre as diversas linguagens, com dicas, soluções e ideias novas</span>
              <Link to="/#">Entrar</Link>
            </div>
            <div>
              <h1>Segurança</h1>
              <span>Sala sobre Hacking, alguns ataques e respectivas defesas</span>
              <Link to="/#">Entrar</Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ChatPage;