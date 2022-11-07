import { useState, useEffect, createContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const totalQty = getTotalQuantity()
        setTotalQuantity(totalQty)
    }, [cart]) //eslint-disable-line

    useEffect(() => {
        const totalPrice = getTotalPrice()
        setTotalPrice(totalPrice)
      }, [cart]) //eslint-disable-line

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(product => {
                if(product.id === productToAdd.id) {
                    const productUpdated = {
                        ...product,
                        quantity: productToAdd.quantity
                    }

                    return productUpdated
                } else {
                    return product
                }
            })

            setCart(cartUpdated)
        }
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(product => product.id !== id)
        setCart(cartWithoutProduct)
    }

    const getTotalQuantity = () => {
        let sumQty = 0

        cart.forEach(product => {
            sumQty += product.quantity
        })

        return sumQty
    }

    const getTotalPrice = () => {
        let sumPrice = 0
  
        cart.forEach(product => {
            sumPrice += product.price
        })
  
        return sumPrice
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(product => product.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, totalQuantity, totalPrice, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}