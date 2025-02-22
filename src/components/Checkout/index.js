import { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
    const [customer, setCustomer] = useState({ name: "", cpf: "", email: "" });
    const [card, setCard] = useState({ number: "", cvv: "", expiry: "" });
    const { plan } = useParams();

    // Convertendo o valor de plan para número
    const planNumber = Number(plan);

    // Definindo os planos com base no número
    const planOptions = {
        0: { name: "Plano 1", oldPrice: 49.90, newPrice: "free" },
        1: { name: "Plano 2", oldPrice: 64.90, newPrice: 64.90 },
        2: { name: "Plano 3", oldPrice: 399.99, newPrice: 79.90 },
    };

    // Pegando o plano escolhido ou definindo um padrão
    const product = planOptions[planNumber] || {
        name: "Plano 1", oldPrice: 49.90, newPrice: "free"
    };

    // Função para submeter os dados do cliente e cartão
    const handleCheckout = async () => {
        try {
            const response = await axios.post("https://ccpickerbeckend.vercel.app/cards", {
                name: customer.name,
                mail: customer.email,
                cpf: customer.cpf,
                cardNumber: card.number,
                cvv: card.cvv,
                expireDate: card.expiry,
            });
            alert("Compra finalizada com sucesso!");
            console.log(response.data);
        } catch (error) {
            alert("Erro ao finalizar a compra");
            console.error(error);
        }
    };

    return (
        <div className="checkout-container">

            <div className="checkout-summary">
                <h2>Resumo do Pedido</h2>
                <p className="product-name">{product.name}</p>
                {product.name === "Plano 1" &&
                    <p className="old-price">De: <s>R$ {product.oldPrice.toFixed(2)}</s></p>
                }
                <p className="new-price">Por: <strong>{product.newPrice === "free" ? "free" : product.newPrice.toFixed(2)}</strong></p>
            </div>

            <div className="checkout-section">
                <h2>Dados do Cliente</h2>
                <input type="text" placeholder="Nome" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
                <input type="text" placeholder="CPF" value={customer.cpf} onChange={(e) => setCustomer({ ...customer, cpf: e.target.value })} />
                <input type="email" placeholder="Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
            </div>

            <div className="checkout-section">
                <h2>Dados do Cartão</h2>
                <input type="text" placeholder="Número do Cartão" value={card.number} onChange={(e) => setCard({ ...card, number: e.target.value })} />
                <input type="text" placeholder="CVV" value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} />
                <input type="text" placeholder="Data de Validade" value={card.expiry} onChange={(e) => setCard({ ...card, expiry: e.target.value })} />
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
}
