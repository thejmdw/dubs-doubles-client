import React, { useState, useContext } from "react"
import { CartContext } from "../cart/CartProvider.js"

export const LineItemContext = React.createContext()

export const LineItemProvider = (props) => {
    const [ lineItems, setLineItems ] = useState([])
    const [ lineItem, setLineItem ] = useState({})
    const [ lineItemToppingObjs, setLineItemToppingObjs ] = useState([])
    const { cart, getCart } = useContext(CartContext)

    const createLineItem = (product) => {
        return fetch("https://dubs-doubles.herokuapp.com/profile/cart", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(product)
         })
            // .then(setLineItem(productId))
            .then(getCart)
    }
    
    const deleteLineItem = (id) => {
        return fetch(`https://dubs-doubles.herokuapp.com/lineitems/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(id)
         })
            .then(getCart)
    }
    const deleteLineItemTopping = (id) => {
        return fetch(`https://dubs-doubles.herokuapp.com/lineitemtoppings/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(id)
         })
            // .then(setLineItem(productId))
            // .then()
    }
    
    const updateLineItem = (LineItem) => {
        return fetch(`https://dubs-doubles.herokuapp.com/products/${LineItem.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(LineItem)
         })
            .then(setLineItem(LineItem))
            // .then()
    }
    
    const getLineItemById = (id) => {
        return fetch(`https://dubs-doubles.herokuapp.com/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setLineItem)
    }

    const getLineItems = () => {
        return fetch("https://dubs-doubles.herokuapp.com/lineitems", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setLineItems)
    }

    const getLineItemToppings = () => {
        return fetch("https://dubs-doubles.herokuapp.com/lineitemtoppings", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setLineItemToppingObjs)
    }
    
    // const getLineItemTypes = () => {
    //     return fetch("https://dubs-doubles.herokuapp.com/LineItemtypes", { 
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("dd_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setLineItemTypes)
    // }
 
    

    return (
        <LineItemContext.Provider value={{ lineItems, lineItem, lineItemToppingObjs, getLineItemToppings, deleteLineItem, deleteLineItemTopping, getLineItems, createLineItem, updateLineItem, getLineItemById }} >
            { props.children }
        </LineItemContext.Provider>

    )
}
