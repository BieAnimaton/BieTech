import React from 'react';

import './styles.css';

import Empresa_1 from '../../imgs/gallery/empresa-1.jpg'
import Empresa_2 from '../../imgs/gallery/empresa-2.jpg'

import Pessoa_1 from '../../imgs/gallery/pessoa-1.PNG'
import Pessoa_2 from '../../imgs/gallery/pessoa-2.PNG'
import Pessoa_3 from '../../imgs/gallery/pessoa-3.PNG'
import Pessoa_4 from '../../imgs/gallery/pessoa-4.PNG'
import Pessoa_5 from '../../imgs/gallery/pessoa-5.PNG'
import Pessoa_6 from '../../imgs/gallery/pessoa-6.PNG'

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="container">
                <h3> Uma galeria repleta de fotos da empresa e seus principais funcionários!</h3>
                    <div className="gallery">
                        <div className="fotos-empresa">
                            <div className="col gallery-empresa-col line">
                                <img className="empresa-img" src={Empresa_1}></img>
                                <h5>Foto externa da Empresa</h5>
                                <p className="desc">Muito grande!</p>
                            </div>
                            <div className="col gallery-empresa-col line line-2">
                                <img className="empresa-img" src={Empresa_2}></img>
                                <h5>Foto externa da Empresa</h5>
                                <p className="desc">Belos reflexos!</p>
                            </div>
                        </div>
                        <div className="fotos-pessoas">
                            <div className="col gallery-col">
                                <img className="pessoas-img" src={Pessoa_1}></img>
                                <h5>Programador</h5>
                                <p className="desc">Marcos Aventura</p>
                            </div>
                            <div className="col gallery-col">
                                <img className="pessoas-img" src={Pessoa_2}></img>
                                <h5>Marketing</h5>
                                <p className="desc">Isadora Oliveira</p>
                            </div>
                            <div className="col gallery-col">
                                <img className="pessoas-img" src={Pessoa_3}></img>
                                <h5>Programador</h5>
                                <p className="desc">Ricardo Afonso</p>
                            </div>
                            <div className="col gallery-col">
                                <img className="pessoas-img" src={Pessoa_4}></img>
                                <h5>Analista de Sistema</h5>
                                <p className="desc">Maria Cruz</p>
                            </div>
                            <div className="col gallery-col">
                                <img className="pessoas-img" src={Pessoa_5}></img>
                                <h5>CEO</h5>
                                <p className="desc">Robert Downey Junior</p>
                            </div>
                            <div className="col gallery-col">
                                <img className="pessoas-img" src={Pessoa_6}></img>
                                <h5>Segurança</h5>
                                <p className="desc">Isadora Nunes</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;