import React from 'react';
import Image from "next/image";
import FooterLogo from "../../asset/img/logo-white.svg";
import phone from "../../asset/img/phone.svg";
import mail from "../../asset/img/mail.svg";
import location from "../../asset/img/location.svg";
import facebook from "../../asset/img/facebook.svg";
import instagram from "../../asset/img/instagram.svg";
import linkedin from "../../asset/img/linkedin.svg";
import twitter from "../../asset/img/twitter.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns is-multiline ">
                <div className="column is-12-mobile is-4-tablet footer-column-first">
                    <a href="#"><Image src={FooterLogo} alt="" /></a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  .Lorem Ipsum </p>
                </div>
                <div className="column is-12-mobile is-4-tablet footer-column-two">
                    <div className="footer-menu-sec">
                        <h4>Quick Link</h4>
                        <ul>
                            <li><a href="#">Principle</a></li>
                            <li><a href="#">Founding team</a></li>
                            <li><a href="#">Water fest</a></li>
                            <li><a href="#">Contribute</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu-sec">
                        <h4>Quench Poverty</h4>
                        <ul>
                            <li><a href="#">Hydrate</a></li>
                            <li><a href="#">Water Delivery</a></li>
                            <li><a href="#">Quench Cali</a></li>
                            <li><a href="#">US SDG 6.1</a></li>
                        </ul>
                    </div>
                </div>
                <div className="column is-12-mobile is-4-tablet footer-column-three">
                    <ul>
                        <li><a href="tel:1234567890"><span className="contact-details-icon"><Image src={phone} alt="" /></span><span className="contact-details">1234567890</span></a></li>
                        <li><a href="mailto:Quench@gmail.com"><span className="contact-details-icon"><Image src={mail} alt="" /></span><span className="contact-details">Quench@gmail.com</span></a></li>
                        <li><a><span className="contact-details-icon"><Image src={location} alt="" /></span><span className="contact-details">A -789 Apple Avenue Nr post Offered Plaza US</span></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="is-12">
                        <p>Copyright © 2021 Quench Pvt. Ltd. All rights reserved.</p>
                        <ul className="social-icon">
                            <li><a href="#"><Image src={facebook} alt="" /></a></li>
                            <li><a href="#"><Image src={instagram} alt="" /></a></li>
                            <li><a href="#"><Image src={linkedin} alt="" /></a></li>
                            <li><a href="#"><Image src={twitter} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;