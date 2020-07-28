import React from 'react';
//import ButtonLink from './components/ButtonLink';
import Logo from '../../assests/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu(){
    console.log("Menu");
    return (
        <nav className="Menu">
            <a href="/">S
                <img className="Logo" src={Logo} alt="flixfli"/>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;