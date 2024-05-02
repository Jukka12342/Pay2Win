import React, { useState, useEffect } from 'react';
import "../styles/App.css";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
    const [isLoginActive, setIsLoginActive] = useState(false);
    const [isRegistrationActive, setIsRegistrationActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        setIsLoginActive(currentPath === LOGIN_ROUTE);
        setIsRegistrationActive(currentPath === REGISTRATION_ROUTE);
    }, [location.pathname]);

    return (
        <div className="container" style={{ background: "linear-gradient(#001154, #280D3B)" }}>
            <form className="auth-form">
                <div className="auth-buttons">
                    <Link className={`auth-button ${isLoginActive ? 'active' : ''}`} to={LOGIN_ROUTE}>Войти</Link>
                    <Link className={`auth-button ${isRegistrationActive ? 'active' : ''}`} to={REGISTRATION_ROUTE}>Регистрация</Link>
                </div>
                {isLoginActive ? (
                    <>
                        <div className="field">
                            <input name="email" type="email" placeholder="E-Mail"/>
                            <label htmlFor="email" className="field__label">
                                Ваш логин
                            </label>
                        </div>
                        <div className="field">
                            <input name="password" type="password" placeholder="Пароль"/>
                            <label htmlFor="password" className="field__label">
                                Ваш пароль
                            </label>
                        </div>
                        <div className="auth-button__container">
                            <button type="submit" className="auth-button__submit">
                                Войти
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="field">
                            <input name="login" type="login" placeholder="Логин"/>
                            <label htmlFor="login" className="field__label">
                                Латинские буквы и цифры
                            </label>
                        </div>
                        <div className="field">
                            <input name="email" type="email" placeholder="E-Mail"/>
                            <label htmlFor="email" className="field__label">
                                Требуется для активации учётной записи
                            </label>
                        </div>
                        <div className="field">
                            <input name="password" type="password" placeholder="Пароль"/>
                            <label htmlFor="password" className="field__label">
                                Минимум шесть символов
                            </label>
                        </div>
                        <div className="field">
                            <label className="field__label" style={{display: 'flex', alignItems: 'center'}}>
                                <input type="checkbox" name="agree" style={{marginRight: '15px'}}/>
                                С лицензионным соглашением, включая правила сайта
                                <br/>
                                ознакомился, принимаю в полном объёме
                            </label>
                        </div>
                        <div className="auth-button__container">
                            <button type="submit" className="auth-button__submit">
                                Зарегистрироваться
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default Auth;
