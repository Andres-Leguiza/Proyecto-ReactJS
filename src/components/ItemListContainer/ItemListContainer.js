
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductos, getProductosPorCategoria } from '../../asyncMock'
import ItemList from './../ItemList/ItemList';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoriaId ? getProductosPorCategoria : getProductos
       
        asyncFunction(categoriaId).then(response => {
            setProductos(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoriaId])

    if(loading) {
        return <h1 className="d-flex justify-content-center mt-4">Cargando Productos...</h1>
    }

    return (
        <div>
            <h1 className="d-flex justify-content-center mt-4">Nuestros Productos</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer