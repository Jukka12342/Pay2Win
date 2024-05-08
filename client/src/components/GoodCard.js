import React from "react";
import "../styles/App.css";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const GoodCard = ({ good }) => {
    const navigate = useNavigate();

    return (
        <div className="good-card">
            <Row>
                <Col md={12} onClick={() => navigate(`${"/"}/${good.id}/`)}>
                    <div className="good-card__container">
                        <Link
                            to={`/offer/${good.id}`}
                            className="good-card__anchor"
                        >
                            <div className="good-card__info">
                                <div className="good-card__description">
                                    {good.name}
                                </div>
                                <div className="good-card__seller">
                                    {good.seller}
                                </div>
                                <div className="good-card__price">
                                    {good.price} руб.
                                </div>
                            </div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default GoodCard;
