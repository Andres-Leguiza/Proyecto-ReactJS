import { useState, useEffect } from 'react'
import { getProductosPorId } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    const { productoId } = useParams()

    useEffect(() => {
        getProductosPorId(productoId).then(response => {
            setProducto(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productoId])

    if(loading) {
        return <h1 className='d-flex justify-content-center mt-4'>Cargando Producto...</h1>
    }

    return(
        <div className="d-flex justify-content-center mt-4">
            <ItemDetail  {...producto} />
        </div>
    )
}

export default ItemDetailContainer