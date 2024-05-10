import React, { useContext } from "react";
import "../styles/App.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, ADMIN_CREATE_GAME_ROUTE } from "../utils/consts";

const Admin = observer(() => {
    return (
        <div className="container">
            <Link to={`${ADMIN_ROUTE}}`} className="dark-standard-button">
                Добавить игру
            </Link>
        </div>
    );
});

export default Admin;
