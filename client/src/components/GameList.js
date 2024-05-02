import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import GameCard from "./GameCard";

const GameList = observer(() => {
    const { game } = useContext(Context);

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
