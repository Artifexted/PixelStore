import React from 'react';
import Logo from '../../img/pixelstore.png';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>Inicio</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/cat/mb'>Motherboards</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/cat/proce'>Procesadores</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/cat/ram'>Memorias RAM</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/cat/video'>Placas de Video</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/item/:itemID'>Detalle</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <a className='navbar-brand' href='index.html'><img className='logo' src={Logo} alt='logo de PixelStore' /> PixelStore</a>

                    <NavLink className='nav-link' to='/cart'>
                        <button type='button' className='col-1 btn border-0 p-0'>
                            <CartWidget />
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
