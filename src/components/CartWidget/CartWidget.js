import cart from './img/cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom'

const CartWidget = ({ handleCollapse }) => {
    const { totalQuantity} = useContext(CartContext)

    return (
        <NavLink to='/cart' onClick={handleCollapse} className='text-decoration-none m-auto d-flex align-items-center'>
            <img src={cart} alt='Carrito' style={{width: 40}}/>
            <p className='fw-bold px-1 m-0 text-dark'>{totalQuantity} Items</p>
        </NavLink>        
    )
}

export default CartWidget