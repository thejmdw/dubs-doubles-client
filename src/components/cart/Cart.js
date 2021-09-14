import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Cart.css"

export const Cart = () => {
    const history = useHistory()
    const { cart, getCart } = useContext(CartContext)
    const { createLineItem, deleteLineItem } = useContext(LineItemContext)
    // const { events, getEvents } = useContext(EventContext)
    // const { CartId } = useParams()

    // const { Cart, setCart } = useState({})
    const [lineItems, setLineItems] = useState()

    useEffect(() => {
        getCart()
        // .then(data => setCart(data))
        // getEvents()
    }, [])
    
    useEffect(() => {
        getCart()
        // .then(data => setCart(data))
        // getEvents()
    }, [lineItems])

    const handleRemove = (id) => {
        // const product = {
        //     line_item_id: id
        // }
        deleteLineItem(id)
        .then(setLineItems)
        // .then(() => history.push(`/burgers/detail/${id}`))
      }


    return (
        <>
        <article className="Carts">
        <header className="events__header">
                <h1>Dub's Doubles</h1>
                <h3>420 someway</h3>
            </header>
                        <div className="Cart__description">Order #: {cart.id}</div>
                        <div className="Cart__price">Date: {cart.created_date}</div>
                        <div className="Cart__price">Customer: {cart.customer?.user.first_name}</div>
                        {
                cart.lineitems?.map(item => {
                    return <section key={`combo--${item.id}`} >
                        <div className="combo__name">{item.product.name} ${item.product.price} <button className="btn btn-3" onClick={() => {handleRemove(item.id)}}>Remove Item</button></div>
                        {/* <div className="combo__price">${item.product.price}</div> */}
                        {/* <div className="Frie__edit">
                        <button className="btn btn-3"
                                    onClick={() => history.push(`Combo/edit/${Frie.id}`)}
                                    >Edit Frie</button>
                        </div> */}
                    </section>
                })
            }
                        <div className="Cart__edit">
                            Total: ${cart.total}
                        {/* <button className="btn btn-3" onClick={() => {handleAddClick(Cart.id)}}>Add to Cart</button> */}
                        </div>
                        <div className="Cart__edit">
                        <button className="btn btn-3" onClick="">Checkout</button>
                        </div>
                
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Carts/new")
        }}
        >Register New Cart</button> */}
</>
    )
}