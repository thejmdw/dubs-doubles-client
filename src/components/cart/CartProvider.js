import React, { useState } from "react"


export const CartContext = React.createContext()

export const CartProvider = (props) => {
    const [ carts, setCarts ] = useState([])
    const [ cart, setCart ] = useState({})

    const createCart = (Cart) => {
        return fetch("http://localhost:8000/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(Cart)
         })
            .then(setCart(Cart))
            // .then()
    }
    
    const updateCart = (cart) => {
        return fetch(`http://localhost:8000/orders/${cart.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(cart)
         })
            .then(setCart(cart))
            // .then()
    }
    
    const getCart = () => {
        return fetch(`http://localhost:8000/profile/cart`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setCart)
    }

    const getCarts = () => {
        return fetch("http://localhost:8000/products?product_type=1", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setCarts)
    }
    
 
    

    return (
        <CartContext.Provider value={{ carts, cart, getCart, createCart, updateCart, getCarts }} >
            { props.children }
        </CartContext.Provider>

    )
}
