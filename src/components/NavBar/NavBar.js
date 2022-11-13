import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import logoUtiles from './img/utiles.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect, useContext, useRef } from "react"
import { CartContext } from './../../context/CartContext';
import { db } from './../../services/firebase/index';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    const navbarToggler = useRef("")

    useEffect(() => {
        const collectionRef = query(collection(db, 'categories'), orderBy('order')) 
    
        getDocs(collectionRef).then(response => {
    
          const categoriesAdapted = response.docs.map(doc => {
            const data = doc.data()
            const id = doc.id
    
            return { id, ...data}
          })
          setCategories(categoriesAdapted)
        }).catch(error => {
            console.log(error)
        })
      }, [])

    const collapseOnClick = () => {
        navbarToggler.current.classList.remove('show')
    }

    const { totalQuantity } = useContext(CartContext)

    return (
            <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
                <div className="container">
                    <NavLink to='/' className="m-auto" onClick={collapseOnClick}>
                        <picture>
                            <img src={logoUtiles} className="img-fluid ms-4" alt="Logo Libreria" />
                        </picture>
                    </NavLink>
                    <button className="navbar-toggler m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
                        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" ref={navbarToggler} id="navbarToggler">   
                        {
                            categories.map(category => (
                                <NavLink key={category.id} to={`/category/${category.slug}`} type='button' onClick={collapseOnClick} 
                                className='nav-link btn btn-sm btn-light border fs-5 fw-500 px-2 py-1 my-1'>{category.label}</NavLink>
                                ))
                            }
                    </div>
                        {
                            totalQuantity > 0 && <CartWidget />
                        }
                </div>
            </nav>
    )
}

export default NavBar