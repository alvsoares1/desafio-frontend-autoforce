import React from 'react'
import bmw_logo from '../assets/bmw.svg'
import dealerLogo from '../assets/dealerLogoBlack.png'
import '../themes/header.css'


const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='container'>
                <div className='header'>
                    <div className='header-left'>
                        <img src={dealerLogo} alt="Dealer Logo" className='dealer-logo' />
                        <div className='separator' />
                        <img src={bmw_logo} alt="BMW Logo" className='bmw-logo' />
                    </div>
                    <div className='header-right'>
                        <button className='call-button'>
                            <img src="https://img.icons8.com/?size=100&id=78382&format=png&color=ffffff" alt="telefone" className='icon' />
                            LIGUE AGORA
                        </button>
                        <button className='whatsapp-button'>
                            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=ffffff" alt="whatsapp" className='icon' />
                            WHATSAPP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;