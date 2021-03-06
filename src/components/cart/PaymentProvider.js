import React, { useState } from "react"


export const PaymentContext = React.createContext()

export const PaymentProvider = (props) => {
    const [ payments, setPayments ] = useState([])
    const [ payment, setPayment ] = useState({})
    const [ cartPayment, setCartPayment ] = useState(0)

    const createPayment = (payment) => {
        return fetch("https://dubs-doubles.herokuapp.com/paymenttypes", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(payment)
         })
            .then(setPayment(payment))
            // .then()
    }
    
    const getPayments = () => {
        return fetch(`https://dubs-doubles.herokuapp.com/paymenttypes`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setPayments)
    }

    const deletePayment = (id) => {
        return fetch(`https://dubs-doubles.herokuapp.com/paymenttypes/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(id)
         })
            

    }
    
 
    

    return (
        <PaymentContext.Provider value={{ payments, payment, getPayments, createPayment, cartPayment, setCartPayment, deletePayment }} >
            { props.children }
        </PaymentContext.Provider>

    )
}
