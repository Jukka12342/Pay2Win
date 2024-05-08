import React, {useContext, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import GameCard from "./GameCard";
import {fetchGame} from "../http/gameAPI";

const GameList = observer(() => {
    const { game } = useContext(Context);

    useEffect(() => {
        fetchGame().then(data => game.setGame(data));
    }, []);

    return (
        <div>
            <Row className="d-flex">
                {game.games.map(gameItem =>
                    <GameCard key={gameItem.id} name={gameItem.name} game={gameItem}/>
                )}
            </Row>
        </div>
    );
});

export default GameList;
