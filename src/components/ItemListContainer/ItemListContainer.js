import { useParams } from 'react-router-dom'
import ItemList from './../ItemList/ItemList';
import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'
import { ThreeBody } from '@uiball/loaders'

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const getProductsWithCategory = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if(loading) {
        return (
            <div className='d-flex flex-column align-items-center mt-4'>
                <h1>Cargando Productos...</h1>
                <ThreeBody size={35} speed={1.1} color="black"/>
            </div>
        )
    }

    if(error) {
        return <h1 className="d-flex justify-content-center mt-4">Hubo un error al cargar los productos.</h1>
    }

    return (
        <div className="mb-5">
            <h1 className="d-flex justify-content-center mt-4">Nuestros Productos</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer