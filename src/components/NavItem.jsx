import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "../styles/NavItem.module.css"

const NavItem = ({href, title, children}) => {

    return (
        <li className={styles.item}>
            <NavLink to={href} className={styles.link}>
                {title}
            </NavLink>
        </li>
    );
};

export default NavItem;