import React from "react";
import "../styles/GameCard.css";
import { Link, useNavigate } from "react-router-dom";
import GenshinImpact from "../assets/images/genshin.jpg";
import Kit from "../assets/images/Kit.jpg";
import { Col } from "react-bootstrap";
import { GAME_ROUTE } from "../utils/consts";

const GameCard = ({ game }) => {
    const navigate = useNavigate();

    return (
        <Col md={4} onClick={() => navigate(`${GAME_ROUTE}/${game.id}`)}>
            <div className="game-card__container">
                <Link to={`/games/${game.id}`} className="game-card__anchor">
                    <div className="game-card__title game-card__title-text">
                        {game.name}
                    </div>
                    <img src={game.img} className="game-card__img" alt="Game" />
                </Link>
            </div>
        </Col>
    );
};

export default GameCard;
