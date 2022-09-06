import React from 'react';
import Logo from '../img/pixelstore.png';
import CartWidget from './CartWidget';

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
                                <a className='nav-link' href='./index.html'>Inicio</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='./index.html'>Tienda</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='./index.html'>Nosotros</a>
                            </li>
                        </ul>
                    </div>
                    
                    <a className='navbar-brand' href='index.html'><img className='logo' src={Logo} alt='logo de PixelStore' /> PixelStore</a>

                    <button type='button' className='col-1 btn border-0 p-0'>
                        <CartWidget />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;