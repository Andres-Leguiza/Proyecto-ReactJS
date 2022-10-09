import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, nombre, img, categoria, descripcion, precio, stock }) => {

    const handleOnAdd = (cantidad) => {
        const productToAdd = {
            id, nombre, precio, cantidad
        }
        console.log(productToAdd)
    }

    return (
        <article className="card mx-3 mt-4" style={{width: '380px'}}>
            <picture className='d-flex' style={{height: '300px'}}>
                <img src={process.env.PUBLIC_URL + img} alt={nombre} className="d-block img-fluid mx-auto mh-100 mw-100" />
            </picture>
            <div className="card-body bg-light pt-3">
                <h5 className="card-title">
                    {nombre}
                </h5>
                <section>
                    <p className="card-text">
                        Precio: ${precio}
                    </p>
                    <p className="card-text text-uppercase">
                        Categoria: {categoria}
                    </p>
                    <p className="card-text">
                        Descripcion: {descripcion}
                    </p>
                    <p className="card-text">
                        Stock Disponible: {stock}
                    </p>
                    <ItemCount onAdd={handleOnAdd} stock={stock} inicial={1} />
                </section>
            </div>
        </article>
    )
}

export default ItemDetail