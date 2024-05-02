import React from 'react';

import GameCard from "../components/GameCard";
import {Col, Row} from "react-bootstrap";
import Alphabet from "../components/Alphabet";
import GameList from "../components/GameList";

const Shop = () => {
    return (
        <div className="container">
            <div className="games-container">
                <GameList/>
            </div>
        </div>
    );
};

export default Shop;