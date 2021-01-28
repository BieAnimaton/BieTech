import React from 'react';

import errorImg from '../../imgs/erro_404.png';

const ErrorPage = () => {
    return (
        <div>
            <div className="container">
                <h3>ERRO - PÁGINA NÃO ENCONTRADA</h3>
                <p className="paragrafo">Você está navegando em uma página inexistente</p>
                <img style={{ marginBottom: '80px' }} src={errorImg}></img>
            </div>
        </div>
    )
}

 export default ErrorPage;