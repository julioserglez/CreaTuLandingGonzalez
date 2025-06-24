import "./CartWidget.css";
import carrito from "../assets/carrito.jpg";

const CartWidget = () => {
  return (
    <div className="carritowidget">
        <img className="carrito" src={carrito} alt="Carrito" />
        <h4 className="numerito">6</h4>
    </div>

  )
}

export default CartWidget