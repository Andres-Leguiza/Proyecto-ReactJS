import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import { ThreeBody } from '@uiball/loaders'

const ItemDetailContainer = () => {

    const { productId } = useParams()
    const getProductById = () => getProduct(productId)
    const { data: product, error, loading } = useAsync(getProductById, [productId])

    if(loading) {
        return (
            <div className='d-flex flex-column align-items-center mt-4'>
                <h1>Cargando Producto...</h1>
                <ThreeBody size={35} speed={1.1} color="black"/>
            </div>
        )
    }

    if(error) {
        return <h1 className='d-flex justify-content-center mt-4'>Hubo un error al cargar el producto.</h1>
    }

    return(
        <div className="d-flex justify-content-center my-4">
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer