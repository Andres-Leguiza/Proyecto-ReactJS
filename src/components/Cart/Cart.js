import { CartContext }from '../../context/CartContext'
import { useContext } from "react"
import CartItem from './../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {

    const  { cart, totalQuantity, totalPrice, clearCart } = useContext(CartContext)

    return (
        <>
            {
                totalQuantity > 0 ?
                <>
                    <div className="container mt-5">
                        <div className="d-flex justify-content-start align-items-center">
                            <h1>Mi Carrito</h1>
                            <h5 className="ms-3 mt-2">
                                {totalQuantity} Items
                            </h5>
                        </div>
                        <div>
                            <Link to="/" className="text-dark fw-bold" title="Seguir Comprando">
                                Seguir Comprando
                            </Link>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-outline-danger me-2" onClick={clearCart} title="Limpiar Carro">Limpiar Carro</button>
                            <Link to="/checkout" className="btn btn-outline-primary" title="Confirmar Compra">Confirmar Compra</Link>
                        </div>
                    {
                        cart.map(product => (
                            <CartItem key={product.id} product={product}/>
                        ))
                        
                    }
                    </div>
                    <div className='container d-flex justify-content-end pt-5'>
                        <h4>Precio Total: ${totalPrice}</h4>
                    </div>
                </> :
                <div className="container d-flex flex-column align-items-center mt-5">
                    <h4 className="pt-5">Tu carrito esta vacio. Puedes agregar items desde el siguiente link</h4>
                    <Link to="/" className="text-dark fw-bold" title="Comprar Productos">Comprar Productos</Link>
                </div>
            }
        </>
    )
}

export default Cart