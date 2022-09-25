import CartWidget from '../CartWidget/CartWidget'
import logoUtiles from './img/utiles.png'

const NavBar = () => {
    return (
        <nav class="navbar sticky-top navbar-light bg-light">
            <div class="container-fluid justify-content-around">
                <picture>
                    <img src={logoUtiles} class="img-fluid rounded-top" alt="Logo Libreria" />
                </picture>
                <button type='button' className='btn btn-light'>Lapices/Biromes</button>
                <button type='button' className='btn btn-light'>Cuadernos</button>
                <button type='button' className='btn btn-light'>Mochilas</button>
                <button type='button' className='btn btn-light'>Cartucheras</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar