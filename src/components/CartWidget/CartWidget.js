import cart from './img/cart.png'

const CartWidget = () => {
    return (
        <div className='d-flex'>
            <picture>
                <img src={cart} alt='Carrito' />
            </picture>
            <p className='fw-bold px-1 m-0 text-dark d-flex align-items-center'>10 items</p>
        </div>
        
    )
}

export default CartWidget