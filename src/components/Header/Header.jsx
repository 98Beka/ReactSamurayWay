import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img src='https://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png'></img>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;