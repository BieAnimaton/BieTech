import React from 'react';

import Trabalho_1 from '../../imgs/products/trabalho_1.PNG';
import Trabalho_2 from '../../imgs/products/trabalho_2.PNG';

import Seguranca_1 from '../../imgs/products/seguranca_1.png';
import Seguranca_2 from '../../imgs/products/seguranca_2.png';
import Seguranca_3 from '../../imgs/products/seguranca_3.png';

import Robo_1 from '../../imgs/products/robo_1.png';
import Bot_1 from '../../imgs/products/bot.jpg';

import './styles.css';

const Products = () => {
    return (
        <div className="products">
            <div className="container">
                <h3>Principais produtos oferecidos pela empresa!</h3>
                <p className="paragrafo">Para melhor escolha, são dividos em suas respectivas áreas</p>
                <div className="products">
                    <div>
                        <h4>Softwares para Trabalho <span>🛠</span></h4>
                        <div className="products-trabalho">
                            <div className="col product-space line">
                                <img className="trabalho_img" src={Trabalho_1}></img>
                                <h5>OrganizeLifer</h5>
                                <p className="desc-pr">Software para organizar sua vida, com dados de trabalho, vida, saúde,
                                emprego, jogos, leitura, músicas e Ifood. Possui RGB LED para gamers.</p>
                            </div>
                            <div className="col product-space line line-2">
                                <img className="trabalho_img" src={Trabalho_2}></img>
                                <h5>DoAnything</h5>
                                <p className="desc-pr">Software para você anotar as tarefas e compromissos do dia a dia.
                                Também tem luzinha e permite adicionar um despertador de alerta extra.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Softwares para Segurança <span><i class="fas fa-shield-alt"></i></span></h4>
                        <div className="products-seguranca">
                            <div className="col product-space line">
                                <img className="security_img" src={Seguranca_1}></img>
                                <h5>Kalinuxo</h5>
                                <p className="desc-pr">Software para hackers hackearam os hackers!</p>
                            </div>
                            <div className="col product-space line">
                                <img className="security_img" src={Seguranca_2}></img>
                                <h5>ParrotOSo</h5>
                                <p className="desc-pr">Outro software para fazer as coisas do primeiro.</p>
                            </div>
                            <div className="col product-space line line-2">
                                <img className="security_img" src={Seguranca_3}></img>
                                <h5>BlackArco</h5>
                                <p className="desc-pr">Faz exatamente o mesmo que o 1º e 2º. Recomendo!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Robôs Pré-Programados e Bots <span>🤖</span></h4>
                        <div className="products-robos">
                            <div className="col product-space">
                                <img className="robot_img" src={Robo_1}></img>
                                <h5>TransporterBasic</h5>
                                <p className="desc-pr">Robô que te ajudará em tarefa de transporte de compras, equipamentos e produtos.
                                Nem pense em usar pra contrabandear produtos! 😠</p>
                            </div>
                            <div className="col product-space">
                                <img className="robot_img" src={Bot_1}></img>
                                <h5>CrazyBot</h5>
                                <p className="desc-pr">Este Bot finaliza todas as tarefas que forem pedidas
                                de um jeito louco: anotar telefonemas, mandar email e etc. Às vezes começar a dançar do nada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;