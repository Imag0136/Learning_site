import React from 'react';
import styles from "../styles/NavItem.module.css";
import {NavLink} from "react-router-dom";

const Dropdown = () => {
    return (
        <>
            <ul className="dropdown">
                {submenus.map((submenu, index) => (
                    <li key={index} className="menu-items">
                        <a href="/#">{submenu.title}</a>
                    </li>
                ))}
            </ul>
            <ul className={styles.dropdown}>
                {submenus.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <NavLink to={href} className={styles.link}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Dropdown;