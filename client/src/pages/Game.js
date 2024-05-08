import React from "react";
import "../styles/GameCard.css";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import GoodCard from "../components/GoodCard";
import GoodStore from "../store/GoodStore";

const goodStore = new GoodStore();

const Game = () => {
    return (
        <div
            className="game-container"
            style={{ backgroundColor: "#fff", height: "100vh" }}
        >
            <Row style={{ display: "flex" }}>
                <div style={{ width: "700px" }}>
                    <div style={{ display: "flex" }}>
                        <input
                            className="basic-input"
                            type="text"
                            placeholder="Поиск по описанию"
                        />
                        <input
                            className="basic-input"
                            type="text"
                            placeholder="Цена от"
                            style={{ width: "110px", marginLeft: "15px" }}
                        />
                        <input
                            className="basic-input"
                            type="text"
                            placeholder="Цена до"
                            style={{ width: "110px", marginLeft: "15px" }}
                        />
                    </div>
                    <div style={{ display: "flex", marginTop: "16px" }}>
                        <input
                            className="basic-input"
                            type="text"
                            placeholder="Только продавцы онлайн"
                        />
                    </div>
                </div>
                <div
                    style={{
                        alignItems: "start",
                        width: "250px",
                        height: "41px",
                        marginTop: "10px",
                        marginLeft: "30px",
                    }}
                >
                    <Link className="add-good" to={"/"}>
                        Добавить товар
                    </Link>
                </div>
            </Row>

            {goodStore.goods.map((good) => (
                <GoodCard key={good.id} good={good} />
            ))}
        </div>
    );
};

export default Game;
