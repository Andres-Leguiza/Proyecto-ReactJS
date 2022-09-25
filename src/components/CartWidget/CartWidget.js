import cart from './img/cart.png'

const CartWidget = () => {
    return (
        <picture className='position-relative'>
            <img src={cart} alt='Carrito' />
            <p className='fw-bold px-1 m-0 text-dark border border-dark border-1 rounded-circle position-absolute bottom-0 end-0' style={{fontSize: '14px'}}>10</p>
        </picture>
    )
}

export default CartWidget