import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../themes/footer.css";
import dealerLogo from '../assets/dealerLogoWhite.png';
import autoforceLogo from '../assets/autoforceLogo.png';
import pageButtom from '../assets/pageButtom.png';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const Footer = () => {
    const [companys, setCompany] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/company')
            .then((response) => {
                setCompany(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Não foi possível carregar os dados.");
                setLoading(false);
            });
    }, []);

    const formatPhoneNumber = (phone) => {
        if (!phone) return '';
        const cleanNumber = phone.replace(/\D/g, '');
        if (cleanNumber.length === 11) {
            return `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(2, 7)}-${cleanNumber.slice(7)}`;
        }
        if (cleanNumber.length === 10) {
            return `(${cleanNumber.slice(0, 2)}) ${cleanNumber.slice(2, 6)}-${cleanNumber.slice(6)}`;
        }
        return phone;
    };

    const renderCompanyInfo = () => {
        if (companys.length === 0) return null;

        const company = companys[0];
        return (
            <>
                <p>
                    <strong>Razão Social:</strong> {company.company_name}
                </p>
                <p>
                    <strong>CNPJ:</strong> {company.cnpj}
                </p>
                <p>
                    <strong>Endereço Matriz:</strong> {company.address} - <a href="https://www.google.com/maps?sca_esv=4fbe7c869920a6f3&rlz=1C1GCEA_enBR1133BR1133&output=search&q=localiza%C3%A7%C3%A3o+autoforce&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTlk_BnclDEVJ373ohNdpcnXFLzr7w9dCBMoCaP0cZvATLWiBzI2PLNnLPAq-JRFCegnAb_dLiTVsJcUO24dvIZgku-0uHzGuVEfOTjzIIYy3fnWxlOpzJ6fG7-fVOHgZUYFmgH0Sn5VKlV75j7dAE4olLxVeKu-sJ0vDfJjOVDr3nMD_9Q&entry=mc&ved=1t:200715&ictx=111" target="_blank" rel="noopener noreferrer">Ver mapa</a>
                </p>
                <p>
                    <strong>Telefone:</strong> {formatPhoneNumber(company.phone)} ou {formatPhoneNumber(company.whatsapp)}
                </p>
                <div>
                    <div className="shared-buttons">
                    <h4>Compartilhe: </h4>
                        <FacebookShareButton url={"http://localhost:3000/"} title={"Venha conferir nosso produto"}>
                            <FacebookIcon size={30} round />
                        </FacebookShareButton>

                        <TwitterShareButton url={"http://localhost:3000/"} title={"Venha conferir nosso produto"}>
                            <TwitterIcon size={30} round />
                        </TwitterShareButton>

                        <WhatsappShareButton url={"http://localhost:3000/"} title={"Venha conferir nosso produto"}>
                            <WhatsappIcon size={30} round />
                        </WhatsappShareButton>
                    </div>
                </div>
            </>
        );
    };

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer">
                    <div className="footer-header">
                        <div className="footer-header-left">
                            <img src={dealerLogo} alt="Dealer Logo" className="footer-header-left-logo" />
                        </div>
                        <div className="footer-header-right">
                            <h2 className="footer-header-right-title">SIGA-NOS:</h2>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img
                                        src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
                                        alt="Instagram"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img
                                        src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <img
                                        src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                                        alt="YouTube"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-body">{renderCompanyInfo()}</div>

                    <div className="footer-footer">
                        <a href="https://site.autoforce.com/" target="_blank" rel="noopener noreferrer">
                            <img src={autoforceLogo} alt="autoforce logo" className='autoforceLogo' />
                        </a>
                        <p>
                            © Copyright 2021 - AutoForce - Todos os direitos reservados
                            <br />
                            Confira a nossa <a href="#">Política de privacidade</a>.
                        </p>
                    </div>
                </div>
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <img src={pageButtom} alt="Voltar ao topo" />
                </button>
            </div>
        </div>
    );
};

export default Footer;
