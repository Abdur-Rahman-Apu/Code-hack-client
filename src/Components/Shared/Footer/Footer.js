import React from 'react';
import { GrLanguage } from "react-icons/gr"

const Footer = () => {
    return (
        <div className='mt-5 p-2 d-flex justify-content-between align-items-center bg-light'>
            <div>
                <img src={"web-development.png"} height={60} width={60} alt="img" />
                <span className='ms-3'>Code Hack</span>
            </div>

            <div>
                Copyright &copy; 2022
            </div>

            <div>
                <GrLanguage className='me-2' />
                <span>English</span>
            </div>
        </div>
    );
};

export default Footer;