import React, { useState } from "react"


export const BurgerContext = React.createContext()

export const BurgerProvider = (props) => {
    const [ burgers, setBurgers ] = useState([])
    const [ burger, setBurger ] = useState({})
    const [ toppings, setToppings ] = useState([])
    const [ toppingTypes, setToppingTypes ] = useState([])

    const createBurger = (burger) => {
        return fetch("http://localhost:8000/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(burger)
         })
            .then(setBurger(burger))
            // .then()
    }
    
    const updateBurger = (Burger) => {
        return fetch(`http://localhost:8000/products/${Burger.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(Burger)
         })
            .then(setBurger(Burger))
            // .then()
    }
    
    const getBurgerById = (id) => {
        return fetch(`http://localhost:8000/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setBurger)
    }

    const getBurgers = () => {
        return fetch("http://localhost:8000/products?product_type=1", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setBurgers)
    }
    
    const getToppingTypes = () => {
        return fetch("http://localhost:8000/toppingtypes", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setToppingTypes)
    }

    const getToppings = () => {
        return fetch(`http://localhost:8000/toppings`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setToppings)
    }
    const getToppingsByType = (id) => {
        return fetch(`http://localhost:8000/toppings?topping_type=${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setToppings)
    }
    
    // const getBurgerTypes = () => {
    //     return fetch("http://localhost:8000/Burgertypes", { 
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("dd_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setBurgerTypes)
    // }
 
    

    return (
        <BurgerContext.Provider value={{ burgers, burger, toppings, toppingTypes, getBurgers, createBurger, updateBurger, getBurgerById, getToppings, getToppingTypes, getToppingsByType }} >
            { props.children }
        </BurgerContext.Provider>

    )
}
