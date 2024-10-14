import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="company-information">
                <p>NEXTDAY WILDFIRE PREDICTION SYSTEM</p>
                <p>USYD</p>
                <p>COMP5703 Capstone Project</p>
            </div>
            <div className="footer-content">
                © {year} NextDay Wildfire Prediction System. All Rights Reserved.
            </div>
            <div className="group-information">
                <p>Group CS53-1</p>
                <ul>
                    <li>Guanfeng Cai (510010458)</li>
                    <li>Sangyu Shi (500033689)</li>
                    <li>Chuncheng Liao (530115230)</li>
                    <li>Yilin Chen (500013544)</li>
                    <li>Xinyuan Du (500044733)</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
