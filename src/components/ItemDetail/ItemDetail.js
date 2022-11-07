import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, img, name, price: price*quantity, quantity
        }
        addItem(productToAdd)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <article className="card mx-3 mt-4 shadow-lg bg-light" style={{width: '380px'}}>
            <picture className='d-flex' style={{height: '380px'}}>
                <img src={process.env.PUBLIC_URL + img} alt={name} className="d-block img-fluid h-100 w-100 rounded-top" />
            </picture>
            <div className="card-body pt-3">
                <h5 className="card-title">
                    {name}
                </h5>
                <section>
                    <p className="card-text">
                        Precio: ${price}
                    </p>
                    <p className="card-text text-uppercase">
                        Categoria: {category}
                    </p>
                    <p className="card-text">
                        Descripcion: {description}
                    </p>
                    <p className="card-text">
                        Stock Disponible: {stock}
                    </p>
                </section>
                <footer className="pt-4">
                    {  
                    stock === 0 ?
                    <span className="d-flex flex-column"><button type="button" disabled className='btn btn-danger'>Sin Stock</button></span> :  
                    !isInCart(id) ?
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} /> : 
                        <Link to='/cart' className='btn btn-sm btn-light border border-2 fw-light d-flex flex-column'>Finalizar compra</Link>
                    }
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail