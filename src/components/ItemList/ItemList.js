
import Item from './../Item/Item';

const ItemList = ({products}) => {

    return (
        <div className="d-flex flex-wrap justify-content-center mt-4">
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}

export default ItemList