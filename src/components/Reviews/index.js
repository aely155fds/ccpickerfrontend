import React from "react";
import "./style.css";

const Reviews = () => {
    const reviews = [
        {
            name: "João Silva",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            comment: "Adorei o serviço! Assino a 5 meses já.",
        },
        {
            name: "Maria Oliveira",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            comment: "Excelente atendimento, economizo muito nas minhas corridas.",
        },
        {
            name: "Carlos Souza",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            comment: "Super recomendo! Me ajudaram em tudo o que eu precisei.",
        },
    ];

    return (
        <div className="reviews-container">
            {reviews.map((review, index) => (
                <div className="review-card" key={index}>
                    <div className="reviewer-info">
                        <img src={review.image} alt={review.name} className="reviewer-image" />
                        <h3 className="reviewer-name">{review.name}</h3>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
