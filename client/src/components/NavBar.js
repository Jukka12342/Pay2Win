// ReactJS
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from "../utils/consts";
import search_icon_light from "../assets/search-b.png";
import "../styles/App.css";
import "../styles/NavBar.css";
import Drop from "./Drop";
import { getGamesCount } from "../http/gameAPI";

const NavBar = observer(() => {
    const { user, game } = useContext(Context);
    const [gamesCount, setGamesCount] = useState(0);

    useEffect(() => {
        fetchGamesCount();
    }, []);

    const fetchGamesCount = async () => {
        try {
            const response = await getGamesCount();
            setGamesCount(response.count);
        } catch (error) {
            console.error("Ошибка при получении количества игр:", error);
        }
    };

    const renderAuthenticatedButtons = () => (
        <div className="nav-bar__buttons">
            {/*<div>
                <Link
                    className="nav-button__btn"
                    style={{ marginRight: "20px" }}
                    to={ADMIN_ROUTE}
                >
                    Админка
                </Link>
            </div>
            <div style={{ marginLeft: "20px" }}>
                <Link className="nav-button__btn" onClick={() => logOut()}>
                    Выйти
                </Link>
    </div>*/}
            <Drop />
        </div>
    );

    const renderUnauthenticatedButtons = () => (
        <div className="nav-bar__buttons">
            <div>
                <Link
                    className="nav-button__btn"
                    style={{ marginRight: "30px" }}
                    to={LOGIN_ROUTE}
                >
                    Войти
                </Link>
            </div>
            <div>
                <Link
                    className="nav-button__btn button__btn-center"
                    to={REGISTRATION_ROUTE}
                >
                    Создать аккаунт
                </Link>
            </div>
        </div>
    );

    return (
        <div className="nav-bar">
            <div className="nav-bar__container">
                <div className="logo">
                    <Link className="logo-text" to={SHOP_ROUTE}>
                        PAY2WIN
                    </Link>
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder={`Поиск по ${gamesCount} играм...`}
                    />
                    <img src={search_icon_light} alt="" />
                </div>
                {user.isAuth
                    ? renderAuthenticatedButtons()
                    : renderUnauthenticatedButtons()}
            </div>
        </div>
    );
});

export default NavBar;
