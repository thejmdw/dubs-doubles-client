import React, { useState } from "react"


export const ComboContext = React.createContext()

export const ComboProvider = (props) => {
    const [ combos, setCombos ] = useState([])
    const [ combo, setCombo ] = useState({})

    const createCombo = (combo) => {
        return fetch("http://localhost:8000/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(combo)
         })
            .then(setCombo(combo))
            // .then()
    }
    
    const updateCombo = (combo) => {
        return fetch(`http://localhost:8000/products/${combo.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(combo)
         })
            .then(setCombo(combo))
            // .then()
    }
    
    const getComboById = (id) => {
        return fetch(`http://localhost:8000/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            // .then(setfrie)
    }

    const getCombos = () => {
        return fetch("http://localhost:8000/products?product_type=3", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setCombos)
    }

    return (
        <ComboContext.Provider value={{ combo, combos, getCombos, createCombo, updateCombo, getComboById }} >
            { props.children }
        </ComboContext.Provider>

    )
}
