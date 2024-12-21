import React from 'react';
import '../../styles/headerFooter.css';

const Footer: React.FC = () => {
    return (
    <footer id="footer">
        <div id="copyright">
            <p>© Hotel App 2024</p>
        </div>
        <div className="icon">
            <p id="contact">Contact Us</p>
            <div className='email-info'>
                <i className='fas fa-envelope'>
                    <p>chen.yalun@hotmail.com</p>
                </i>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
