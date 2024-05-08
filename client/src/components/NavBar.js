import React, { useContext } from 'react';
import { Context } from '../index';
import '../styles/App.css';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <div className="nav-bar">
            <div className="nav-bar__container">
                <div className="logo">
                    <Link className="logo-text" to={SHOP_ROUTE}>PAY2WIN</Link>
                </div>
                <div className="search-bar">
                    <input className="search-bar__input" type="text" placeholder="Поиск по 0 играм..." />
                </div>
                {user.isAuth ?
                    <div className="nav-bar__buttons">
                        <div>
                            <Link className="nav-button__btn" style={{ marginRight: '20px' }} to={ADMIN_ROUTE}>
                                Админка
                            </Link>
                        </div>
                        <div>
                            <Link className="nav-button__btn" to="/">
                                Профиль
                            </Link>
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <Link className="nav-button__btn" onClick={() => logOut()}>
                                Выйти
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="nav-bar__buttons">
                        <div>
                            <Link className="nav-button__btn" style={{ marginRight: '30px' }} to={LOGIN_ROUTE}>
                                Войти
                            </Link>
                        </div>
                        <div>
                            <Link className="nav-button__btn" to={REGISTRATION_ROUTE}>
                                Создать аккаунт
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
});

export default NavBar;
