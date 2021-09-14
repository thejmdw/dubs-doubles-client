import React, { useState } from "react"


export const FriesContext = React.createContext()

export const FriesProvider = (props) => {
    const [ fries, setFries ] = useState([])
    const [ fry, setFry ] = useState({})

    const createFry = (fry) => {
        return fetch("http://localhost:8000/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(fry)
         })
            .then(setFry(fry))
            // .then()
    }
    
    const updateFry = (fry) => {
        return fetch(`http://localhost:8000/products/${fry.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(fry)
         })
            .then(setFry(fry))
            // .then()
    }
    
    const getFryById = (id) => {
        return fetch(`http://localhost:8000/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            // .then(setfrie)
    }

    const getFries = () => {
        return fetch("http://localhost:8000/products?product_type=2", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setFries)
    }
    
    // const getfrieTypes = () => {
    //     return fetch("http://localhost:8000/frietypes", { 
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("dd_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setfrieTypes)
    // }
 
    

    return (
        <FriesContext.Provider value={{ fries, fry, getFries, createFry, updateFry, getFryById }} >
            { props.children }
        </FriesContext.Provider>

    )
}