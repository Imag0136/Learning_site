import React from 'react';
import styles from "../styles/NavBar.module.css"
import NavItem from "./NavItem";

const NavBar = () => {
    const selectedLink = (isActive) => {
        return styles.link + " " + (isActive ? styles.selected : styles.unselected)
    }

    return (
        <nav className={styles.navbar}>
            <ul>
                <NavItem href="/" title="Main"/>
                <NavItem href="/OperatorPrecedence" title="Приоритет операторов"/>
                <NavItem href="/LogicalOperators" title="Логические операторы"/>
                <NavItem href="/Loops" title="Циклы"/>
                <NavItem href="/useState" title="useState"/>
            </ul>
        </nav>
    );
};

export default NavBar;