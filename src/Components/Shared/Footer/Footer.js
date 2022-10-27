import React from 'react';
import { GrLanguage } from "react-icons/gr"
import logo from '../../../assets/web-development.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-5 p-2 d-flex justify-content-center justify-content-md-between align-items-center bg-light footer-section'>
            <div className='d-none d-md-block ms-3'>
                <img src={logo} height={60} width={60} alt="img" />
                <span className='ms-3 fw-bold website-title'>Code <span className='title-style'>Hack</span></span>
            </div>

            <div className='fw-bold'>
                Copyright &copy; 2023
            </div>

            <div className='d-none d-md-block me-3'>
                <GrLanguage className='me-2' />
                <span className='fw-bold'>English</span>
            </div>
        </div>
    );
};

export default Footer;