import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Hamburger from "../../public/hamburger.png";
import Sidebar from "./sidebar.js";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <nav className={styles.nav}>
                <div className={styles.links}>
                    <a className={styles.button} href="/login" onClick={console.log('aeawlkjeakljealkje')}>AUTENDI</a>
                    <a className={styles.button} onClick={console.log(toggle)}><Image src={Hamburger} alt="Menu"/></a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar