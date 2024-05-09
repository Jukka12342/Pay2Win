import React, { useState, useEffect, useContext } from "react";
import "../styles/App.css";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const [isLoginActive, setIsLoginActive] = useState(false);
    const navigate = useNavigate();
    const [isRegistrationActive, setIsRegistrationActive] = useState(false);
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isLogin = location.pathname === LOGIN_ROUTE;

    const click = async () => {
        event.preventDefault();
        let data;
        try {
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, login, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    useEffect(() => {
        const currentPath = location.pathname;
        setIsLoginActive(currentPath === LOGIN_ROUTE);
        setIsRegistrationActive(currentPath === REGISTRATION_ROUTE);
    }, [location.pathname]);

    return (
        <div className="container">
            <form className="auth">
                <div className="auth-buttons">
                    <Link
                        className={`auth-button ${
                            isLoginActive ? "active" : ""
                        }`}
                        to={LOGIN_ROUTE}
                    >
                        Войти
                    </Link>
                    <Link
                        className={`auth-button ${
                            isRegistrationActive ? "active" : ""
                        }`}
                        to={REGISTRATION_ROUTE}
                    >
                        Регистрация
                    </Link>
                </div>
                {isLoginActive ? (
                    <>
                        <div className="field">
                            <input
                                name="email"
                                type="email"
                                placeholder="E-Mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className="field__label">
                                Ваш E-Mail
                            </label>
                        </div>
                        <div className="field">
                            <input
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className="field__label">
                                Ваш пароль
                            </label>
                        </div>
                        <div className="auth-button__container">
                            <button
                                className="auth-button__submit"
                                onClick={click}
                            >
                                Войти
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="field">
                            <input
                                name="login"
                                type="login"
                                placeholder="Логин"
                            />
                            <label htmlFor="login" className="field__label">
                                Латинские буквы и цифры
                            </label>
                        </div>
                        <div className="field">
                            <input
                                name="email"
                                type="email"
                                placeholder="E-Mail"
                            />
                            <label htmlFor="email" className="field__label">
                                Требуется для активации учётной записи
                            </label>
                        </div>
                        <div className="field">
                            <input
                                name="password"
                                type="password"
                                placeholder="Пароль"
                            />
                            <label htmlFor="password" className="field__label">
                                Минимум шесть символов
                            </label>
                        </div>
                        <div className="field">
                            <label
                                className="field__label"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    name="agree"
                                    style={{ marginRight: "15px" }}
                                />
                                С лицензионным соглашением, включая правила
                                сайта
                                <br />
                                ознакомился, принимаю в полном объёме
                            </label>
                        </div>
                        <div className="auth-button__container">
                            <button
                                className="auth-button__submit"
                                onClick={click}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
});

export default Auth;
