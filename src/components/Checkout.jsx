import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import { Link } from 'react-router-dom';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container_greets">
                <h1 className="main-title">Muchas gracias por tu compra!</h1>
                <h4>Tu orden es:</h4>
                <h3>{pedidoId}</h3>
                <img src="https://i.pinimg.com/originals/52/0e/52/520e5212080d0fe14d1d9d2e766889e5.gif" alt="" />
                <li><Link  to="/">Volver al Inicio</Link></li>
            </div>
        )
    }

  return (
    <div className="checkout_container">
        <div className='div_in_div'>
            <h1 className="main-title">Finalizar compra</h1>

            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <button className="enviar" type="submit">Comprar</button>
            </form>
    
        </div>
    </div>
  )
}

export default Checkout