import { useState } from 'react'

const ItemCount = ({ stock, initial = 1, onAdd}) => {
  const [quantity, setQuantity] = useState(initial)

  const incrementar = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementar = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }     
  }
    return (
    <div className="d-flex justify-content-center">
        <button className="text-secondary border border-1 border-secondary" type="button" onClick={decrementar}>-</button>
        <input className="text-center" type="text" value={quantity} disabled size="5" title="Cantidad"></input>
        <button className="text-secondary border border-1 border-secondary" type="button" onClick={incrementar}>+</button>
        <button className="ms-3 btn btn-sm btn-light border border-2 fw-light" type="button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
    )
  }

export default ItemCount