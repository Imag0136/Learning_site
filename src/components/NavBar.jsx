import React from 'react';
import styles from "../styles/NavBar.module.css"
import NavItem from "./NavItem";

const NavBar = ({children}) => {
    const selectedLink = (isActive) => {
        return styles.link + " " + (isActive ? styles.selected : styles.unselected)
    }

    return (
        <nav className={styles.navbar}>
            <ul>
                <NavItem href="/" title="Main"/>
                <NavItem href="/useState" title="useState"/>
                <NavItem href="/useEffect" title="useEffect"/>
            </ul>
        </nav>
    );
};

export default NavBar;