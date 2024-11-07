import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tarjeta from './Tarjeta';
import perfilImage from './img/moiseslindo.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Tarjeta
        username="moisesrosariodev"
        accountName="Moises Rosario Dev"
        tweetText="¡Felicitaciones al presidente Trump por su victoria! Esperamos trabajar con usted y su administración para ayudar a garantizar que Estados Unidos siga liderando y siendo impulsado por el ingenio, la innovación y la creatividad."
        profileImage={perfilImage}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
