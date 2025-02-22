import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1><span style={{ color: "#FE8E30" }}>Parabéns!</span> Você ganhou 1 mês de plano <span style={{ color: "#FE8E30" }}>grátis</span> no Downscape!</h1>
                <h2>Ganhe 10 corridas grátis no Uber!</h2>
                <Link to={"checkout/0"}>
                    <button>Garanta já!</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
