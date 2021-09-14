import React, { useContext, useEffect, useState } from "react"
import { BurgerContext } from "./BurgerProvider.js"
import { LineItemContext } from "../lineitem/LineItemProvider.js"
// import { EventContext } from "./EventProvider.js"
import { useHistory, useParams } from "react-router-dom"
import "./Burger.css"

export const BurgerDetail = () => {
    const history = useHistory()
    const { burger, getBurgerById } = useContext(BurgerContext)
    const { createLineItem } = useContext(LineItemContext)
    // const { events, getEvents } = useContext(EventContext)
    const { burgerId } = useParams()

    // const { burger, setBurger } = useState({})
    

    useEffect(() => {
        getBurgerById(parseInt(burgerId))
        // .then(data => setBurger(data))
        // getEvents()
    }, [])

    const handleAddClick = (id) => {
        const product = {
            product_id: id
        }
        createLineItem(product)
        // .then(() => history.push(`/burgers/detail/${id}`))
      }

    return (
        <>
        <article className="burgers">
        <header className="events__header">
                <h1>{burger?.name}</h1>
            </header>
                        <div className="burger__pic">Pic placeholder</div>
                        <div className="burger__description">{burger.description}</div>
                        <div className="burger__price">${burger.price}</div>
                        <div className="burger__edit">
                        <button className="btn btn-3" onClick={() => {handleAddClick(burger.id)}}>Add to Cart</button>
                        </div>
                
            
        </article>

        {/* <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/Burgers/new")
        }}
        >Register New Burger</button> */}
</>
    )
}
