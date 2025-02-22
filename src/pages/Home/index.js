import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Reviews from '../../components/Reviews';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Slide />
            <div style={{ maxWidth: '600px', margin: '0px auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>Olá!</p>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                    Após a aprovação da sua compra, você receberá um e-mail com os <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>códigos de desconto exclusivos</span> que poderão ser utilizados em suas próximas compras.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                    Além disso, o e-mail conterá as <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>instruções detalhadas</span> sobre como aplicar os descontos de forma simples e rápida.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                    Aproveite as ofertas e economize ainda mais em sua próxima experiência de compra conosco!
                </p>
                <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#777' }}>
                    <p>Se tiver alguma dúvida, entre em <a href="mailto:suporte@exemplo.com" style={{ color: '#3498db', textDecoration: 'none' }}>contato conosco</a>.</p>
                </div>
            </div>
            <Reviews />
        </>
    );
};

export default Home;
