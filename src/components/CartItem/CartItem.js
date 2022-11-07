

import { CartContext }from '../../context/CartContext'
import { useContext } from "react"
import deleteIcon from './img/delete.png'

const CartItem = ({ product }) => {
    
    const  { removeItem } = useContext(CartContext)
    
    return (
        <article className="d-flex p-3 mx-3 mt-4 shadow-lg bg-light">
            <picture className="d-flex align-items-center" style={{height: '80px'}}>
                <img src={process.env.PUBLIC_URL + product.img} alt={product.name} width="80" className="d-block img-fluid pe-2" />
            </picture>
            <section className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                    {product.name}
                </h5>
                <h5 className="mx-2">Cant: {product.quantity}</h5>
                <h5 className="card-text mx-2">Precio: ${product.price}</h5>
                <button type="button" className="btn me-2" onClick={() => removeItem(product.id)}>
                    <img src={deleteIcon} width="32" alt="Eliminar Item" />
                </button>
            </section>
        </article>
    )
}

export default CartItem