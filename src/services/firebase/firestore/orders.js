import { collection, getDocs, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '..'; 
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const useCreateOrderInFirebase = () => {

    const { cart, totalPrice } = useContext(CartContext)

    const createOrder = async (buyerData) => {
        try {
            const orderObj = {
                buyer: buyerData,
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: totalPrice
            }
            
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, orderObj)
                return {
                    result: 'success', orderId: orderAdded.id
                }
            } else {
                return {
                    result: 'outOfStock', outOfStockItems: outOfStock
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    return {
        createOrder
    }
}