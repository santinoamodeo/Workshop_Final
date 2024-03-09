import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    
        <div className='carrito_container'>
            <div className='cuadrante_carrito'>
                <div className='aas'>
                <h1 className="main-title">Carrito</h1>    
                </div>
                

                {   
                    carrito.map((prod) => (
                        <div className='datos1' key={prod.id}>
                            <br />
                            <h3>{prod.titulo}</h3>
                            <p>Cantidad: {prod.cantidad}</p>
                            <p>Precio unitario: ${prod.precio}</p>
                            <p>Precio total: ${prod.precio * prod.cantidad}</p>
                            <br />
                        </div>
                    ))
                }

                {  
                    carrito.length > 0 ?
                    <div className='datos2'>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <div className='button_container'>
                            <button className='vaciar' onClick={handleVaciar}>Vaciar</button>
                            <Link className='finalizar_compra' to="/checkout">Finalizar Compra</Link>
                        </div>
                    </div> :
                    <h2>El carrito está vacío aún! Llenalo!</h2>
                }
            </div>        
        </div>
    
  )
}

export default Carrito