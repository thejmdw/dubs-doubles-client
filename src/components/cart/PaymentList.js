import React, { useContext, useEffect } from "react"
import { PaymentContext } from "./PaymentProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"
import "./Cart.css"

export const PaymentList = () => {
    const history = useHistory()
    const { payments, getPayments, getPaymentById, setCartPayment } = useContext(PaymentContext)
    // const { events, getEvents } = useContext(EventContext)

    

    useEffect(() => {
        getPayments()
        // getEvents()
    }, [])

    const handlePaymentClick = (id) => {
        // localStorage.setItem('token', id)
        setCartPayment(id)
        history.push(`/checkout`)
      }

    return (
        <>
        <article className="Payment">
        <header className="events__header">
                <h1>Payments</h1>
            </header>
            <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/payment/new")
        }}
        >Add Card</button>
            {
                payments.map(payment => {
                    return <section key={`Payment--${payment.id}`} className="cartCard" onClick={() => {handlePaymentClick(payment.id)}}>
                        <div className="Payment__name">{payment.merchant_name}</div>
                        
                        <div className="Payment__description">{payment.account_number}</div>
                        <div className="Payment__price">{payment.expiration_date}</div>
                    
                    </section>
                })
            }
        </article>
</>
    )
}
