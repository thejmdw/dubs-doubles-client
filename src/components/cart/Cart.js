import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "./CartProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Cart.css"

export const Cart = () => {
    const history = useHistory()
    const { cart, getCart } = useContext(CartContext)
    const { createLineItem, deleteLineItem, deleteLineItemTopping, lineItemToppingObjs, getLineItemToppings } = useContext(LineItemContext)
    // const { events, getEvents } = useContext(EventContext)
    // const { CartId } = useParams()

    // const { Cart, setCart } = useState({})
    const [lineItems, setLineItems] = useState()
    const [lineItemToppings, setLineItemToppings] = useState()

    const [ cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        getCart()
        getLineItemToppings()
    }, [])
    
    useEffect(() => {
        getCart()
        getLineItemToppings()
    }, [lineItems])

    useEffect(() => {
        getCart()
        getLineItemToppings()
    }, [lineItemToppings])

    const handleRemove = (id) => {
        deleteLineItem(id)
        .then(setLineItems)
        setCartTotal()
      }
    const handleRemoveAddOn = (topID, itemID) => {
        const found = lineItemToppingObjs.find(lit => lit.line_item_id === itemID && lit.topping_id === topID)
        deleteLineItemTopping(found.id)
        .then(setLineItemToppings)
      }
    
    useEffect(() => {
        let total = 0
        cart.lineitems?.forEach(item => total += item.product.price)
        setCartTotal(total)
        getCart()
    }, [lineItems])


    return (
        <>
        <article className="Carts">
        <header className="events__header">
                <h1>Dub's Doubles</h1>
                <h3>A Block Near You</h3>
            </header>
                        <div className="Cart__description">Order #: {cart.id}</div>
                        <div className="Cart__price">Date: {cart.created_date}</div>
                        <div className="Cart__price">Customer: {cart.customer?.user.first_name}</div>
                        <div className="Cart__price">{cart.customer?.user.first_name}</div>
                        {
                cart.lineitems?.map(item => {
                    return <section key={`combo--${item.id}`} >
                        <div className="combo__name">{item.product.name} ${item.product.price === 0 ? item.toppings.forEach(topping => {
                            item.product.price += topping.price}) : item.product.price} <button className="btn btn-3" onClick={() => {handleRemove(item.id)}}>Remove Item</button></div>
                        {item.toppings.length > 0 ? item.toppings.map(topping => {
                            return <div> - {topping.name} ${topping.price}<button className="btn btn-3" onClick={() => {handleRemoveAddOn(topping.id, item.id)}}>X</button> </div>
                        }) : ""}
                    </section>
                })
            }
                        <div className="Cart__edit">
                            Total: ${cart.total}
                        {/* <button className="btn btn-3" onClick={() => {handleAddClick(Cart.id)}}>Add to Cart</button> */}
                        </div>
                        <div className="Cart__edit">
                        <button className="btn btn-3" onClick={() => history.push(`/payment`)}>Payment</button>
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
{/* <div className="combo__price">${item.product.price}</div> */}
{/* <div className="Frie__edit">
<button className="btn btn-3"
            onClick={() => history.push(`Combo/edit/${Frie.id}`)}
            >Edit Frie</button>
</div> */}