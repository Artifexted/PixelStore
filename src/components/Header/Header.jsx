import React from 'react';
import Logo from '../../img/pixelstore.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <nav className={`navbar ${styles.navbar} navbar-expand-lg navbar-light bg-light`}>
                <div className="container-fluid d-flex justify-content-between">
                    <NavLink className="navbar-brand" to="/">
                        <img className="logo" src={Logo} alt="logo de PixelStore" width="30" height="30" />
                        PixelStore
                    </NavLink>
                    <button 
                        className={`${styles.navbarToggler} navbar-toggler`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cat/mb">Motherboards</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cat/proce">Procesadores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cat/ram">Memorias RAM</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cat/video">Placas de Video</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className={styles.cart} to="/cart">
                        <button type="button" className="btn btn-outline-primary">
                            <CartWidget />
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
