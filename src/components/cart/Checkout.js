import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Cart.css"

export const Checkout = () => {
    const history = useHistory()
    const { cart, getCart, updateCart } = useContext(CartContext)
    // const { createLineItem, deleteLineItem } = useContext(LineItemContext)
    // const { events, getEvents } = useContext(EventContext)
    // const { CheckoutId } = useParams()

    // const { Checkout, setCheckout } = useState({})
    // const [lineItems, setLineItems] = useState()

    useEffect(() => {
        getCart()
        // .then(data => setCheckout(data))
        // getEvents()
    }, [])
    
    // useEffect(() => {
    //     getCheckout()
    //     // .then(data => setCheckout(data))
    //     // getEvents()
    // }, [lineItems])

    const handleUpdate = () => {
        const finalCart = {...cart}
        finalCart.payment_type = localStorage.getItem('token')
        updateCart(finalCart)
        .then(() => history.push(`/`))
      }


    return (
        <>
        <article className="Checkouts">
        <header className="events__header">
                <h1>Dub's Doubles</h1>
                <h3>420 someway</h3>
            </header>
                        <div className="Checkout__description">Order #: {cart.id}</div>
                        <div className="Checkout__price">Date: {cart.created_date}</div>
                        <div className="Checkout__price">Customer: {cart.customer?.user.first_name}</div>
                        {
                cart.lineitems?.map(item => {
                    return <section key={`combo--${item.id}`} >
                        <div className="combo__name">{item.product.name} ${item.product.price}</div>
                        {/* <div className="combo__price">${item.product.price}</div> */}
                        {/* <div className="Frie__edit">
                        <button className="btn btn-3"
                                    onClick={() => history.push(`Combo/edit/${Frie.id}`)}
                                    >Edit Frie</button>
                        </div> */}
                    </section>
                })
            }
                        <div className="Checkout__edit">
                            Total: ${cart.total}
                        {/* <button className="btn btn-3" onClick={() => {handleAddClick(Checkout.id)}}>Add to Checkout</button> */}
                        </div>
                        <div className="Checkout__edit">
                        <button className="btn btn-3" onClick={() => {handleUpdate(cart.id)}}>Place Order</button>
                        </div>
                
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Checkouts/new")
        }}
        >Register New Checkout</button> */}
</>
    )
}