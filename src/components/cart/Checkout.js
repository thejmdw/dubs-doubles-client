import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartProvider.js"
import { PaymentContext } from "./PaymentProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Cart.css"
import Swal from 'sweetalert2'

export const Checkout = () => {
    const history = useHistory()
    const { cart, getCart, updateCart} = useContext(CartContext)
    const { cartPayment, setCartPayment } = useContext(PaymentContext)
    // const { createLineItem, deleteLineItem } = useContext(LineItemContext)
    // const { events, getEvents } = useContext(EventContext)
    // const { CheckoutId } = useParams()

    // const { Checkout, setCheckout } = useState({})
    // const [lineItems, setLineItems] = useState()

    const [lineItems, setLineItems] = useState()
    const [lineItemToppings, setLineItemToppings] = useState()

    const [ cartTotal, setCartTotal] = useState(0)

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

    useEffect(() => {
        getCart()
        // .then(data => setCart(data))
        // getEvents()
    }, [lineItemToppings])

    
    useEffect(() => {
        let total = 0
        cart.lineitems.forEach(item => total += item.product.price)
        setCartTotal(total)
    }, [lineItems])

    const handleUpdate = () => {
        const finalCart = {...cart}
        finalCart.payment_type = cartPayment
        setCartTotal(0)
        setCartPayment(0)
        updateCart(finalCart)
        .then(() => Swal.fire({
            title: `Order #${finalCart.id} Confirmed`,
            confirmButtonText: "great"

        }).then(result => {
            if (result.isConfirmed) {
                history.push('/')
            }
        } ) )
        // .then(() => history.push(`/`))
      }
    
    console.log(cartPayment)

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
                        <div className="combo__name">{item.product.name} ${item.product.price === 0 ? item.toppings.forEach(topping => {
                            item.product.price += topping.price}) : item.product.price}</div>
                        {item.toppings.length > 0 ? item.toppings.map(topping => {
                            return <div> - {topping.name} ${topping.price} </div>
                        }) : ""}
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