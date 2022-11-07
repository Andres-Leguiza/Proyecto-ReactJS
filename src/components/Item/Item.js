
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) => {

    return (
        <article className="card mx-3 mt-4 shadow-lg bg-light" style={{width: '380px'}}>
            <picture className='d-flex' style={{height: '380px'}}>
                <img src={process.env.PUBLIC_URL + img} alt={name} className="d-block img-fluid h-100 w-100 rounded-top" />
            </picture>
            <div className="card-body pt-3 d-flex flex-column">
                <h5 className="card-title">
                    {name}
                </h5>
                <section>
                    <p className="card-text">
                        Precio: ${price}
                    </p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} style={{fontWeight: 500}} 
                        className="btn btn-sm btn-light border mt-4 d-flex flex-column">Ver detalles</Link>
                </footer>
            </div>
        </article>
    )
}

export default Item