import { Link } from "react-router-dom"
import { CiShop } from "react-icons/ci";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
        <footer>
            <Link to="/" className="logo"><CiShop /></Link>
            <h2>SA Store</h2>
            <div className="social">
                <Link to="" className="social1"><PiInstagramLogoLight /></Link>
                <Link to="" className="social1"><CiLinkedin /></Link>
            </div>
        </footer>
    </div>
  )
}

export default Footer
