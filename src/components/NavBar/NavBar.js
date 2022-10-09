import CartWidget from '../CartWidget/CartWidget'
import logoUtiles from './img/utiles.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid justify-content-around">
                <NavLink to='/'>
                    <picture>
                        <img src={logoUtiles} className="img-fluid rounded-top" alt="Logo Libreria" />
                    </picture>
                </NavLink>
                
                <NavLink to={'/categoria/lapiceslapiceras'} type='button' className='btn btn-light fs-5'>Lapices/Biromes</NavLink>
                <NavLink to={'/categoria/cuadernos'} type='button' className='btn btn-light fs-5'>Cuadernos</NavLink>
                <NavLink to={'/categoria/mochilas'} type='button' className='btn btn-light fs-5'>Mochilas</NavLink>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar