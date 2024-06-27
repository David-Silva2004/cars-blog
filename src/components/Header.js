import React from 'react';
import '../assets/css/header.css';

function Header() {
    return (
        <div class="Header">
            <hr></hr>
            <div class="infos-header">
                <hr></hr>
                <a href='#Home'>Home</a>
                <hr></hr>
                <a href='#Destaques'>Destaques</a>
                <hr></hr>
                <a href='#Sobre'>Sobre</a>
                <hr></hr>
            </div>
            <hr></hr>
        </div>
    );
}

export default Header;