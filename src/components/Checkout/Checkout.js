import { useState, useContext, useRef } from "react"
import { CartContext } from './../../context/CartContext'
import { useNavigate } from "react-router-dom"
import { useCreateOrderInFirebase } from "../../services/firebase/firestore/orders"
import swal from "sweetalert"
import { ThreeBody } from '@uiball/loaders'

const Checkout = () => {
    
    const [loading, setLoading] = useState(false)
    const { clearCart } = useContext(CartContext)
    const { createOrder } = useCreateOrderInFirebase()
    const navigate = useNavigate()

    const name = useRef("")
    const lastName = useRef("")
    const telephone = useRef("")
    const email = useRef("")
    
    const buildOrder = (event) => {

        event.preventDefault()
        setLoading(true)
        
        const buyer = {
            name: name.current.value,
            lastName: lastName.current.value,
            telephone: telephone.current.value,
            email: email.current.value
        }

        createOrder(buyer).then(response => {
            if(response.result === 'success') {
                
                clearCart()

                swal({
                    title: "Muchas gracias por su compra!",
                    text:`Su numero de Orden es: ${response.orderId}`,
                    icon: "success",
                    dangerMode: true,
                })
        
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else{
                swal({
                    title: "Los siguientes productos no se encuentran en stock:",
                    text:`${Array.of(response.outOfStockItems.map(item => "- "+item.name+"\n"))}`,
                    icon: "warning",
                    dangerMode: true,
                })
            }  
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
        return (
            <div className='d-flex flex-column align-items-center mt-4'>
                <h1>Estamos procesando su orden.</h1>
                <ThreeBody size={35} speed={1.1} color="black"/>
            </div>
        )
    }

    const goHome = () => {
        navigate("/")
    }

    return (
        <form onSubmit={buildOrder} className="container mt-5">
            <h2 className="d-flex justify-content-center mb-5">Checkout</h2>
            <div className="input-group mb-4">
                <span className="input-group-text">Nombre y Apellido</span>
                <input type="text" ref={name} aria-label="Nombre" placeholder="Juan" className="form-control" required />
                <input type="text" ref={lastName} aria-label="Apellido" placeholder="Perez" className="form-control" required />
            </div>
            <div className="input-group mb-4">
                <span className="input-group-text">Telefono</span>
                <input type="tel" ref={telephone} aria-label="Telefono" placeholder="11-1234-5678" className="form-control" required />
            </div>
            <div className="input-group mb-4">
                <span className="input-group-text">Email</span>
                <input type="email" ref={email} aria-label="Email" placeholder="juan.perez@gmail.com" className="form-control" required />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-success">Completar Compra</button>
                <button type="button" onClick={goHome} className="btn btn-outline-info ms-2" title="Seguir Comprando">Seguir Comprando</button>
            </div>
        </form>
    )
}

export default Checkout