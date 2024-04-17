import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap 
import styles from './Navbar.module.css'; 
import logo from '../../assets/logo.png';
import { Cartwidget } from '../CartWidget/CartWidget';

export const Navbar = () => {
    return (
        <header className={`header navbar navbar-expand-lg navbar-light bg-light ${styles.header}`}>
            <img src={logo} alt="Logo" className={styles.navbar__logo} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Caramelos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Chocolates</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Alfajores</a>
                    </li>
                </ul>
            </div>
            <Cartwidget />
        </header>
    );
};

