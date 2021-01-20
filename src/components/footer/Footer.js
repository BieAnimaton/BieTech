import React, { Component } from 'react';

import "./styles.css"

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <footer>
                    <div className="main-content">
                        <div className="left box">
                            <h2>Sobre</h2>
                            <div className="content">
                                <p>Lorem ipsum lrem ipsum lrem ipsum lrem ipsum lrem ipsum lrem ipsum lrem ipsum lrem ipsum lrem ipsum lrem ipsu </p>
                                <div className="social">
                                    <a href="#"><span className="fab fa-facebook-f"></span></a>
                                    <a href="#"><span className="fab fa-twitter"></span></a>
                                    <a href="#"><span className="fab fa-instagram"></span></a>
                                    <a href="#"><span className="fab fa-youtube"></span></a>
                                </div>
                            </div>
                        </div>

                        <div className="center box">
                            <h2>Endereços</h2>
                            <div className="content">
                                <div className="place">
                                    <span className="fas fa-map-marker-alt icon"></span>
                                    <span className="text">Algum lugar, São Paulo</span>
                                </div>
                                <div className="phone">
                                    <span className="fas fa-phone-alt icon"></span>
                                    <span className="text">+55(20)90221-6859</span>
                                </div>
                                <div className="email">
                                    <span className="fas fa-envelope icon"></span>
                                    <span className="text">comercio@bietech.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="right box">
                            <h2>Mensagem</h2>
                            <div className="content">
                                <form action="#">
                                    <div className="email">
                                        <div className="text">Email *</div>
                                        <input type="email" required />
                                    </div>
                                    <div className="msg">
                                        <div className="text">Message *</div>
                                        <textarea rows="2" cols="25" required></textarea>
                                    </div>
                                    <div className="btn">
                                        <button type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                    <center>
                        <span className="creadit">Created by <a href="#">aaa</a> | </span>
                        <span className="far fa-copyright"></span> 2021 All rights reserved.<span></span>
                    </center>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;