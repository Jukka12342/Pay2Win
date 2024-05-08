import React, {useContext} from "react";
import GameList from "../components/GameList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Shop = observer(() => {
    return (
        <div className="container">
            <div className="games-container">
                <GameList />
            </div>
        </div>
    );
});

export default Shop;
