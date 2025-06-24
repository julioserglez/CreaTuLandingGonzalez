import "./navbar.css";
import logoShop from "../assets/logoonlineshop.jpg";
import CartWidget from "./CartWidget";

const  NavBar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={logoShop} alt="Logo" />

        <ul className="categories">
            <li>Teclacos</li>
            <li>Mouse</li>
            <li>Auriculares</li>
            <li>Contacto</li>
        </ul>

        <CartWidget />
    </div>
    

  )
}

export default NavBar;