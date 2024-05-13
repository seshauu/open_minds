
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Link} from 'react-scroll'
import './index.css'


const Footer = () => {
    return (
        <>
        <div className='footer_bg'>
            <div>
            <div>
                <img src = "https://res.cloudinary.com/dw6hgsfbk/image/upload/v1710940404/123-01_siohnb.png" className='logo' alt = "logo" />
            </div>
            <div>
               <p className="copy_text">©2023 All Rights Reserved.</p>
            </div>
            </div>
            <div>
                <h1 className="heading_links">Quick Links</h1>
                <div className="quick_links">
                    <Link className="links" id = "home">Home</Link>
                    <Link className="links">About</Link>
                    <Link className="links">Portfolio</Link>
                    <Link className="links">Skills</Link>
                    <Link className="links"> Contact</Link>
                </div>
            </div>
            <div className="social_media_con">
                <h1 className="stay_connected">Stay Connected</h1>
                <div className="social_con">
                    <div className="bg_icon"><FaInstagram className="icon" /></div>
                    <div className="bg_icon"><FaFacebookF  className="icon" /></div>
                    <div className="bg_icon"><FaTwitter className="icon" /></div>
                    <div className="bg_icon">< FaYoutube  className="icon" /></div>
                    <div className="bg_icon"><FaLinkedin  className="icon" /></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer