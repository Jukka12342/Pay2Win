import React, { useState, useRef, useContext } from "react";
import { useClickOutside } from "./useClickOutside";
import "../styles/Drop.css";
import "../assets/images/genshin.jpg";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";

function Drop() {
    const { user } = useContext(Context);

    /* выход из аккаунта */
    const logOut = () => {
        localStorage.removeItem("token");
        user.setUser({});
        user.setIsAuth(false);
    };

    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });

    return (
        <div className="social-icon">
            <button className="menu-button" onClick={() => setOpen(!isOpen)}>
                ааа
            </button>
            <nav className={`menu ${isOpen ? "active" : ""}`} ref={menuRef}>
                <ul className="menu__list">
                    <li className="menu__item">Профиль</li>
                    <li className="menu__item">Настройки</li>
                    <li className="menu__item">
                        <a
                            style={{ display: "block", width: "100%" }}
                            href={ADMIN_ROUTE}
                        >
                            Админка
                        </a>
                    </li>
                    <li className="menu__item">
                        <a
                            style={{ display: "block", width: "100%" }}
                            onClick={() => logOut()}
                            href={SHOP_ROUTE}
                        >
                            Выйти
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Drop;
