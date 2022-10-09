
import Item from './../Item/Item';

const ItemList = ({productos}) => {

    return (
        <div className="d-flex flex-wrap justify-content-center mt-4">
            {productos.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
}

export default ItemList