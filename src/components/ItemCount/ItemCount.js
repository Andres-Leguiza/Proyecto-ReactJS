import { useState } from 'react'

const ItemCount = ({ stock, inicial, onAdd}) => {
  const [cantidad, setCantidad] = useState(inicial)

  const incrementar = () => {
    if(cantidad < stock) {
        setCantidad(cantidad+1)
    }
  }

  const decrementar = () => {
    if(cantidad > 1) {
        setCantidad(cantidad - 1)
    }     
  }
    return (
    <div className="d-flex justify-content-center">
        <button className="text-secondary border border-1 border-secondary" type="button" onClick={decrementar}>-</button>
        <input className="text-center" type="text" value={cantidad} disabled size="5"></input>
        <button className="text-secondary border border-1 border-secondary" type="button" onClick={incrementar}>+</button>
        <button className="ms-3 btn btn-light border border-2 fw-light" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
    )
  }

export default ItemCount