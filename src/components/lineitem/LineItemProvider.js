import React, { useState } from "react"


export const LineItemContext = React.createContext()

export const LineItemProvider = (props) => {
    const [ lineItems, setLineItems ] = useState([])
    const [ lineItem, setLineItem ] = useState({})

    const createLineItem = (product) => {
        return fetch("http://localhost:8000/profile/cart", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(product)
         })
            // .then(setLineItem(productId))
            // .then()
    }
    
    const updateLineItem = (LineItem) => {
        return fetch(`http://localhost:8000/products/${LineItem.id}`, {
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
        return fetch(`http://localhost:8000/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setLineItem)
    }

    const getLineItems = () => {
        return fetch("http://localhost:8000/products?product_type=1", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setLineItems)
    }
    
    // const getLineItemTypes = () => {
    //     return fetch("http://localhost:8000/LineItemtypes", { 
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("dd_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setLineItemTypes)
    // }
 
    

    return (
        <LineItemContext.Provider value={{ lineItems, lineItem, getLineItems, createLineItem, updateLineItem, getLineItemById }} >
            { props.children }
        </LineItemContext.Provider>

    )
}
