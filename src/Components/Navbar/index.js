import { FaComments } from "react-icons/fa";
import './index.css'


const Navbar = () => {
    return (
        <>
        <div className='bgNav'>
            <div>
                <img className='logo' src = "https://res.cloudinary.com/dw6hgsfbk/image/upload/v1710338799/7426cf05ffe331b889b1459cd0005054_lxjtdg.jpg" alt = "logo" />
            </div>
            <div>
                <h1 className="navheading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Welcome to tea Talks With Manibalaji</h1>
            </div>
            <div>
                <FaComments className="icon" />
            </div>
        </div>
        </>
    )
}
export default Navbar