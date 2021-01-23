import React, { useEffect, useState } from "react";
import axios from 'axios';

import './styles.css'

import Image_Hand from '../../imgs/home/hand.jpg';
import Image_Notebbok from '../../imgs/home/notebook.jpg';

const Home = () => {

  const [prices, setPrices] = useState(null);
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    axios.get("https://api.hgbrasil.com/finance?format=json-cors&key=c21edb7b").then(response => {
      setPrices(response.data);
    })
  }, [])

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=tecnologia&apiKey=9c988c1b921d4f2eb0e0030700d6d254").then(response => {
      setNoticia(response.data);
    })
  }, [])

  if (noticia) {
    console.log(noticia.articles[0]);
  }

  return (
    <div className="home">
      <div className="container">
          <h3>Encontre os melhores softwares do mercado!</h3>
          <h3>Oferecemos assistência e segurança.</h3>
          <p className="paragrafo">
            👀 Fique de olho nas notícias. Tem muita novidade! 👀
          </p>
            <div className="image-field">
              <img className="hand" src={Image_Hand}></img>
              <img src={Image_Notebbok}></img>
            </div>

          <div>
            <h3>Notícias 📑</h3>
            <p className="paragrafo">
              Fique atento sobre a evolução e desenvolvimento das tecnologias
              </p>
              <div className="noticia">
                  {noticia && (
                    <div className="noticia-field">
                      <div>
                        <a href={noticia.articles[0].url} target="_blank"><img className="noticia-img" src={noticia.articles[0].urlToImage}></img></a>
                        <h5 className="noticia-ti">{noticia.articles[0].title}</h5>
                        <p className="paragrafo noticia-par">{noticia.articles[0].description}</p>
                      </div>
                      <div>
                        <a href={noticia.articles[1].url} target="_blank"><img className="noticia-img" src={noticia.articles[1].urlToImage}></img></a>
                        <h5 className="noticia-ti">{noticia.articles[1].title}</h5>
                        <p className="paragrafo noticia-par">{noticia.articles[1].description}</p>
                      </div>
                      <div>
                        <a href={noticia.articles[2].url} target="_blank"><img className="noticia-img" src={noticia.articles[2].urlToImage}></img></a>
                        <h5 className="noticia-ti">{noticia.articles[2].title}</h5>
                        <p className="paragrafo noticia-par">{noticia.articles[2].description}</p>
                      </div>
                      <div>
                        <a href={noticia.articles[3].url} target="_blank"><img className="noticia-img" src={noticia.articles[3].urlToImage}></img></a>
                        <h5 className="noticia-ti">{noticia.articles[3].title}</h5>
                        <p className="paragrafo noticia-par">{noticia.articles[3].description}</p>
                      </div>
                    </div>
                  )}
                </div>
          </div>

          <div>
            <h3>Cotações 💲</h3>
            <p className="paragrafo">
              Valor atual das moedas no mercado
            </p>
            <div className="prices-field">
              {prices && (
                <div className="prices-div">
                  <div>
                    <h4 >Dólar: <span className="moedas">R$ {String(prices.results.currencies.USD.buy).replace(".",",")}</span></h4>
                  </div>
                  <div>
                    <h4>Dólar canadense: <span className="moedas">R$ {String(prices.results.currencies.CAD.buy).replace(".",",")}</span></h4>
                  </div>
                  <div>
                    <h4>Euro: <span className="moedas">R$ {String(prices.results.currencies.EUR.buy).replace(".",",")}</span></h4>
                  </div>
                  <div>
                    <h4>Libra Esterlina: <span className="moedas">R$ {String(prices.results.currencies.GBP.buy).replace(".",",")}</span></h4>
                  </div>
                  <div>
                    <h4>Iene: <span className="moedas">R$ {String(prices.results.currencies.JPY.buy).replace(".",",")}</span></h4>
                  </div>
                  <div>
                    <h4>Bitcoin: <span className="moedas">R$ {String(prices.results.currencies.BTC.buy).replace(".",",")}</span></h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
