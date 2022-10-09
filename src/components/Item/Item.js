
import { Link } from 'react-router-dom'

const Item = ({id, nombre, img, precio }) => {

    return (
        <article className="card mx-3 mt-4" style={{width: '380px'}}>
            <picture className='d-flex' style={{height: '300px'}}>
                <img src={process.env.PUBLIC_URL + img} alt={nombre} className="d-block img-fluid mx-auto mh-100 mw-100" />
            </picture>
            <div className="card-body bg-light pt-3 d-flex flex-column">
                <h5 className="card-title">
                    {nombre}
                </h5>
                <section>
                    <p className="card-text">
                        Precio: ${precio}
                    </p>
                </section>           
                <Link to={`/item/${id}`} className="btn btn-light mt-4">Ver detalles</Link>
            </div>
        </article>
    )
}

export default Item