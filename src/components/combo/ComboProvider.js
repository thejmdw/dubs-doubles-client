import React, { useState } from "react"


export const ComboContext = React.createContext()

export const ComboProvider = (props) => {
    const [ combos, setCombos ] = useState([])
    const [ combo, setCombo ] = useState({})

    const createCombo = (combo) => {
        return fetch("https://dubs-doubles.herokuapp.com/products", {
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
        return fetch(`https://dubs-doubles.herokuapp.com/products/${combo.id}`, {
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
        return fetch(`https://dubs-doubles.herokuapp.com/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setCombo)
    }

    const getCombos = () => {
        return fetch("https://dubs-doubles.herokuapp.com/products?product_type=3", { 
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
