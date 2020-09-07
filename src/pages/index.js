import React, { Component } from 'react';
import './style.css';

class Home extends Component {


  render() {
    return (
      <div>
        <header>
          <img alt="" className="logo" src={require('../assets/idea.png')} />
          <h1 className="title">Brilho do Bem</h1>
        </header>
        <div className="navbuttons">
          <div className="buttonblock">
            <a href="https://www.instagram.com/brilho_do_bem/" className="button">Nossos projetos</a>
          </div>
          <div className="buttonblock">
            <a href="#contato" className="button">Nosso contato</a>
          </div>
        </div>
        <div className="main">
          <div className="introduction">
            <br />
            <h2>Quem somos?</h2>
            <br />
            <p>Um grupo de voluntários cujo objetivo é contribuir de forma íntegra para potencializar o desenvolvimento de pessoas em situações vulneráveis.</p>
            <br />
            <h2>Galeria</h2>
          </div>
          <br />
          <div className="content">
            <div className="images">
              <img alt="" className="img" src={require('../assets/img1.jpg')} />
              <img alt="" className="img" src={require('../assets/img2.jpg')} />
              <img alt="" className="img" src={require('../assets/img3.jpg')} />
              <img alt="" className="img" src={require('../assets/img4.jpg')} />
            </div>
          </div>
          <br />
          <div id="contato">
            <h2>Contato:</h2>
            <br />
            <div style={{ display: "flex" }}>
              <img alt="" className="icon" src={require('../assets/whatsapp.png')} />
              <p className="iconlist">+55 11 97538-8981</p>
            </div>
            <div style={{ display: "flex" }}>
              <img alt="" className="icon" src={require('../assets/instagram.png')} />
              <a className="iconlist" href="https://www.instagram.com/brilho_do_bem/">Instagram</a>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
