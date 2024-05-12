import React, { useContext, useState } from "react";
import "../styles/App.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, ADMIN_CREATE_GAME_ROUTE } from "../utils/consts";
import CreateGame from "../modals/CreateGame";

const Admin = observer(() => {
    const [gameVisible, setGameVisible] = useState(false);
    return (
        <div className="container">
            <button
                className="dark-standard-button"
                onClick={() => setGameVisible(true)}
            >
                Добавить игру
            </button>
            <CreateGame
                show={gameVisible}
                onHide={() => setGameVisible(false)}
            />
        </div>
    );
});

export default Admin;
