import React, { useContext, useEffect } from "react";
import GameList from "../components/GameList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchGame } from "../http/gameAPI";

const Shop = observer(() => {
    const { game } = useContext(Context);

    useEffect(() => {
        fetchGame().then((data) => {
            game.setGames(data.rows);
        });
    }, []);

    return (
        <div className="container">
            <div className="games-container">
                <GameList />
            </div>
        </div>
    );
});

export default Shop;
